function validateSyntax() {
    let inputPet = document.getElementById('petInput').value;
    const invalidDot = "u/{1F534}";
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
     if (inputPet.startsWith("pet_")) 
        {
            result = result + "Valid Syntax" + invalidDot;
            console.log(result);

        
     } else {
        result = result + "Invalid Syntax";
        console.log(result);
      
     }


            document.getElementById('result').innerText = result;
}

//I have a question!! Can you have a array that contains both numbers and string

