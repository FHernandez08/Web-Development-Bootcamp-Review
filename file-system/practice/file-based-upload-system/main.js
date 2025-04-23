const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/" ) {
        // Show upload form
        // the req.url is needed in both methods to handle multiple routes per method **IDEAL TO ADD**
        res.writeHead(200, {'Content-Type': "text/html"});
        res.end(`<form method="POST" action="/uploads">
            <input type="file" name="file" />
            <button type="submit">Upload</button>
            </form>`)

    }

    else if (req.method === "POST" && req.url === "/uploads") {
        // Handles the file upload logic
        const filePath = path.join(__dirname, 'uploads', 'uploaded_file.txt');

        const writeStream = fs.createWriteStream(filePath);

        req.on('data', (chunk) => {
            writeStream.write(chunk);
        });

        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("File uploaded successfully");
        });

        req.on('error', (err) => {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(`Error occurred: ${err.message}`);
        });
    }

    else {
        // Handles errors or other methods
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end("Route not found!");
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});