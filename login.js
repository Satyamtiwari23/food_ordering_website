// ================================
// Get Elements
// ================================

const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");
const forgotBox = document.getElementById("forgotBox");
const otpBox = document.getElementById("otpBox");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

const forgotBtn = document.getElementById("forgotBtn");
const backLogin = document.getElementById("backLogin");

const sendOtp = document.getElementById("sendOtp");


// ====================================
// Show Signup
// ====================================

showSignup.addEventListener("click", () => {

    loginBox.classList.remove("active");
    signupBox.classList.add("active");

});


// ====================================
// Show Login
// ====================================

showLogin.addEventListener("click", () => {

    signupBox.classList.remove("active");
    loginBox.classList.add("active");

});


// ====================================
// Forgot Password
// ====================================

forgotBtn.addEventListener("click", (e) => {

    e.preventDefault();

    loginBox.classList.remove("active");

    forgotBox.classList.add("active");

});


// ====================================
// Back To Login
// ====================================

backLogin.addEventListener("click", () => {

    forgotBox.classList.remove("active");

    loginBox.classList.add("active");

});


// ====================================
// Send OTP
// ====================================

sendOtp.addEventListener("click", (e) => {

    e.preventDefault();

    forgotBox.classList.remove("active");

    otpBox.classList.add("active");

    alert("OTP Sent Successfully (Demo)");

});


// ====================================
// Verify OTP
// ====================================

const verifyBtn = otpBox.querySelector(".btn");

verifyBtn.addEventListener("click", () => {

    const otpInputs = document.querySelectorAll(".otp-inputs input");

    let otp = "";

    otpInputs.forEach(input => {

        otp += input.value;

    });

    if (otp.length !== 6) {

        alert("Please Enter 6 Digit OTP");

        return;

    }

    alert("OTP Verified Successfully");

    otpBox.classList.remove("active");

    loginBox.classList.add("active");

});


// ====================================
// Show / Hide Password
// ====================================

const passwordInput = document.getElementById("loginPassword");

const eyeIcon = document.querySelector(".toggle-password");

eyeIcon.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        eyeIcon.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';

    }

    else {

        passwordInput.type = "password";

        eyeIcon.innerHTML =
        '<i class="fa-solid fa-eye"></i>';

    }

});


// ====================================
// OTP Auto Next
// ====================================

const otpInputs = document.querySelectorAll(".otp-inputs input");

otpInputs.forEach((input, index) => {

    input.addEventListener("keyup", (e) => {

        if (input.value.length === 1 &&
            index < otpInputs.length - 1) {

            otpInputs[index + 1].focus();

        }

        if (e.key === "Backspace" &&
            index > 0 &&
            input.value === "") {

            otpInputs[index - 1].focus();

        }

    });

});


// ====================================
// Login Validation
// ====================================

const loginForm = loginBox.querySelector("form");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs = loginForm.querySelectorAll("input");

    if (inputs[0].value === "" || inputs[1].value === "") {

        alert("Please fill all fields.");

        return;

    }

    alert("Login Successful");

});


// ====================================
// Signup Validation
// ====================================

const signupForm = signupBox.querySelector("form");

signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs = signupForm.querySelectorAll("input");

    for (let input of inputs) {

        if (input.value === "") {

            alert("Please fill all fields.");

            return;

        }

    }

    alert("Account Created Successfully");

    signupBox.classList.remove("active");

    loginBox.classList.add("active");

});


// ====================================
// Console Message
// ====================================

console.log("FoodieHub Login Page Loaded");
