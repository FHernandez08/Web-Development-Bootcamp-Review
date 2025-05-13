const express = require("express");
const app = express();
const authMiddleware = require('./authMiddleware');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }), process.env.JWT_SECRET, { expiresIn: '1h' };
};

app.use(express.json());

app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = { id: 1, username }

    const token = generateToken(user);
    res.json({ token });
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});