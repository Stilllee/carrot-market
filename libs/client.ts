import { PrismaClient } from "@prisma/client";
import { getMaxListeners } from "process";

const client = new PrismaClient();

client.user.create({
  data: {
    email: "hi",
    name: "hi",
  },
});
