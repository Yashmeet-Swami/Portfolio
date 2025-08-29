const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { username, email, message } = req.body;

  if (!username || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  console.log("Contact form submitted:");
  console.log("Name:", username);
  console.log("Email:", email);
  console.log("Message:", message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Message from ${username}`,
    text: `Name: ${username}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, msg: "Message received and email sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
