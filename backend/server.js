const express = require('express');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
const axios = require('axios');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Supabase client initialization
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Key is missing. Please check your .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Authentication middleware
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error) throw error;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Example of a protected route
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Sign Up route
app.post('/auth/signup', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name
        }
      }
    });
    if (error) throw error;
    res.status(201).json({ user, message: 'Signup successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    res.status(200).json({ user: data.user, session: data.session, message: 'Login successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Logout route
app.post('/auth/logout', async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get user profile
app.get('/profile', authMiddleware, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', req.user.id)
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update user profile
app.put('/profile', authMiddleware, async (req, res) => {
  const { name, avatar_url } = req.body;
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update({ name, avatar_url })
      .eq('id', req.user.id);

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update user password
app.post('/auth/update-password', async (req, res) => {
  const { newPassword } = req.body;
  try {
    const { user, error } = await supabase.auth.updateUser({
      password: newPassword
    });
    if (error) throw error;
    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Test Supabase connection
app.get('/test-db', async (req, res) => {
  console.log('Attempting to connect to Supabase...');
  try {
    const { data, error } = await supabase.from('test').select('*').limit(1);
    
    if (error) throw error;
    
    console.log('Supabase connection successful');
    res.json({ message: 'Supabase connection successful', data });
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    res.status(500).json({ message: 'Error connecting to Supabase', error: error.message });
  }
});

// Test inserting a row
app.post('/test-insert', async (req, res) => {
  console.log('Attempting to insert data...');
  try {
    const { name, description } = req.body;
    const { data, error } = await supabase
      .from('test')
      .insert([{ name, description }]);
    
    if (error) throw error;
    
    console.log('Insert successful');
    res.json({ message: 'Insert successful', data });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ message: 'Error inserting data', error: error.message });
  }
});

// Test updating a row
app.put('/test-update/:id', async (req, res) => {
  console.log(`Attempting to update data for id: ${req.params.id}`);
  try {
    const { description } = req.body;
    const { data, error } = await supabase
      .from('test')
      .update({ description })
      .eq('id', req.params.id);
    
    if (error) throw error;
    
    console.log('Update successful');
    res.json({ message: 'Update successful', data });
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ message: 'Error updating data', error: error.message });
  }
});

// Test deleting a row
app.delete('/test-delete/:id', async (req, res) => {
  console.log(`Attempting to delete data for id: ${req.params.id}`);
  try {
    const { data, error } = await supabase
      .from('test')
      .delete()
      .eq('id', req.params.id);
    
    if (error) throw error;
    
    console.log('Delete successful');
    res.json({ message: 'Delete successful', data });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ message: 'Error deleting data', error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Supabase URL: ${supabaseUrl}`);
  console.log(`Supabase Key: ${supabaseKey ? '********' : 'Not Set'}`);
});

// AI Chatbox endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    // Replace with actual AI API call
    const aiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    res.json({ message: aiResponse.data.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});