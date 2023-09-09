let passwordBox = document.getElementById('password');
let generateBtn = document.querySelector('.generate-btn');
let copyButton = document.querySelector('.copy-btn');


generateBtn.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassWord);

function generatePassword() {

  const minLength = 12;

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numChar = "01234567890";
  const specialChar = "_-.()^*@[]/%=";
  const allChar = upperCase + lowerCase + numChar + specialChar;

  let passWord = "";

  passWord += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  passWord += upperCase[Math.floor(Math.random() * upperCase.length)];
  passWord += numChar[Math.floor(Math.random() * numChar.length)];
  passWord += specialChar[Math.floor(Math.random() * specialChar.length)];

  while(minLength > passWord.length) {
    passWord += allChar[Math.floor(Math.random() * allChar.length)];
  }
 
  passwordBox.value = passWord;

}

function copyPassWord() {
  passwordBox.select();
  document.execCommand("copy");
}