const express = require('express');
const sessions = require('express-session');

const app = express();

app.use(
    sessions({
        secret: '',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        },
        resave: true,
        saveUninitialized: false,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('Server running at port 3000');
});