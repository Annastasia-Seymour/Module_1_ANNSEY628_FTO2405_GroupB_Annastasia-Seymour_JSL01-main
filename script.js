function validateSyntax() {
    let inputPet = document.getElementById('petInput').value;
    const regex = /^pet_\d{4}+[a-ZA-Z]+$/; 
    //learnt about regular expressions to compare user input with correct syntax
    //For reference purposes
    /*
    ^ insures that the start of the input is a string
    _pet must contain pet_ at the start of input
    \d d stands for digits {} set how many digits inside - 4 will be only accepted
    [a-zA-Z] can add string after the digits any number , probs infinite amount is acceptable
    $ like the end tags , this closes the expression
    */
   
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

        // Check if input starts with 'pet_' and followed by alphanumeric characters
      //Original solulu only validates that it starts with _pet
    /*if (inputPet.startsWith("pet_")) 
         {
             result = result + "Valid Syntax 🟢";
             console.log(result);

        
      } else 
      {
         result = result + "Invalid Syntax 🔴";
         console.log(result);
      
      }*/

// best solution

if (regex.test(inputPet)) {

     result = result + "Valid Syntax 🟢";
     console.log(result);

  } else {

     result = result + "Invalid Syntax 🔴";
     console.log(result);

  }


    document.getElementById('result').innerText = result;
}

