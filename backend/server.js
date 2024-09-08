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
    try {
        const { data, error } = await supabase
            .from('users')
            .insert([{ email, password }]);

        if (error) throw error;

        res.status(201).json({ message: 'User registered successfully', user: data[0] });
    } catch (error) {
        res.status(400).json({ error: error.message });
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