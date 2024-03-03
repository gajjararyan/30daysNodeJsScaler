const io = require('socket.io');
function setupWebSocketServer(httpServer) {
}
const io = new io.Server(httpServer);
io.on('connection', (socket) => {
    
});

io.on('chat message', (msg) => {
    
});

io.on('disconnect', (socket) => {
    
});
module.exports = setupWebSocketServer;
