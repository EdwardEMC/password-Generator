function copytext() {
    /*Get the text field*/
    var copyText = document.getElementById("password");

    /*Select the text field*/
    copyText.select();
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

    emptyArray = []

    
    alert("The following prompts will make up the core of your new password")

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

    var passwordArray = emptyArray.concat(sC, nC, lC, uC); 

    console.log(passwordArray);

    shuffleArray(passwordArray);

    console.log(passwordArray)
}

function shuffleArray(array) {
    //Randomise array element order in-pace using Durstenfeld shuffle algorithm
    
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}