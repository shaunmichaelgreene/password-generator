// Assignment code here
debugger;
function generatePassword() {

  //identify arrays of available character types
  var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //26 characters
  var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //26 characters
  var numericalArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //10 characters
  var specialArray = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', '{', ']', '}', ';', '"', ':', '/', '?', ',', '<', '.', '>']; //29 characters
  
  var passwordLength = window.prompt("How many characters long do you want your new password to be? (Please Enter a number between 8 - 128)");
    if (passwordLength === "" || passwordLength === null) { // validation to ensure user does not enter a blank response
      alert("Input invalid! You must enter a number between 8 - 128 for your new password length.");
      return;
    }
    else if (passwordLength < 8 || passwordLength > 128) { // validation to ensure user enters a length within the acceptable range
      alert("Input invalid! You must enter a number between 8 - 128 for your new password length.");
      return;
    }
    else {
      alert("Your new password will be " + passwordLength + " characters long.");
    }
  

  var lowerCase = window.confirm("Would you like your new password to include LOWERCASE characters ('a, b, c, etc...')?");
    if (lowerCase) {
      alert("Your new password WILL contain LOWERCASE characters.");
    }
    else {
      alert("Your new password WILL NOT contain LOWERCASE characters.");
    }
    console.log ("Include lowercase characters in new password: " + lowerCase);
  var upperCase = window.confirm("Would you like your new password to include UPPERCASE characters ('A, B, C, etc...')?");
    if (upperCase) {
      alert("Your new password WILL contain UPPERCASE characters.");
    }
    else {
      alert("Your new password WILL NOT contain UPPERCASE characters.");
    }
    console.log ("Include uppercase characters in new password: " + upperCase);
  var numerical = window.confirm("Would you like your new password to include NUMERICAL characters ('1, 2, 3, etc...')?");
    if (numerical) {
      alert("Your new password WILL contain NUMERICAL characters.");
    }
    else {
      alert("Your new password WILL NOT contain NUMERICAL characters.");
    }
    console.log ("Include numerical characters in new password: " + numerical);
  var special = window.confirm("Would you like your new password to include SPECIAL characters ('#, &, %, etc...')?");
    if (special) {
      alert("Your new password WILL contain SPECIAL characters.");
    }
    else {
      alert("Your new password WILL NOT contain SPECIAL characters.");
    }
    console.log ("Include special characters in new password: " + special);
  if (lowerCase == false && upperCase == false && numerical == false && special == false) {
    alert("Invalid input. You did not choose to include any character types for your new password. Please click the 'Generate Password' button to try again and choose at least 1 type of character (Lowercase, Uppercase, Numerical, or Special). Thanks!");
    console.log("Invalid input. You did not choose to include any charater types for your new password. Please click the 'Generate Password' button to try again, and choose 1 or more of the available character types (Lowercase, Uppercase, Numerical, and Special). Thanks!");
    return;
  }
}  //end of generatePassword() function
generatePassword();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
