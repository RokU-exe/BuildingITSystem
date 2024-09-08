const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Routes
app.get('/', (req, res) => {
    console.log('Received request:', req.method, req.url, req.headers);
    res.status(200).json({
    });
});

// User registration
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log('Received registration request for:', email);

    try {
        const { data, error } = await supabase
            .from('users')
            .insert([{ email, password }])
            .select();  // Add this to return the inserted row

        console.log('Supabase response:', { data, error });

        if (error) {
            console.error('Supabase error:', error);
            return res.status(400).json({
                message: "User email already exist!"
            });
        }

        if (!data || data.length === 0) {
            console.log('No data returned from insert operation');
            return res.status(200).json({
                message: 'User registered successfully, but no data returned',
                user: { email }
            });
        }

        console.log('User registered successfully:', data[0]);
        res.status(201).json({
            message: 'User registered successfully',
            user: data[0]
        });

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// User login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log('Attempting to log in user:', email);
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('email', email)
            .single();

        if (error) {
            console.error('Supabase error:', error);
            // If the error is because no rows were returned, it means the user doesn't exist
            if (error.code === 'PGRST116') {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            throw error;
        }

        if (data && data.password === password) {
            console.log('Login successful for user:', email);
            res.status(200).json({ message: 'Login successful', user: { id: data.id, email: data.email } });
        } else {
            console.log('Invalid credentials for user:', email);
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});