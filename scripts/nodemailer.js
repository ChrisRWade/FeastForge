const nodemailer = require("nodemailer");

const path = require("path");

require("dotenv").config({path: path.resolve(__dirname, "../.env")});

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ACCOUNT, // your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // your Gmail password or app password
  },
});

// Send an email using the transporter
const mailOptions = {
  from: "noreply@feastforge.net", // sender address (your custom domain)
  to: "cwade@frankdoor.com", // list of receivers
  subject: "Test Email", // Subject line
  text: "Hello, this is a test email!", // plain text body
  html: "<b>Hello, this is a test email!</b>", // html body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
  // Preview URL: %s for testing (for development purposes)
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});
