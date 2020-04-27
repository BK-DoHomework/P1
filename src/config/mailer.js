import nodeMailer from "nodemailer";

//khoi tao cac bien moi truong

let adminEmail = process.env.MAIL_USER;
let adminPassword = process.env.MAIL_PASSWORD;
let mailHost = process.env.MAIL_HOST;
let mailPort = process.env.MAIL_PORT;

let sendMail = (to, subject, htmlContent) => {
  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    host: mailHost,
    port: mailPort,
    secure: false, // use ssl -tsl
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  });


  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent

  }

  return transporter.sendMail(options); // this default Promise

}
module.exports = sendMail;
// https://myaccount.google.com/lesssecureapps --?truy cap kem an toan
