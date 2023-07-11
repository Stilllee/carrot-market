import nodemailer from "nodemailer";

const smtpTransport = nodemailer.createTransport({
  service: "Naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default smtpTransport;
