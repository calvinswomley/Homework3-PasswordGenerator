// Assignment Code
var generateBtn = document.querySelector("#generate");

//Set criteria variables
var lengthOption;
var specialcharacterOption;
var numberOption;
var lowercaseOption;
var uppercaseOption;
var passwordText = ""

// Write password to the #password input
// Password length prompt
function writePassword() {

  var lengthPrompt = window.prompt("How many characters?", "Type number between 8 and 128 here...");
  var lengthOption = lengthPrompt
  if (lengthOption <= 128 && lengthOption >= 8) {
    console.log("lengthOption: " + lengthOption);
  } else if (!lengthPrompt) {
    return;
    }
    else {
      console.log("Must be numeric whole number between 8 and 128");
      window.confirm("Must be numeric whole number between 8 and 128.")
      writePassword()
    };
  
  //Special characters option prompt
  var specialPrompt = window.prompt("Include special characters? (Y for yes, N for no.)", "Type Y or N here...");
  var specialcharacterOption = specialPrompt
  if (specialcharacterOption === "Y" || specialcharacterOption === "N") {
    console.log("specialcharacterOption: " + specialcharacterOption);
  } else if (!specialPrompt) {
      return;
  } else {
    console.log("Value must be Y or N.");
    window.confirm("Value must be Y or N.")
    writePassword()
  };


  // Numeric characters prompt
  var numberPrompt = window.prompt("Include numeric characters? (Y for yes, N for no.)", "Type Y or N here...")
  var numberOption = numberPrompt
  if (numberOption === "Y" || numberOption === "N") {
      console.log("numberOption: " + numberOption)
  } else if (!numberPrompt) {
    return;
  }
  else {
    console.log("Value must be Y or N.");
    window.confirm("Value must be Y or N.")
    writePassword()
  };


  // Uppercase characters prompt
  var uppercasePrompt = window.prompt("Include uppercase characters? (Y for yes, N for no.)", "Type Y or N here...")
  var uppercaseOption = uppercasePrompt
  if (uppercaseOption === "Y" || uppercaseOption === "N") {
      console.log("uppercaseOption: " + uppercaseOption)
  } else if (!uppercasePrompt) {
    return;
  }
  else {
    console.log("Value must be Y or N.");
    window.confirm("Value must be Y or N.")
    writePassword()
  };

  // Lowercase characters prompt
  var lowercasePrompt = window.prompt("Include lowercase characters? (Y for yes, N for no.)", "Type Y or N here...")
  var lowercaseOption = lowercasePrompt
  if (lowercaseOption === "Y" || lowercaseOption === "N") {
      console.log(lowercasePrompt)
  } else if (!lowercasePrompt) {
    return;
  }
  else {
    console.log("Value must be Y or N.");
    window.confirm("Value must be Y or N.")
    writePassword()
  };

  // Algorithm to take infomation from prompts and generate password

  console.log("Password criteria collected: " + " lengthOption: " + lengthOption + " specialcharacterOption: " + specialcharacterOption + " numberOption: " + numberOption + " uppercaseOption: " + uppercaseOption + " lowercaseOption: " + lowercaseOption)
  var lengthOption2 = parseInt(lengthOption, 10);
  console.log(lengthOption2)
  
  //function generatePassword() {
    for (; !(passwordText.length === lengthOption2); ) {
      var optionSelector = getRandomIntInclusive();
      getRandomIntInclusive();
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(5);
            max = Math.floor(0);
            return Math.floor(Math.random() * (max - min + 1) + min);
            }
        console.log(optionSelector)
      if (optionSelector == 1) {
        if (numberOption === "N") {
          continue;
        }
        var numberSelector = getRandomIntInclusive();
        getRandomIntInclusive();
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(0);
            max = Math.floor(9);
            return Math.floor(Math.random() * (max - min + 1) + min);
            }
            passwordText += "" + numberSelector;
            console.log(passwordText)
            continue;
      } else if (optionSelector == 2) {
        if (specialcharacterOption === "N") {
          continue;
        }
        var speccharSelector =  randomSpecChar();
        randomSpecChar();
          function randomSpecChar () {
            var speciallist = "!#$%&*+<>?@^}{[]~";
            return speciallist.substr(Math.floor(speciallist.length*Math.random()), 1);
            }
            passwordText += "" + speccharSelector;
            console.log(passwordText)
            continue;
      } else if (optionSelector == 3) {
        if (uppercaseOption === "N") {
          continue;
        }
        var uppercaseSelector = randomUpperCaseLetter();
        randomUpperCaseLetter();
          function randomUpperCaseLetter () {
            var upperlist = "QWERTYUIOPASDFGHJKLZXCVBNM";
            return upperlist.substr(Math.floor(upperlist.length*Math.random()), 1);
            }
            passwordText += "" + uppercaseSelector;
            console.log(passwordText)
            continue;
          } else if (optionSelector == 4) {
            if (lowercaseOption === "N") {
              continue;
            }
            var lowercaseSelector = randomLowerCaseLetter();
            randomLowerCaseLetter();
              function randomLowerCaseLetter () {
                var lowerlist = "qwertyuiopasdfghjklzxcvbnm";
                return lowerlist.substr(Math.floor(lowerlist.length*Math.random()), 1);
                }
                passwordText += "" + lowercaseSelector;
                console.log(passwordText)
            continue;
            } if (!((optionSelector == 1) || (optionSelector == 2) || (optionSelector == 3) || (optionSelector == 4 ))) {
              console.log("error")
            }
            console.log(passwordText)
            console.log("DOne!!!!!!")
            document.getElementById("password").innerHTML = passwordText;

    //var passwordText = document.querySelector("#password");
  
    //var password = generatePassword();

  }
  console.log("Password has been generated.")
  document.getElementById("password").innerHTML = passwordText;
};

//don't forget 		b. VAR.capitalize() VAR.lowercase()


// Add event listener to generate button (when button is clicked writePassword function executes)
generateBtn.addEventListener("click", writePassword);

