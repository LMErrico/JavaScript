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
  var pswdLength = parseInt(prompt("Enter the length of the password of at least 8 and no more than 128 characters:"));
  
  if(pswdLength < 8 || pswdLength > 128 || isNaN(pswdLength)) {
    alert("Invalid length");
    return;
  } 

/*2.  WHEN asked for character types to include in the password
      THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters*/
var charLowercase = prompt("Confirm if you want to include lowercase characters Y/N:");

  if(charLowercase == "Y" || charLowercase == 'y') {
    charLowercase = "Y"
  } else {
    charLowercase = "N"
  }

var charUppercase = prompt("Confirm if you want to include uppercase characters Y/N:");

  if (charUppercase == "Y" || charUppercase == "y") {
    charUppercase = "Y"
  } else {
    charUppercase = "N"
  }

var charNumeric = prompt("Confirm if you want to include numeric characters Y/N:");
  
  if (charNumeric == "Y" || charNumeric == "y") {
    charNumeric = "Y"
  } else {
    charNumeric = "N"
  }

 var charSpecial = prompt("Confirm if you want to include special characters Y/N:");
  
  if (charSpecial == "Y" || charSpecial == "y") {
    charSpecial = "Y"
  } else {
    charSpecial = "N"
  }
  
  console.log(charLowercase);
  console.log(charUppercase);
  console.log(charNumeric);
  console.log(charSpecial);

/*3.  WHEN I answer each prompt
      THEN my input should be validated and at least one character type should be selected*/
  if (charLowercase == "N" && charUppercase == "N" && charNumeric == "N" && charSpecial == "N") {
    alert("At least one value must be selected");
    return;
  }

  console.log("At least one value is entered");

/*4.  WHEN all prompts are answered
      THEN a password is generated that matches the selected criteria*/

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var special = '!@#$%^&*()_+?/><';
var pswdchars = "";

/* Version 1:

const pswdarray = [charLowercase, charUppercase, charNumeric, charSpecial];
const pswddata = [lowercase, uppercase, numeric, special];

  console.log('PSWD String');
  console.log(pswdarray);

var firsttype = 0;
  
  for (let i = 0; i < 4; i++) {
   if ((pswdarray[i] === 'Y') &&  (firsttype === 0)) {
      firsttype++
      pswdchars = pswddata[i]
   } else if (pswdarray[i] === 'Y'){
      pswdchars = pswdchars.concat(pswddata[i])
    }
}
  console.log("Generated pswd characters");
  console.log(pswdchars);*/

// Version 2:

if (charLowercase == "Y") {
  pswdchars += lowercase
} 
if (charUppercase == "Y") {
  pswdchars += uppercase
} 
if (charNumeric == "Y") {
  pswdchars += numeric
} 
if (charSpecial == "Y") {
  pswdchars += special
}

console.log(pswdchars);
console.log('pswdchars');
console.log(pswdchars.length);

/*5.  WHEN the password is generated
      THEN the password is either displayed in an alert or written to the page*/

var result = ' ';
const pswdcharslength = pswdchars.length;

  for ( let i = 0; i < pswdLength; i++ ) {
        result += pswdchars.charAt(Math.floor(Math.random() * pswdcharslength));
      }
  
      console.log("password =  ");
      console.log(result);
  
  return result ;
  
}
    

