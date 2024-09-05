const express = require('express');
const supabase = require('./supabaseClient');
const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) throw error;
        res.status(201).json({ user, message: 'Signup successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const { user, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
        res.status(200).json({ user, message: 'Login successful' });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

// Logout
router.post('/logout', async (req, res) => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;