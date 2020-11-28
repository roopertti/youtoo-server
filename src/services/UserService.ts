import { generate } from "randomstring";
import { PrismaClient } from "@prisma/client";

class UserService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;

    this.createUser = this.createUser.bind(this);
  }

  async createUser(roomRef: string) {
    const userRef = generate({ length: 4 });
    const newUser = await this.prisma.user.create({
      select: { ref: true, name: true },
      data: { 
        ref: userRef,
        name: `User#${userRef}`,
        Room: {
          connect: { ref: roomRef }
        }
      }
    });
    return newUser;
  }
}

export default UserService;