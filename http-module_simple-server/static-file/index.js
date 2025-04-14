const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3500;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Server Error!');
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
});

server.listen(port, () => {
    console.log(`Serve is running at http://localhost:${port}`);
});