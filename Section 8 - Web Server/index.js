const http = require('http');

http
    .createServer((request, response) => {
        response.write("HELLO WORLD FROM MY FIRST NODE SERVER -GaffRivolta");
        response.end();
    })
    .listen(8080);