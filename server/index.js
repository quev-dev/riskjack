import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const app = express();

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("test_redux", (data) => {
    console.log(data);
  });
});

server.listen(3001, () => {
  console.log("--- SERVER IS RUNNING");
});
