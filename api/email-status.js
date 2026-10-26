import { isMailConfigured } from "./_lib/mail.js";

export default function handler(req, res) {
  res.status(200).json({ success: true, configured: isMailConfigured() });
}
