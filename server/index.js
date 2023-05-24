import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import Redis from 'ioredis';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());
const server = http.createServer(app);

const redisClient = new Redis({
  port: Number(process.env.REDIS_PORT),
  host: process.env.REDIS_URL,
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT'],
  },
});

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  let userID = socket.handshake.headers['user_id'];
  let gameID = socket.handshake.headers['game_id'];

  socket.on('disconnect', () => {
    console.log(`User Disconnected: ${socket.id}`);
  });

  socket.on('createRoom', () => {
    const gameState = {
      host: userID,
      test: 2,
    };

    if (!userID) {
      userID = nanoid();
      gameID = uuidv4();
      redisClient.set(gameID, JSON.stringify(gameState), (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log('new room created!');
          console.log(res);
          socket.emit('redirectClient', `/room/${gameID}`);
        }
      });
      socket.emit('pass_ids', userID, gameID);
    } else {
      console.log('already in game');
    }
  });

  socket.on('joinRoom', (roomID) => {
    if (!userID) {
      redisClient.get(roomID, (err, res) => {
        if (err) console.log(err);
        else {
          if (res) {
            gameID = roomID;
            socket.emit('redirectClient', `/room/${gameID}`);
            socket.emit('pass_ids', userID, gameID);
            socket.to(gameID).emit('opponentJoined');
            console.log(`User ${userID} has joined room ${gameID}!`);
          } else {
            console.log(`Game ID ${roomID} does not exist.`);
          }
        }
      });
    } else {
      console.log('Already in a game.');
    }
  });

  socket.on('leaveRoom', () => {
    if (gameID) {
      socket.leave(gameID);
      socket.emit('redirectClient', `/find-game`);
      console.log(`User ${userID} has left room ${gameID}.`);
    } else {
      console.error('No game instance was found.');
    }
  });

  socket.on('rejoinRoom', () => {
    if (userID && gameID) {
      redisClient.get(gameID, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      });
    } else {
      console.error('No game was found OR no user ID was found.');
    }
  });

  socket.on('closeRoom', () => {
    if (gameID) {
      redisClient.del(gameID, (err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res);
          console.log(`Room ${gameID} has been deleted.`);
          userID = null;
          gameID = null;
        }
      });
    } else {
      console.error('No game instance was found.');
    }
  });
});

server.listen(3001, () => {
  console.log('--- SERVER IS RUNNING');
});
