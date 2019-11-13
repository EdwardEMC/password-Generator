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
    //Ask whether or not certain characters are to be used
    //Validate if the password contains at least one of the character types
    //Choose a random number of chosen character types
    //Randomly print out the array in the text field

    specialArray = ["+","-","&&","||","!","(",")","{","}","[","]","^","~","*","?",":","\"","\\"];
    numercialArray = ["0","1","2","3","4","5","6","7","8","9"];
    lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


}
// //Prints the newly generated password to the textarea
// var textarea = document.getElementById("password");
// textarea.value = passwordArray.join("");

//Randomise array element order in-pace using Durstenfeld shuffle algorithm
function shuffleArray(array) {
    
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}