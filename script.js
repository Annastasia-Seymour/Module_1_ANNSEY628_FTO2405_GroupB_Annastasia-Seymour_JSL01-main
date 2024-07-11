function validateSyntax() {
    let inputPet = document.getElementById('petInput').value;
    const regex = /^pet_\d{4}+[a-zA-Z]+$/; 
    
    //learnt about regular expressions to compare user input with correct syntax
    //For reference purposes
    /*
    ^ asserts the start of the input string , ensures that the pattern following matches from the start
    _pet must contain pet_ at the start of input
    \d d stands for digits {} set how many digits inside - 4 will be only accepted
    [a-zA-Z] can add string after the digits any number , probs infinite amount is acceptable
    $ like the end tags , this closes the expression
    */

    let result = ''; // Placeholder for validation result

    if (regex.test(inputPet)) {

        result = result + "Valid Syntax 🟢";
        console.log(result);
     } else {
   
        result = result + "Invalid Syntax 🔴";
        console.log(result);  
     }
     console.log(result);
     document.getElementById('result').innerText = result;
    }

   
      //Original solulu only validates that it starts with _pet with additional conditions it wont display
    
      /* if (regex.test(inputPet)) {

        result = result + "Valid Syntax 🟢";
        console.log(result);
   
     } else {
   
        result = result + "Invalid Syntax 🔴";
        console.log(result);
   
     }
   document.getElementById('result').innerText = result;
   }*/

