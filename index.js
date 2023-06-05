function otpGenerate() {
    let optShow = document.getElementById("otp")
    let digits = "0123456789";
    let otp = "";

    //Generate 4 digit OTP

    for (let i = 0; i < 4; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    
    //To display lodaer 
    optShow.innerHTML = "<span></span>";

    //Display OTP after 1 second
    setTimeout(() => {
        optShow.innerHTML = otp;
    }, 1000);
}