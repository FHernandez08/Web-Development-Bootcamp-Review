require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "password123") {
        const payload = { username };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).json({ message: 'Invalid Credentials '});
})