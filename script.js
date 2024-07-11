function validateSyntax() {
    let inputPet = document.getElementById('petInput').value.trim(); // Trim input to remove leading/trailing whitespace
    const regex = /^pet_\d{4}[a-zA-Z]+$/; // learnt about regular expressions to compare user input with correct syntax reference at the bottom
  
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
   
        if (inputPet === '') {
            result = "No input provided, please try again";
        console.log(result);
    }
else if (regex.test(inputPet)) {
    result = "Valid Syntax 🟢"; 
    console.log(result);
    } else {
    result = "Invalid Syntax 🔴"; 
}
            document.getElementById('result').innerText = result;
}

//For future reference purposes
    /*
    ^ asserts the start of the input string , ensures that the pattern following matches from the start
    _pet must contain pet_ at the start of input
    \d d stands for digits {} set how many digits inside - 4 will be only accepted
    [a-zA-Z] can add string after the digits any number , probs infinite amount is acceptable
    $ like the end tags , this closes the expression
    */

   /* What i wanted to try but only checks that pet_ is at the start and the reult wont show :
   if (inputPet.startsWith("pet_") && inputNumber(inputPet)="/\d{4}$' && stringPet(inputPet)=[a-z A-Z]) 
         {
             result = result + "Valid Syntax 🟢";
             console.log(result);

        
      } else {
         result = result + "Invalid Syntax 🔴";
         console.log(result);
      
      }
*/
