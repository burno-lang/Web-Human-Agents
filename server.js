const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
    // Normalize URL to prevent directory traversal
    const safeUrl = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
    let filePath = path.join(__dirname, safeUrl);

    // Check if path exists
    fs.stat(filePath, (err, stats) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // SPA fallback for root index, OR 404 if explicit file requested
                // For simplicity in this project, we fallback to root index.html
                fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Server Error loading index.html');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
            return;
        }

        // If it's a directory, try to serve index.html
        if (stats.isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }

        // Now read the file (either the original file or the index.html we just appended)
        const ext = path.extname(filePath).toLowerCase();
        const contentType = mimeTypes[ext] || 'application/octet-stream';

        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    // Need to handle case where directory existed but index.html didn't
                    // Fallback to root index.html? Or 404? 
                    // For /live/ not having index.html, it's a 404 realistically, or root index.
                    // But we put index.html there, so it should be fine.
                    res.writeHead(404);
                    res.end('404 Not Found');
                } else {
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
