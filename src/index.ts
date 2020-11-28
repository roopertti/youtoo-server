import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from "socket.io";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

import registerRouter from "./router";

/**
 * Express & SocketIO configuration
 */
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

/**
 * Middleware
 */
app.use(cors({
    // Allow requests from frontend dev server
    origin: "http://localhost:3000"
}));

/**
 * Port
 */
const PORT = process.env.PORT || 8000;

/**
 * Prisma configuration
 */
const prisma = new PrismaClient();

registerRouter({ app, prisma });

io.on("connection", (socket: Socket) => {
    socket.emit("message", "Welcome!");
});

httpServer.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`listening to port ${PORT}`);
});

