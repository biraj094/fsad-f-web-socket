




socket.on('message', (message) => {
    console.log(message);
    io.emit('message', `${socket.id.substr(0,2)} said ${message}` ); });
    });



    