const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log('Received request:', req.method, req.url, req.headers);
    res.status(200).json({
        text: "Hello bro"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});