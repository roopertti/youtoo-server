import { generate } from "randomstring";
import { PrismaClient } from "@prisma/client"

class RoomService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;

    this.createNewRoom = this.createNewRoom.bind(this);
  }

  async createNewRoom() {
    const roomRef = generate({ length: 8 });
    const room = await this.prisma.room.create({
      select: { ref: true },
      data: {
        ref: roomRef,
        lastActive: new Date()
      }
    });
    return room;
  }
}

export default RoomService;