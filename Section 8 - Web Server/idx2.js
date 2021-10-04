const http = require('http');

const fileSystem = require('fs');

const home = fileSystem.readFileSync('./home.html');
const about = fileSystem.readFileSync('./about.html');

http
    .createServer((request, response) => {
        const { url } = request;
        if (url === '/') {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(home);
        } else if (url === '/about') {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(about);
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write('Page not found!');
        }
        response.end();
    })
    .listen(8080);