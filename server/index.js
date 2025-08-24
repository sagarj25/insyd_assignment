import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_notification", (data) => {
    io.emit("receive_notification", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(4000, () => {
  console.log("✅ Server running on port 4000");
});
