require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token required '});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });

        req.user = user;
        next();
    })
}

app.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}, this is your dashboard!` });
});

// used to create token after successfully logging in
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "password123") {
        const payload = { username };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).json({ message: 'Invalid Credentials '});
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});