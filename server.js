import express from "express"
import http from "http"
import {createGame} from "./public/src/game.js";
import soketio from "socket.io"

const app = express();
const server = http.createServer(app);
const sockets = soketio(server);

app.use(express.static('public'));

const game = createGame();

sockets.on('connection', socket => {
    const playerId = socket.id;
    game.addPlayer({playerId, playerX: Math.floor(Math.random() * 10), playerY: Math.floor(Math.random() * 10)});

    sockets.emit('setup', game.state);

    socket.on('disconnect', socket => {
        game.removePlayer({playerId})
        sockets.emit('setup', game.state);
    });
});

server.listen(8000, () => console.log('Serving in http://localhost:8000'));