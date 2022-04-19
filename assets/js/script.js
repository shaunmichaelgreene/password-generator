// Assignment code here
//identify arrays of available character types
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //26 lowercase characters
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //26 uppcase characters
var numericalArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //10 numerical characters
var specialArray = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', '{', ']', '}', ';', '"', ':', '/', '?', ',', '<', '.', '>']; //29 special characters
var characterArray = []; //total character array to be used for new password (empty to start)

function generatePassword() {

  //Prompt to Determine password length
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
    console.log("Designated password length: " + passwordLength)
  }  

  //Prompts and validation to determine characters types to use
  var lowerCase = window.confirm("Would you like your new password to include LOWERCASE characters ('a, b, c, etc...')?");
    if (lowerCase) { //if user selects OK to include lowercase characters, alert the user, add the lowerCaseArray to the overall characterArray and print the contents and length of the array.
      alert("Your new password WILL contain LOWERCASE characters.");
      characterArray = characterArray.concat(lowerCaseArray)
      console.log("Overall list of available characters now included for use in new password: " + characterArray);
      console.log("Total count of different characters now available for use in new password: " + characterArray.length);
    }
    else { //if user selects Cancel to exclude lowercase characters, alert the user and do not add these characters to the overall array.
      alert("Your new password WILL NOT contain LOWERCASE characters.");
    }
    console.log ("Include lowercase characters in new password: " + lowerCase);

    var upperCase = window.confirm("Would you like your new password to include UPPERCASE characters ('A, B, C, etc...')?");
    if (upperCase) { //if user selects OK to include uppercase characters, alert the user, add the upperCaseArray to the overall characterArray and print the contents and length of the array.
      alert("Your new password WILL contain UPPERCASE characters."); 
      characterArray = characterArray.concat(upperCaseArray)
      console.log("Overall list of available characters now included for use in new password: " + characterArray);
      console.log("Total count of different characters now available for use in new password: " + characterArray.length);
    }
    else { //if user selects Cancel to exclude uppercase characters, alert the user and do not add these characters to the overall array.
      alert("Your new password WILL NOT contain UPPERCASE characters.");
    }
    console.log ("Include uppercase characters in new password: " + upperCase);

    var numerical = window.confirm("Would you like your new password to include NUMERICAL characters ('1, 2, 3, etc...')?");
    if (numerical) { //if user selects OK to include numerical characters, alert the user, add the numericalArray to the overall characterArray and print the contents and length of the array.
    alert("Your new password WILL contain NUMERICAL characters.");
    characterArray = characterArray.concat(numericalArray)
    console.log("Overall list of available characters now included for use in new password: " + characterArray);
    console.log("Total count of different characters now available for use in new password: " + characterArray.length);
    }
    else { //if user selects Cancel to exclude numerical characters, alert the user and do not add these characters to the overall array.
      alert("Your new password WILL NOT contain NUMERICAL characters.");
    }
    console.log ("Include numerical characters in new password: " + numerical);

    var special = window.confirm("Would you like your new password to include SPECIAL characters ('#, &, %, etc...')?");
    if (special) { //if user selects OK to include special characters, alert the user, add the specialArray to the overall characterArray and print the contents and length of the array.
      alert("Your new password WILL contain SPECIAL characters.");
      characterArray = characterArray.concat(specialArray)
      console.log("Overall list of available characters now included for use in new password: " + characterArray);
      console.log("Total count of different characters now available for use in new password: " + characterArray.length);
    }
    else { //if user selects Cancel to exclude special characters, alert the user and do not add these characters to the overall array.
      alert("Your new password WILL NOT contain SPECIAL characters.");
    }
    console.log ("Include special characters in new password: " + special);

    //Validation to ensure at least 1 character type is chosen
    if (!lowerCase && !upperCase && !numerical && !special) { //if user does not select any character types, alert the user and provide clearer instructions to repeat the process, and end the function.
      alert("Invalid input. You did not choose to include any character types for your new password. Please click the 'Generate Password' button to try again and choose at least 1 type of character (Lowercase, Uppercase, Numerical, or Special). Thanks!");
      console.log("Invalid input. You did not choose to include any charater types for your new password. Please click the 'Generate Password' button to try again, and choose 1 or more of the available character types (Lowercase, Uppercase, Numerical, and Special). Thanks!");
      return;
    }

    //Randomizer  
    let password = "" //creates an empty string variable to build & store the password
    for (let i = 0; i < passwordLength; i++) { //loop will iterate until the designated password length has been reached, assigning a new random character with each iteration.
      let characterIndex = [Math.floor(Math.random() * characterArray.length)]; //use Math.random to pick a random value based on the length of the characterArray string. Use Math.floor to change it to an integer, which determines the location of the now random letter in the array that will be used in the password.
      password = password + characterArray[characterIndex]; //add the new randomly chosen character from the array to the password. 
    }
    return password
};  //end of generatePassword() function

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener for Generate Password button
generateBtn.addEventListener("click", writePassword);
