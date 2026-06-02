const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SwayanOTP Backend Running");
});

app.post("/subscribe", async (req, res) => {
  const { mobile } = req.body;

  console.log("Subscribe Request:", mobile);

  res.json({
    success: true,
    message: "OTP Sent Successfully",
  });
});

app.post("/verify", async (req, res) => {
  const { mobile, otp } = req.body;

  console.log("Verify OTP:", mobile, otp);

  if (otp === "1234") {
    return res.json({
      success: true,
      message: "Subscription Successful",
    });
  }

  res.json({
    success: false,
    message: "Invalid OTP",
  });
});

app.post("/unsubscribe", async (req, res) => {
  const { mobile } = req.body;

  console.log("Unsubscribe:", mobile);

  res.json({
    success: true,
    message: "Unsubscribed Successfully",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
