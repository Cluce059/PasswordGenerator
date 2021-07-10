// Assignment code here
//list availablibek characters and in funciton loop thru anc check to see if it was used, yes? 
//basically use consitional statements to put things into arrays if user choose for those 
//then have a function to take those arrays and see how long user wants password to be so onky take x amount of characters from gerneated passwork array
//can be any special characters 
//probably create 4 arrays for the 4 criteria that comes uo with the pop up 

//create empty array to told new password. doesnt havreto be this way but it could be woth while

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", " y", "z"]; 
var specialChars = ["!", "@", "#", "$", "^", "&", "&", "*", "(", ")"];
var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//generate password function
var generatePassword = function(){
  var loadPassword = [];
  //or//finalPassword = "";
  // const random = Math.floor(Math.random() * upperCase.length);
  
  //get user input for length
  //finalPassword.length = passwordLengthQuestion();
  var passwordLength = prompt("how long should your password be? Must be between 8-128 characters");
  passwordLength = parseInt(passwordLength);
  if(passwordLength < 8 || passwordLength > 128){
    alert("you must chose a length between 8-128");
    return false;
  }
  //does user want to include ints?
  var numericCharsConfirm = confirm("Do you wan to include numbers?");
  if(numericCharsConfirm){
    loadPassword = loadPassword.concat(numericChars);
  }
  //join() makes arr to string
  //does user want lowercase chars?
  var lowerCaseConfirm = confirm("Do you want to include lowercase characters?");
  if(lowerCaseConfirm){
    loadPassword = loadPassword.concat(lowerCase); //now to find out how to use math.random to select a certain number of chars to include based on user input... by using the index maybe?
  }

  //does user want uppercase chars?
  var upperCaseConfirm = confirm("Do you want to include uppercase characters?");
  if(upperCaseConfirm){
    loadPassword = loadPassword.concat(upperCase); //ask about this to confirm but since strings are global this should change the finalPassword[] string
  }

  //does user want special chars?
  var specialCharconfirm = confirm("Do you want to include special characters?");
  if(specialCharconfirm){
    loadPassword = loadPassword.concat(specialChars);
  }

  //math.random logic
  var finalPassword = "";
  //finalPassword.length = passwordLength;
  console.log(typeof(loadPassword));
  
  for(var i = 0; i < passwordLength; i++){
    // var index, password;
    // index = Math.floor(Math.random()*loadPassword.length);
    //password = loadPassword[index];
    finalPassword += loadPassword[Math.floor(Math.random()*loadPassword.length)];
 
    // console.log(index);
    // console.log(password);
    //
  }
 //console.log(loadPassword);
console.log(finalPassword);
//maybe here start the math.random() and get results of passwordlength length arr?

return finalPassword;
};
//obv u should use math.random!!!ask skeletoning it first tho

//////////////////////Dont write past me! :]///////////////////////////////////////////////////////////////////////////////
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
