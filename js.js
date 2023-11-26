let btn = document.querySelector(".btn");
let inputEmail = document.querySelector("input[type=text]");
let inputPassword = document.querySelector("input[type=password]");
let checkdiv = document.querySelector(".checkdiv");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

btn.onclick = () => {
  const isValidEmail = emailRegex.test(inputEmail.value);
  if (isValidEmail) {
    console.log("valid email address");
  } else {
    console.log("Invalid email address");
  }

  const isValidPassword = passwordRegex.test(inputPassword.value);
  if (isValidPassword) {
    console.log("Valid password");
  } else {
    console.log("Invalid password");
  }
};
