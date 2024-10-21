const http = require('http');
const fs = require('fs');

const PORT = 4000

const server = http.createServer((req, res) => {
    const log = `${Date.now().toLocaleString()}: ${req.url}\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        console.log('new request');
        res.end("Hello World");
    })
})

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));