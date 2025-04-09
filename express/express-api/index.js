const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Hello Stranger! How are you?",
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});