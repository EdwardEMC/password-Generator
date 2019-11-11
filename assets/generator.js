function copytext() {
    /*Get the text field*/
    var copyText = document.getElementById("password");

    /*Select the text field*/
    copyText.select();
    
    //Sets the selection range for mobile devices
    copyText.setSelectionRange(0,99999);

    document.execCommand("copy");

    alert("Copied password to clipboard")
}

function passwordGenerator() {
    //Create blank array for inputs to be pushed to
    //Prompt user for input
    //Single out characters for single array entries
    //Validate that it includes certain character aspects
    //Merge all character arrays into one
    //Randomly print out the array in the text field

    passwordArray = []
    
    alert("The following prompts will make up the core of your new password, the prompts will continue until the password is at least 8 characters long.");

    //Continues to ask the user for input until the password is at least 8 characters long. 7 is used so that it doesn't repeat itself a third time, if only one character is input at a time
    while (passwordArray.length<=7) {
        var sC = prompt("Please input a special character:");

        var sC = (sC.match(/.{1}/g));
        console.log(sC);

        var nC = prompt("Please input a number:");

        var nC = (nC.match(/.{1}/g));
        console.log(nC);

        var lC = prompt("Please input a lowercase character:");

        var lC = (lC.match(/.{1}/g));
        console.log(lC);

        var uC = prompt("Please input an uppercase character:");

        var uC = (uC.match(/.{1}/g));
        console.log(uC);

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