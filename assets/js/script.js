// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria:

1.  WHEN prompted for the length of the password
    THEN I choose a length of at least 8 characters and no more than 128 characters*/
function generatePassword() {
  var pswdlength = parseInt(prompt("Enter the length of the password of at least 8 and no more than 128 characters:"));
  
  if(pswdlength < 8 || pswdlength > 128 || isNaN(pswdlength)) {
    alert("Invalid length");
  } 

}
    

