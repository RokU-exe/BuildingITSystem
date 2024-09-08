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
        text: "Hello bro"
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
            return res.status(400).json({ error: error.message });
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
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('email', email)
            .eq('password', password)
            .single();

        if (error) throw error;

        if (data) {
            res.status(200).json({ message: 'Login successful', user: data });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});