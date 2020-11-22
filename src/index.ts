import express, { Request, Response } from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
// eslint-disable-next-line import/newline-after-import
const io = require("socket.io")(server);
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Terveppä hei");
});

io.on("connection", () => {
    console.log("user connected");
});

server.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

