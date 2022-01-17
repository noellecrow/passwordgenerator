// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var length = window.prompt("What is your password length? It must be between 8 and 128 characters.")
  var lowercase = window.confirm("Do you want lowercase characters in your password?")
  var uppercase = window.confirm("Do you want upper case characters in your password?")
  var numeric = window.confirm("Do you want special characters in your password?")

  // start password string where password will be stored
  var password = "";
  // uppercase letters
  var uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // character base for options selected
  var charBase = "";
  // lowercase letters
  var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
  // special characters
  var special = "!@#$%^&*()_-=+|';:/?.>,<`~";
  // numbers
  var numeric = "0123456789";


  //if lowercase is chosen - added to charBase
  if (lowercase) {
    charBase += lowercaseAlpha;
  }

  if (uppercase) {
    charBase += uppercaseAlpha
    console.log(charBase);
  }
// if numbers is chosen - added to charBase
if (numeric) {
  charBase += numeric;
  console.log(charBase);
}
// if special characters is chosen - added to charBase
if (special) {
  charBase += special;
  console.log(charBase);
}

// for the integer value of length, password is appended at a random location based on charbaseLength
for (let x = 1; x < parseInt(length) + 1; x++) {

  password+= charBase.charAt(Math.floor(Math.random() * charBase.length));
}

return password;
}

// Write Password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
