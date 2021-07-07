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
    finalPassword += uppercase; //ask about this to confirm but since strings are global this should change the finalPassword[] string
    return finalPassword;//not sure how to use it yet so leaving these two return stmnts here for now
  }
  else{ //if no, finalpassword remains as is
    finalPassword += finalPassword;
  }
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
};

//asks user if they want to include special chars
var specialCharQuestion = function(){
  var specialCharconfirm = window.confirm("Do you want to include special characters?");
  if(specialCharconfirm){
    finalPassword += specialChars;
  }
  else{
    finalPassword += finalPassword;
  }
};

//asks user if they want to include numbers
var numericCharsQuestion = function(){
  var numericCharsConfirm = ("Do you wan to include numbers?");
  if(numericCharsConfirm){
    finalPassword += numericChars;
  }
  else{
    finalPassword += finalPassword;
  }
};

var generatePassword = function(){
  //window prompts getting user input to pass to function
  criteriaPrompt();
  //call the prompts
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
