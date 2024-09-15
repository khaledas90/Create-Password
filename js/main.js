const PasswordInput = document.querySelector(".pass");

let passLength = 13;

let UpperCase = "ABCDEFJHIGKLMNOPQRSTVQW";
let LowerCase = "abcdehijklmnpqrstvwxyz";
let number = "0123456789";
let Symbol = "!#$%^&*_";

let allPassword = UpperCase + LowerCase + number + Symbol;

function Generate() {
  let password = "";
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += Symbol[Math.floor(Math.random() * Symbol.length)];

  while (passLength > password.length) {
    password += allPassword[Math.floor(Math.random() * allPassword.length)];
  }
  PasswordInput.value = password;

  PasswordInput.addEventListener("click", () => CopyPass(password));
}

const CopyPass = (pass) => {
  navigator.clipboard.writeText(pass).then(() => {
    PasswordInput.value = "Copied";
    setTimeout(() => (PasswordInput.value = pass), 1000);
  });
};
