const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("IdeaMart Backend Running");
});

app.post("/subscribe", (req, res) => {
  console.log("Subscribe Request:", req.body);

  res.json({
    success: true,
    message: "OTP Sent Successfully"
  });
});

app.post("/verify", (req, res) => {
  console.log("Verify Request:", req.body);

  res.json({
    success: true,
    message: "OTP Verified Successfully"
  });
});

app.post("/unsubscribe", (req, res) => {
  console.log("Unsubscribe Request:", req.body);

  res.json({
    success: true,
    message: "Unsubscribed Successfully"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
