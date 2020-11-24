import { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import RoomService from "./services/RoomService";
import UserService from "./services/UserService";

interface RouterProps {
  app: Express;
  prisma: PrismaClient
}

interface RoomUserDTO {
  room: { ref: string };
  user: { ref: string; name: string; }
}

export default ({ app, prisma }: RouterProps) => {

  app.get("/", (req: Request, res: Response) => {
    res.send("Terve");
  });

  app.get("/room", async (req: Request, res: Response) => {
    const roomService = new RoomService(prisma);
    const userService = new UserService(prisma);

    const room = await roomService.createNewRoom();
    const user = await userService.createUser(room.ref);

    const response: RoomUserDTO = { room, user };

    res.status(201).send(response);
  });
};