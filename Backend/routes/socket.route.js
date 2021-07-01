const { create, join, start, play, bid, next } = require('../controller/game');

const socketRouter = (io) => {

    io.on('connection', socket => {
        console.log('Socket connected', socket.id);

        socket.on('createAuction', data => {
            create(io, socket, data);
        });
        socket.on('joinAuction', data => {
            join(io, socket, data);
        });
        socket.on('requestPlay', data => {
            start(io, data);
        })
        socket.on('start', data => {
            play(data);
        })
        socket.on('bid', data => {
            bid(socket, data);
        })
        socket.on('next', data => {
            next(io, data)
        }) 
    });
};

module.exports = socketRouter;