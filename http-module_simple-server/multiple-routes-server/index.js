const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {

    // this loads up the homepage
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'pages', 'index.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("Server Error!");
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        })
    }

    // this loads up the about page of the website
    else if (req.url === '/about' || req.url === '/about.html') {
        const filePath = path.join(__dirname, 'pages', 'about.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("Server Error!");
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        })
    }

    // this loads up the contact page of the website
    else if (req.url === '/contact' || req.url === '/contact.html') {
        const filePath = path.join(__dirname, 'pages', 'contact.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("Server Error!");
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        })
    }

    // this is where the error: page not shown will be displayed
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Page not found!")
    }
})

server.listen(port, () => {
    console.log(`The server is up and running at http://localhost:${port}`);
});