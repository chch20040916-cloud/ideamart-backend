<!DOCTYPE html>
<html>

<head>
  <title>IdeaMart OTP</title>

  <style>

    body{
      background:#0f172a;
      font-family:Arial;
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      color:white;
    }

    .box{
      width:320px;
      background:#1e293b;
      padding:25px;
      border-radius:15px;
    }

    input{
      width:100%;
      padding:12px;
      margin-top:10px;
      border:none;
      border-radius:10px;
    }

    button{
      width:100%;
      padding:12px;
      margin-top:10px;
      border:none;
      border-radius:10px;
      background:#0ea5e9;
      color:white;
      font-weight:bold;
      cursor:pointer;
    }

    #msg{
      margin-top:15px;
      text-align:center;
    }

  </style>

</head>

<body>

<div class="box">

  <h1>IdeaMart OTP</h1>

  <input
    type="text"
    id="mobile"
    placeholder="Mobile Number"
  >

  <button onclick="subscribeUser()">
    Subscribe
  </button>

  <input
    type="text"
    id="otp"
    placeholder="Enter OTP"
  >

  <button onclick="verifyOtp()">
    Verify OTP
  </button>

  <button onclick="unsubscribeUser()">
    Unsubscribe
  </button>

  <div id="msg"></div>

</div>

<script>

const API =
"https://ideamart-backend-1.onrender.com";

function showMessage(text,color){

  document.getElementById("msg").innerHTML =
  `<p style="color:${color}">${text}</p>`;

}

async function subscribeUser(){

  const mobile =
  document.getElementById("mobile").value;

  try{

    const response = await fetch(
      API + "/subscribe",
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          mobile:mobile
        })

      }
    );

    const data = await response.json();

    showMessage(data.message,"lightgreen");

  }

  catch(error){

    console.log(error);

    showMessage("Server Error","red");

  }

}

async function verifyOtp(){

  showMessage(
    "OTP Verified Successfully",
    "lightgreen"
  );

}

async function unsubscribeUser(){

  showMessage(
    "Unsubscribed Successfully",
    "orange"
  );

}

</script>

</body>
</html>
