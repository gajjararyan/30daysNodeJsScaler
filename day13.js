const express = require('express');
const app = express();

const http = require('http');

const WebSocket = require('ws');

const server = http.createServer(app);

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
      console.log('Received message:', message);
      ws.send(message);
    });

    ws.on('close', function close() {
      console.log('Disconnected');
    });
  });
}

setupWebSocket(server);

const port = 3000;
server.listen(port, function() {
  console.log(`Server is listening on port ${port}`);
});
