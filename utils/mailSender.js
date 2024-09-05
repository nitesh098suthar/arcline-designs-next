import nodemailer from "nodemailer";

export const mailSender = async (email, subject, body) => {
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  const done = transport.sendMail({
    to: email,
    subject,
    html: body,
    from: process.env.SMTP_MAIL,
  });

  if (done) return true;
  else return false;
};
