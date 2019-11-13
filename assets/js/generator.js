function copytext() {
    /*Get the text field*/
    var copyText = document.getElementById("password");

    /*Select the text field*/
    copyText.select();
    
    //Sets the selection range for mobile devices
    copyText.setSelectionRange(0,99999);

    //Copies the selected text
    document.execCommand("copy");

    alert("Password copied to clipboard")
}

//Erase any previously created passwords/text in the textarea
function eraseText() {
    document.getElementById("password").value="";
}

function passwordGenerator() {
    //Create character array for inputs to be pushed to
    //Prompt user for input for password length
    //Validate if the length is in the required range
    //Ask whether or not certain characters are to be used
    //Randomly choose x number of characters out of the chosen character arrays
    //Choose a random number of chosen character types
    //Print out the array in the text field

    specialArray = ["+","-","&&","||","!","(",")","{","}","[","]","^","~","*","?",":","\"","\\"];
    numercialArray = ["0","1","2","3","4","5","6","7","8","9"];
    lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    passwordArray = [];


    var passwordLength = prompt("How long would you like your password to be? Minimum is 8 and maximum is 128.");
    console.log(passwordLength);

    //Validates whether the input is between 8 and 128.
    if(passwordLength===null){
        return;
    }
    else {
        if((passwordLength>=8)&&(passwordLength<=128)) {
            var valid = true;
        }
        else {
            var valid = false;
        }
        
        while(!valid) {
            if ((passwordLength>=8)&&(passwordLength<=128)) {
                var valid = true;
            }

            else if(passwordLength===null){
                return;
            }

            else {
                alert("Invalid, please choose between 8 and 128 characters.")
                
                passwordLength = prompt("How long would you like your password to be? Minimum is 8 and maximum is 128.");
                console.log(passwordLength);
            }  
        }    
    }

    pL = parseInt(passwordLength,10);
    console.log("The value of the password length is: " + pL);

    //Ask the user what characters they would like in their password
    var specialC = confirm("Would you like special characters in your password?");
    var numberC = confirm("Would you like numerical characters in your password?");
    var lowercaseC = confirm("Would you like lowercase characters in your password?");
    var uppercaseC = confirm("Would you like uppercase characters in your password?");

    //Variable x to Work out the number of true if statements
    x = 0;

    //If confirm is true, the array is added to the selection process
    choicesArray = [];

    if (specialC===true) {
        choicesArray.push(specialArray);
        //Due to the random function performed in arrayPush the follow code makes sure at least 1 character from each chosen set is included
        passwordArray.push(specialArray[(Math.floor(Math.random() * specialArray.length))]); 
        x=x+1;
    }

    if (numberC===true) {
        choicesArray.push(numercialArray);
        passwordArray.push(numercialArray[(Math.floor(Math.random() * numercialArray.length))]);
        x=x+1;
    }

    if (lowercaseC===true) {
        choicesArray.push(lowercaseArray);
        passwordArray.push(lowercaseArray[(Math.floor(Math.random() * lowercaseArray.length))]);
        x=x+1;
    }

    if (uppercaseC===true) {
        choicesArray.push(uppercaseArray);
        passwordArray.push(uppercaseArray[(Math.floor(Math.random() * uppercaseArray.length))]);
        x=x+1;
    }

    console.log("Number of 'true' if statements: " + x);
    console.log(choicesArray);

    arrayPush(choicesArray);
    console.log("The password array is: " + passwordArray);

    //Prints the newly generated password to the textarea
    var textarea = document.getElementById("password");
    textarea.value = passwordArray.join("");
}

//Pushing value to array function
function arrayPush(array){
    for(i=0; i<(pL-x); i++) {
        var y = Math.floor(Math.random()*x);
        var rV = Math.floor(Math.random()*array[y].length);
        passwordArray.push(array[y][rV]);
    }
}