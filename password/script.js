const passwordField = document.getElementById("password");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  const types = [
    { enabled: hasLower, func: getRandomLower },
    { enabled: hasUpper, func: getRandomUpper },
    { enabled: hasNumber, func: getRandomNumber },
    { enabled: hasSymbol, func: getRandomSymbol },
  ].filter(t => t.enabled);

  if (types.length === 0) return "";

  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randType = types[Math.floor(Math.random() * types.length)];
    generatedPassword += randType.func();
  }

  return generatedPassword;
}

generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  passwordField.value = password;
});

copyBtn.addEventListener("click", () => {
  if (!passwordField.value) return;
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});