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

function passwordGenerator() {
    //Create blank array for inputs to be pushed to
    //Prompt user for input
    //Validate whether the input matches the asked for criteria
    //Single out characters for single array entries
    //Merge all character arrays into one
    //Randomly print out the array in the text field

    passwordArray = []
    
    alert("The following prompts will make up the core of your new password, the prompts will continue until the password is at least 8 characters long.");

    //Continues to ask the user for input until the password is at least 8 characters long. 7 is used so that it doesn't repeat itself a third time, if only one character is input at a time
    while (passwordArray.length<=7) {

        var sC = prompt("Please input a special character(s):");
        //Check whether the input is all special characters, if not it will continue to ask the user for a special character selection
        for(i=0; i<sC.length; i++){
            if (sC[i].match(/[^a-zA-Z0-9 ]+/g)) {
                var valid = true;
            }
            else {
                var valid = false;
            }
            
            while (!valid) {
                if (sC[i].match(/[^a-zA-Z0-9 ]+/g)) {
                    var valid = true;
                }
                else {
                    alert("Invalid character(s)")
                    var sC = prompt("Please input an uppercase character(s):");
                    i=0; //Resets the for loop incase the second input has less characters and hence affects the .length
                }  
            }
        }

        //Takes the input string and transforms it into individual character array entries
        var sC = (sC.match(/.{1}/g));
        console.log(sC);

        var nC = prompt("Please input a numerical character(s):");
        //Check whether the input is all numbers, if not it will continue to ask the user for a number selection
        for(i=0; i<nC.length; i++){
            if (nC[i].match(/[0-9]/g)) {
                var valid = true;
            }
            else {
                var valid = false;
            }
            
            while (!valid) {
                if (nC[i].match(/[0-9]/g)) {
                    var valid = true;
                }
                else {
                    alert("Invalid character(s)")
                    var nC = prompt("Please input an uppercase character(s):");
                    i=0;
                }  
            }
        }

        var nC = (nC.match(/.{1}/g));
        console.log(nC);

        var lC = prompt("Please input a lowercase character(s):");
        //Check whether the input is all lowercase, if not it will continue to ask the user for an lowercase selection
        for(i=0; i<lC.length; i++){
            if (lC[i].match(/[a-z]/g)) {
                var valid = true;
            }
            else {
                var valid = false;
            }
          
            while (!valid) {
                if (lC[i].match(/[a-z]/g)) {
                    var valid = true;
                }
                else {
                    alert("Invalid character(s)")
                    var lC = prompt("Please input an uppercase character(s):");
                    i=0;
                }  
            }
        }

        var lC = (lC.match(/.{1}/g));
        console.log(lC);
        
        var uC = prompt("Please input an uppercase character(s):");
        //Check whether the input is all uppercase, if not it will continue to ask the user for an uppercase selection
        for(i=0; i<uC.length; i++){
                if (uC[i].match(/[A-Z]/g)) {
                    var valid = true;
                }
                else {
                    var valid = false;
                }
              
                while (!valid) {
                    if (uC[i].match(/[A-Z]/g)) {
                        var valid = true;
                    }
                    else {
                        alert("Invalid character(s)")
                        var uC = prompt("Please input an uppercase character(s):");
                        i=0;
                    }  
                }
        }

        var uC = (uC.match(/.{1}/g));   
        console.log(uC);

        //Merges all the user input arrays into a single array with each entry only being a single character
        var passwordArray = passwordArray.concat(sC, nC, lC, uC); 
        console.log(passwordArray);
    }

    //Uses the shuffleArray to create a truely random password
    shuffleArray(passwordArray);

    console.log(passwordArray)

    //Prints the newly generated password to the textarea
    var textarea = document.getElementById("password");
    textarea.value = passwordArray.join("");
}

//Randomise array element order in-pace using Durstenfeld shuffle algorithm
function shuffleArray(array) {
    
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//Validation functions
//Check input value of prompt against set conditions
//If false, prompt the user to input again
//If true, move onto next prompt
function uCPrompt() {
    
    for(i=0; i<uC.length; i++){
        if (uC[i].match(/[A-Z]/g)) {
            var valid = true;
        }
        else {
            var valid = false;
        }
      
        while (!valid) {
            if (uC[i].match(/[A-Z]/g)) {
                var valid = true;
            }
            else {
                alert("Invalid character(s)")
                var uC = prompt("Please input an uppercase character(s):");
                i=0;
            }  
        }
    }
}