const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedURL = url.parse(req.url, true);

    // Set the default status code
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Handle the '/' route
    if (parsedURL.pathname === '/' || parsedURL.pathname === 'index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading index.html');
            }
            else {
                res.end(data);  // Serve the HTML content for the home page
            }
        });
    }

    // Handle the '/about' route
    else if (parsedURL.pathname === '/about' || parsedURL.pathname === 'about.html') {
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading about.html');
            }
            else {
                res.end(data); // Serve the HTML content for the About page
            }
        });
    }

    // Serve static files **CSS**
    else if (parsedUrl.pathname === '/style.css') {
        fs.readFile(path.join(__dirname, 'style.css'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading styles.css');
            } else {
                res.setHeader('Content-Type', 'text/css');
                res.end(data);  // Serve the CSS file
            }
        });
    }

    else {
        // 404 Error for unknown routes
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});