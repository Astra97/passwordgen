// Assignment code here
var length;
var lower;
var upper;
var numeric;

var num = "0123456789";
var str = "abcdefghijklmnopqrstuvwxyz";
var spec = "!@#$%^&*+~|}{[]?></-=";
var str3 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

function generatePassword() {
length = window.prompt("Choose a length for password to be between 8-128 characters");
if  (length >= 8 || length <=128){
var special = window.prompt("Do you want Special Characters? Yes or No");
special.toLowerCase();
debugger
  if (special === "yes") {
    lower = window.prompt("Do you want Lower case letters? Yes or No");
    lower.toLowerCase();
    if (lower=== "yes" ){
      upper = window.prompt("Do you want to add upper case letters? Yes or No");
      upper.toLowerCase()
      if (upper === "yes"){
        numeric = window.prompt("Do you want to add Numerics? Yes or no");
        numeric.toLowerCase();
        if (numeric === "yes"){
            var str2=""; 
            for (i=1; i<length-1; i++){
              
              str2+=num.charAt(Math.floor(Math.random()*num.length));
              str2+=str.charAt(Math.floor(Math.random()*str.length));
              str2+=str3.charAt(Math.floor(Math.random()*str3.length));
              str2+=spec.charAt(Math.floor(Math.random()*spec.length));
              
            }
            return str2;
        }
        
      }
      else{

      }

    } 
    else{

    }

}
  else {

}
} 
  else{
  window.alert("Input does not meet length requirements!")
}
};

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
