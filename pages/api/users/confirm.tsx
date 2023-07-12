import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body; // req.body에 token을 담아 보냄
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  }); // 그 token을 찾아 봄

  if (!foundToken) return res.status(404).end(); // 그 token이 없으면 404 not found를 return함

  req.session.user = {
    id: foundToken.userId,
  }; // token이 있다면 그 token을 보유한 유저의 id를 req.session.user에 넣음

  await req.session.save(); // 그리고 session을 저장함

  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  }); // 그 다음 찾은 token의 userId와 같은 userId를 가진 token을 전부 삭제함 (token을 한 번만 사용하도록)
  res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    method: "POST",
    handler,
    isPrivate: false,
  })
);
