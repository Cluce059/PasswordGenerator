// Assignment code here
//list availablibek characters and in funciton loop thru anc check to see if it was used, yes? 
//basically use consitional statements to put things into arrays if user choose for those 
//then have a function to take those arrays and see how long user wants password to be so onky take x amount of characters from gerneated passwork array
//can be any special characters 
//probably create 4 arrays for the 4 criteria that comes uo with the pop up 

var finalPassword = [];//create empty array to told new password. doesnt havreto be this way but it could be woth while

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", " y", "z"]; 
var specialChars = ["!", "@", "#", "$", "^", "&", "&", "*", "(", ")"];
var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


//asks user if they want to include uppercase letters
var upperCaseQuestion = function(){
  var upperCaseConfirm = confirm("Do you want to include uppercase characters?");
  if(upperCaseConfirm){
    finalPassword += upperCase; //ask about this to confirm but since strings are global this should change the finalPassword[] string
    return finalPassword;//not sure how to use it yet so leaving these two return stmnts here for now
  }
  else{ //if no, finalpassword remains as is
    finalPassword += finalPassword;
  }
  return;
};

//asks user if they want to include lowercase chars
var lowerCaseQuestion = function(){
  var lowerCaseConfirm = confirm("Do you want to include lowercase characters?");
  if(lowerCaseConfirm){
    finalPassword += lowerCase; //now to find out how to use math.random to select a certain number of chars to include based on user input... by using the index maybe?
    return finalPassword;
  }
  else{
    finalPassword += finalPassword;
  }
  return;
};

//asks user if they want to include special chars
var specialCharQuestion = function(){
  var specialCharconfirm = confirm("Do you want to include special characters?");
  if(specialCharconfirm){
    finalPassword += specialChars;
  }
  else{
    finalPassword += finalPassword;
  }
  return;
};

//asks user if they want to include numbers
var numericCharsQuestion = function(){
  var numericCharsConfirm = confirm("Do you wan to include numbers?");
  if(numericCharsConfirm){
    finalPassword += numericChars;
  }
  else{
    finalPassword += finalPassword;
  }
  return;
};

//asks user how long they want password to be
var passwordLengthQuestion = function(){
  var passwordLength = prompt("how long should your password be? Must be between 8-128 characters");
  passwordLength = finalPassword.length;
    //logic to change length to user input
};





var generatePassword = function(){

   
  //uppercase question
  var upperCaseConfirm = confirm("Do you want to include uppercase characters?");
  if(upperCaseConfirm){
    finalPassword += upperCase; //ask about this to confirm but since strings are global this should change the finalPassword[] string
  }
  else{ //if no, finalpassword remains as is
    finalPassword += finalPassword;
  }
  //lowercase question
  var lowerCaseConfirm = confirm("Do you want to include lowercase characters?");
  if(lowerCaseConfirm){
    finalPassword += lowerCase; //now to find out how to use math.random to select a certain number of chars to include based on user input... by using the index maybe?
  }
  else{
    finalPassword += finalPassword;
  }
  //special char question
  var specialCharconfirm = confirm("Do you want to include special characters?");
  if(specialCharconfirm){
    finalPassword += specialChars;
  }
  else{
    finalPassword += finalPassword;
  }
  //numeric question
  var numericCharsConfirm = confirm("Do you wan to include numbers?");
  if(numericCharsConfirm){
    finalPassword += numericChars;
  }
  else{
    finalPassword += finalPassword;
  }
     //length question
     var passwordLength = prompt("how long should your password be? Must be between 8-128 characters");
     passwordLength = parseInt(passwordLength, 8-128);
       if(passwordLength >= 8 && passwordLength <= 128){
       passwordLength = finalPassword.length;     
      }
     else{
       alert("you need to enter a valid length");
       return generatePassword();
     }
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
