import twilio from "twilio";
import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import smtpTransport from "@/libs/server/email";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    // 테스트를 위한 주석처리
    /* const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      // 실제 서비스에서는 phone을 작성해야 하지만, twilio trial 요금제를 쓰고 있기 때문에 그냥 내 핸드폰 번호만을 적어놓음
      // typescript에게 MY_PHONE은 확실히 존재하는 변수라고 알려주기 위해 !를 붙임
      from: "+12345162429",
      body: `Your login token is ${payload}`,
    });
    console.log(message); */
  }
  if (email) {
    // 테스트를 위한 주석처리
    /* const mailOptions = {
      from: process.env.MAIL_ADDRESS,
      to: email,
      subject: "Nomad Carrot Authentication Email",
      text: `Authentication Code : ${payload}`,
    };
    const result = await smtpTransport.sendMail(
      mailOptions,
      (error, responses) => {
        if (error) {
          console.log(error);
          return null;
        } else {
          console.log(responses);
          return null;
        }
      }
    );
    smtpTransport.close();
    console.log(result); */
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
