
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

const app = express();
const PORT = process.env.PORT || 5000;

// =====================================================
// MIDDLEWARE
// =====================================================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "20kb" }));

// =====================================================
// HELPER FUNCTIONS
// =====================================================

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

// =====================================================
// EMAIL CONFIGURATION
// =====================================================

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// =====================================================
// HOME ROUTE
// =====================================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Xlligent Softwares backend is running.",
  });
});

// =====================================================
// EMAIL STATUS ROUTE
// =====================================================

app.get("/api/email-status", (req, res) => {
  res.status(200).json({
    success: true,
    configured: Boolean(
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.MAIL_TO
    ),
  });
});

// =====================================================
// CONTACT FORM API
// Supports both MergedContact.jsx and ContactPage.jsx
// =====================================================

app.post("/api/contact", async (req, res) => {
  try {
    // -------------------------------------------------
    // 1. GET FORM DATA
    // -------------------------------------------------

    const name = cleanString(req.body.name);
    const email = cleanString(req.body.email).toLowerCase();

    // MergedContact sends "phone".
    // ContactPage also sends "phone".
    const phone = cleanString(req.body.phone);

    // ContactPage fields
    const product = cleanString(req.body.product);
    const requirement = cleanString(req.body.requirement);

    // MergedContact field
    const message = cleanString(req.body.message);

    // -------------------------------------------------
    // 2. REQUIRED FIELD VALIDATION
    // -------------------------------------------------

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill in your name, email, and phone number.",
      });
    }

    if (name.length > 120) {
      return res.status(400).json({
        success: false,
        message: "Name must not exceed 120 characters.",
      });
    }

    // -------------------------------------------------
    // 3. EMAIL VALIDATION
    // -------------------------------------------------

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email) || email.length > 254) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // -------------------------------------------------
    // 4. INTERNATIONAL PHONE NUMBER VALIDATION
    // -------------------------------------------------

    // Frontend must send the complete international number,
    // for example: +919876543210
    const parsedPhone = parsePhoneNumberFromString(phone);

    if (!parsedPhone || !parsedPhone.isValid()) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number for the selected country.",
      });
    }

    // India: exactly 10 national digits, starting with 6–9.
    if (
      parsedPhone.country === "IN" &&
      !/^[6-9]\d{9}$/.test(parsedPhone.nationalNumber)
    ) {
      return res.status(400).json({
        success: false,
        message: "Indian mobile numbers must contain exactly 10 digits and start with 6, 7, 8, or 9.",
      });
    }

    // Store the phone in standardized international format.
    const validPhone = parsedPhone.number;

    // -------------------------------------------------
    // 5. MESSAGE LENGTH VALIDATION
    // -------------------------------------------------

    if (
      product.length > 200 ||
      requirement.length > 10000 ||
      message.length > 10000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length.",
      });
    }

    // -------------------------------------------------
    // 6. CHECK EMAIL CONFIGURATION
    // -------------------------------------------------

    if (
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.MAIL_TO
    ) {
      console.error("Email configuration is incomplete.");

      return res.status(500).json({
        success: false,
        message: "Email service is not configured. Please contact us directly.",
      });
    }

    // -------------------------------------------------
    // 7. PREPARE EMAIL CONTENT
    // -------------------------------------------------

    const submittedMessage = message || requirement || "No message provided.";
    const submittedProduct = product || "Not specified";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(validPhone);
    const safeProduct = escapeHtml(submittedProduct);
    const safeMessage = escapeHtml(submittedMessage).replace(/\n/g, "<br>");

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Website Inquiry</title>
        </head>

        <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;color:#202938;">
          <div style="max-width:650px;margin:30px auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">

            <div style="background:#14213d;padding:26px 30px;color:#ffffff;">
              <h1 style="margin:0;font-size:23px;">Xlligent Softwares</h1>
              <p style="margin:8px 0 0;font-size:14px;color:#dbe4f0;">
                New Website Contact Inquiry
              </p>
            </div>

            <div style="padding:28px 30px;">
              <p style="margin-top:0;font-size:15px;">
                A new inquiry has been submitted through the website.
              </p>

              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:bold;width:35%;">Name</td>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;">${safeName}</td>
                </tr>

                <tr>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Email</td>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;">${safeEmail}</td>
                </tr>

                <tr>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Phone</td>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;">${safePhone}</td>
                </tr>

                <tr>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Product / Service</td>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;">${safeProduct}</td>
                </tr>

                <tr>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:bold;vertical-align:top;">Requirement / Message</td>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;line-height:1.7;">${safeMessage}</td>
                </tr>
              </table>

              <p style="margin:25px 0 0;font-size:13px;color:#6b7280;">
                You can reply directly to this email to contact the person who submitted the inquiry.
              </p>
            </div>

            <div style="background:#f8fafc;padding:16px 30px;text-align:center;font-size:12px;color:#6b7280;">
              This email was generated automatically by the Xlligent Softwares website.
            </div>

          </div>
        </body>
      </html>
    `;

    // -------------------------------------------------
    // 8. SEND EMAIL
    // -------------------------------------------------

    await transporter.sendMail({
      from: {
        name: "Xlligent Softwares Website",
        address: process.env.SMTP_USER,
      },

      to: process.env.MAIL_TO,

      replyTo: {
        name,
        address: email,
      },

      subject: `New Website Inquiry from ${name}`,

      text: [
        "New Website Contact Inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${validPhone}`,
        `Product / Service: ${submittedProduct}`,
        `Requirement / Message: ${submittedMessage}`,
      ].join("\n"),

      html: htmlContent,
    });

    // -------------------------------------------------
    // 9. SUCCESS RESPONSE
    // -------------------------------------------------

    return res.status(200).json({
      success: true,
      message: "Thank you! Your inquiry has been submitted successfully.",
    });

  } catch (error) {
    console.error("Contact form error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your inquiry right now. Please try again later.",
    });
  }
});

// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, () => {
  console.log(`Xlligent Softwares backend running on port ${PORT}`);
});
