var length = 128;
var choiceArray = [];

var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!", "*", ")", "&", "#"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//Assignment code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var validPromts = promptsInput(); //returns true or false 
  
  if (validPromts){
  var genPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = genPassword;
  }
}


//Creates random pasword with for loop
function generatePassword(){
  var password = "";
  for(var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}
//Creates user prompts for password criteria 
function promptsInput(){
  charLength = parseInt(prompt("PASSWORD CRITERIA: How long do you want your password? (8-128)"));

  if(isNaN(charLength) || charLength < 8 || charLength >128) {
    alert("no");
    return false;
  } 

  if (confirm("Do you want to include Uppercase Characters?")) {
    choiceArray = choiceArray.concat(uppercase);
  }
  if (confirm("Do you want to include Lowercase Characters?")) {
    choiceArray = choiceArray.concat(lowercase);
  }
  if (confirm("Do you want to include Special Characters?")) {
    choiceArray = choiceArray.concat(specialChar);
  }
  return password;
}