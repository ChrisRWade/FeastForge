/**
 * Email Utility Module
 *
 * This module provides functionalities to send emails using Nodemailer with a Gmail account.
 * It also includes a function to generate a styled HTML email content with a header and footer.
 *
 * Requirements:
 * - A Gmail account
 * - Nodemailer package
 * - dotenv package for loading environment variables
 * - An .env file with the following variables:
 *    - GMAIL_ACCOUNT: Your Gmail email address
 *    - GMAIL_APP_PASSWORD: Your Gmail app password (generated if using 2FA)
 *
 * Usage:
 * 1. Import the module functions:
 *    const { sendEmail, generateEmailContent } = require('./path/to/this/module');
 *
 * 2. Generate email content with the desired body:
 *    const bodyContent = "<p>Your email body content goes here.</p>";
 *    const htmlContent = generateEmailContent(bodyContent);
 *
 * 3. Send an email:
 *    const to = "recipient@example.com";
 *    const subject = "Your Email Subject";
 *    const text = "Your plain text content for non-HTML email clients.";
 *    sendEmail(to, subject, text, htmlContent);
 *
 * Functions:
 * - sendEmail(to, subject, text, htmlContent)
 *   Sends an email using the provided parameters.
 *   - to: Recipient's email address
 *   - subject: Subject of the email
 *   - text: Plain text content of the email
 *   - htmlContent: HTML content of the email (generated using generateEmailContent)
 *
 * - generateEmailContent(bodyContent)
 *   Generates styled HTML email content with a header and footer.
 *   - bodyContent: The main body content of the email in HTML format
 *
 * Example:
 * const { sendEmail, generateEmailContent } = require('./emailUtil');
 * const bodyContent = "<p>Hello, this is a test email!</p>";
 * const htmlContent = generateEmailContent(bodyContent);
 * sendEmail("recipient@example.com", "Test Email", "This is a test email.", htmlContent);
 *
 * Notes:
 * - Ensure that your .env file is correctly set up with your Gmail account credentials.
 * - You may need to allow less secure apps or use an app password for your Gmail account.
 * - This module uses flexbox for dynamic email layout styling.
 */

const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../.env")});

const dev = process.env.NODE_ENV === "development";

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ACCOUNT, // your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // your Gmail password or app password
  },
});

// Function to send an email
const sendEmail = (to, subject, text, htmlContent) => {
  const mailOptions = {
    from: "noreply@feastforge.net", // sender address (your custom domain)
    to: dev ? "crwade11@gmail.com" : to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html: htmlContent, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // Preview URL: %s for testing (for development purposes)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};

const generateEmailContent = (bodyContent) => {
  return `
    <div style="display: flex; flex-direction: column; min-height: 100vh; font-family: Arial, sans-serif; color: #333;">
      <header style="background-color: #4CAF50; color: white; padding: 10px; text-align: center;">
        <h1>FeastForge</h1>
      </header>
      <main style="flex: 1; padding: 20px;">
        ${bodyContent}
      </main>
      <footer style="background-color: #f1f1f1; color: #555; text-align: center; padding: 10px;">
        <p>&copy; 2024 FeastForge. All rights reserved.</p>
      </footer>
    </div>
  `;
};

module.exports = {sendEmail, generateEmailContent};
