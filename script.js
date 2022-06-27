// special characters specified here
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
//chrome devtools indicates there is an error with this line of code.
generateButton.addEventListener('click' = writePassword)

// here i have assigned the variables generate password and the writing of the password text to the write password function.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  const specialCharacters = "!@#$%^&*()";
  const generateButton = document.getElementById('generateBtn')
  generateButton.addEventListener('click' = writePassword)
  passwordText.value = password;

}

// Prompts that come up after you click generate password
//each prompt has been assigned a variable under the "generate password" function so make the prompts appear after the generate button is used.
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");

  // this sets the minimum password length - assessment criteria specific passwords must be between 8 and 128 characters.
  var minimumCount = 8;


  // no values (empty values) have been assigned to the properties as users are supposed to be able to select if they want numbers, special characters etc.

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator functions have been grouped together in an array called "functionArray" it is intended to take commands from the prompt boxes to then use the .math.random command to gereate the password.
  var functionArray = {
    //this is the numbers for the password
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
//lowercase characters variable
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
//uppercase variable
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
//special characters variable - the "specialCharacters variable was specified above with an array of "!@#$%^&*()"
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}