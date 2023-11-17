

const https = require('http').createServer();



server.on('connection', socket => 
    { socket.on('message', message => 
        { socket.send(`Roger that! ${message}`); });
    });

