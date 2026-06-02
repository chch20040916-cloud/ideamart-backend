const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Backend Running"
  });

});

app.post("/subscribe", (req, res) => {

  console.log("BODY =", req.body);

  res.setHeader("Content-Type", "application/json");

  return res.status(200).json({
    success: true,
    message: "OTP Sent Successfully"
  });

});

app.post("/verify", (req, res) => {

  console.log("VERIFY =", req.body);

  return res.status(200).json({
    success: true,
    message: "OTP Verified Successfully"
  });

});

app.post("/unsubscribe", (req, res) => {

  console.log("UNSUBSCRIBE =", req.body);

  return res.status(200).json({
    success: true,
    message: "Unsubscribed Successfully"
  });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log("Server running on port " + PORT);

});
