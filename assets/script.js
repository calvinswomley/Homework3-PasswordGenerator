// Generate buttom query selector
var generateBtn = document.querySelector("#generate");

//Set criteria variables
var lengthOption;
var specialcharacterOption;
var numberOption;
var lowercaseOption;
var uppercaseOption;
var passwordText = ""

//Write password fuction
function writePassword() {
  //Password length prompt
  var lengthPrompt = window.prompt("How many characters?", "Type number between 8 and 128 here...");
  var lengthOption = lengthPrompt
  if (lengthOption <= 128 && lengthOption >= 8) {
  } else if (!lengthPrompt) {
    return;
  } else {
      window.confirm("Must be numeric whole number between 8 and 128.")
      writePassword()
  };
  
  //Special characters option prompt
  var specialPrompt = window.prompt("Include special characters? (Y for yes, N for no.)", "Type Y or N here...");
  var specialcharacterOption = specialPrompt
  if (specialcharacterOption === "Y" || specialcharacterOption === "N") {
  } else if (!specialPrompt) {
      return;
  } else {
    window.confirm("Value must be Y or N.")
    writePassword()
  };

  //Numeric characters prompt
  var numberPrompt = window.prompt("Include numeric characters? (Y for yes, N for no.)", "Type Y or N here...")
  var numberOption = numberPrompt
  if (numberOption === "Y" || numberOption === "N") {
  } else if (!numberPrompt) {
    return;
  } else {
    window.confirm("Value must be Y or N.")
    writePassword()
  };


  // Uppercase characters prompt
  var uppercasePrompt = window.prompt("Include uppercase characters? (Y for yes, N for no.)", "Type Y or N here...")
  var uppercaseOption = uppercasePrompt
  if (uppercaseOption === "Y" || uppercaseOption === "N") {
  } else if (!uppercasePrompt) {
    return;
  } else {
    window.confirm("Value must be Y or N.")
    writePassword()
  };

  // Lowercase characters prompt
  var lowercasePrompt = window.prompt("Include lowercase characters? (Y for yes, N for no.)", "Type Y or N here...")
  var lowercaseOption = lowercasePrompt
  if (lowercaseOption === "Y" || lowercaseOption === "N") {
  } else if (!lowercasePrompt) {
    return;
  } else {
    window.confirm("Value must be Y or N.")
    writePassword()
  };

  //Converting string to integer
  var lengthOption2 = parseInt(lengthOption, 10);

  //Algorithm to take infomation from prompts and generate password.
  //Random character type generator or loop continues until password length criteria is met
  for (; !(passwordText.length === lengthOption2); ) {
      var optionSelector = getRandomIntInclusive();
      getRandomIntInclusive();
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(5);
        max = Math.floor(0);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      //Random number selector
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
          continue;
      }
      //Random special character selector
      else if (optionSelector == 2) {
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
          continue;
      }
      //Random upper case letter selector
      else if (optionSelector == 3) {
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
          continue;
      }
      //Random lower case letter selector
      else if (optionSelector == 4) {
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
          continue;
      }
    }
  //Displays password in HTML viewable to the user
  document.getElementById("password").innerHTML = passwordText;
};

//Event listener that triggers writePassword function upon click of the generate password button
generateBtn.addEventListener("click", writePassword);

