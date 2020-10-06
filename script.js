 //To clear screen
document.getElementById('expression').innerHTML = null;


//To display user input
function setInput(userInput) {
    document.getElementById('expression').innerHTML = 
     document.getElementById('expression').innerText + userInput;
}


//To clear screen
document.getElementById('clear-scrn').addEventListener("click", function(){
    document.getElementById('expression').innerHTML = null; 
    document.getElementById('history-text').innerHTML = null; 
});


//To evaluate expression and print result
document.getElementById('eql').addEventListener("click", function(){
    let historyText = document.getElementById('expression').innerText;
    document.getElementById('expression').innerHTML = 
     eval(document.getElementById('expression').innerText);
    document.getElementById('history-text').innerHTML = historyText;
    
});


//To clear last element from userInput
document.getElementById('clear').addEventListener("click", function(){
    let currentInput = document.getElementById('expression').innerText;
    let newString = currentInput.substring(0, currentInput.length - 1);
    document.getElementById('expression').innerHTML = newString;
});

ACTION_BUTTONS.map(actionButton => {
    document
        .getElementById(actionButton.key)
        .addEventListener("click", () => setInput(actionButton.value));
})

