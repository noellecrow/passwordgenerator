// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Define variables
var charSelection = "";
var passwordLength = 7;
var a = 0;
var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_-=+|';:/?.>,<`~";
var passwordVal = ""
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
