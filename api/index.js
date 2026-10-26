export default function handler(req, res) {
  res
    .status(200)
    .json({ success: true, message: "Xlligent Softwares backend is running." });
}
