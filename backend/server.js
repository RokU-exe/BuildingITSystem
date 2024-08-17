const express = require('express');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

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

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
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