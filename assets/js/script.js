// Assignment code here

//possible criteria arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", " y", "z"]; 
var specialChars = ["!", "@", "#", "$", "^", "&", "&", "*", "(", ")", "{", "}", "|", "\'", "?", "<", ">", "-", "+", "_", "="];
var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//generate password function
var generatePassword = function(){
  //empty array to hold criteria array
  var loadPassword = [];
  //get user input for length
  var passwordLength = prompt("How long should your password be? (Must be between 8 - 128 characters)");
  passwordLength = parseInt(passwordLength);
  if(passwordLength < 8 || passwordLength > 128){
    alert("Oops! \nYou must choose a length between 8 - 128.");
    return false;
  }
  //does user want to include ints?
  var numericCharsConfirm = confirm("Do you want your password to include numbers?");
  if(numericCharsConfirm){
    loadPassword = loadPassword.concat(numericChars);
  }
  //join() makes arr to string for future reference
  //does user want lowercase chars?
  var lowerCaseConfirm = confirm("Do you want your password to include lowercase characters?");
  if(lowerCaseConfirm){
    loadPassword = loadPassword.concat(lowerCase); //now to find out how to use math.random to select a certain number of chars to include based on user input... by using the index maybe?
  //does user want uppercase chars?
  }
  var upperCaseConfirm = confirm("Do you want your password to include uppercase characters?");
  if(upperCaseConfirm){
    loadPassword = loadPassword.concat(upperCase); //ask about this to confirm but since strings are global this should change the finalPassword[] string
  }
  //does user want special chars?
  var specialCharconfirm = confirm("And finally, do you want your password to include special characters?");
  if(specialCharconfirm){
    loadPassword = loadPassword.concat(specialChars);
  }
  //if no criteria have been selected
  if(!specialCharconfirm && !upperCaseConfirm && !lowerCaseConfirm && !numericCharsConfirm){
    alert("You must select at least one password criteria!");
    return false;
  }
  //create empty string to hold criteria based on user defined str length
  var finalPassword = "";
  console.log(typeof(loadPassword));
  for(var i = 0; i < passwordLength; i++){
    //assigning char in finalpassword str to random index of criteria str
    finalPassword += loadPassword[Math.floor(Math.random()*loadPassword.length)];
  }

console.log(finalPassword);
return finalPassword;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //set password equal to to what generatePassword returns
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
