const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');
});

// 3000 is port number 
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});