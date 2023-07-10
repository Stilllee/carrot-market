import client from "@/libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET요청이 오면 정상이라고 보내면 안되니 method를 확인해서 잘못된 호출이라고 알려줘야 함
  if (req.method !== "POST") {
    res.status(401).end();
  }
  console.log(req.body);
  res.status(200).end();
}
