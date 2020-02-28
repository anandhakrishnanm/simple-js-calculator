 //To clear screen
document.getElementById('expression').innerHTML = "";


//To display user input
function setInput(userInput) {
    document.getElementById('expression').innerHTML = 
     document.getElementById('expression').innerText + userInput;
}


//To clear screen
document.getElementById('clear-scrn').addEventListener("click", function(){
    document.getElementById('expression').innerHTML = ""; 
    document.getElementById('history-text').innerHTML = ""; 
});


//append 0 to expression
document.getElementById('zero').addEventListener("click", function(){
    setInput("0");
});


//append 1 to expression
document.getElementById('one').addEventListener("click", function(){
    setInput("1");
});


//append 2 to expression
document.getElementById('two').addEventListener("click", function(){
    setInput("2");
});


//append 3 to expression
document.getElementById('three').addEventListener("click", function(){
    setInput("3");
});


//append 4 to expression
document.getElementById('four').addEventListener("click", function(){
    setInput("4");
});


//append 5 to expression
document.getElementById('five').addEventListener("click", function(){
    setInput("5");
});


//append 6 to expression
document.getElementById('six').addEventListener("click", function(){
    setInput("6");
});


//append 7 to expression
document.getElementById('seven').addEventListener("click", function(){
    setInput("7");
});


//append 8 to expression
document.getElementById('eight').addEventListener("click", function(){
    setInput("8");
});


//append 9 to expression
document.getElementById('nine').addEventListener("click", function(){
    setInput("9");
});


//append * to expression
document.getElementById('mul').addEventListener("click", function(){
    setInput("*");


//append / to expression
});document.getElementById('div').addEventListener("click", function(){
    setInput("/");
});


//append - to expression
document.getElementById('minus').addEventListener("click", function(){
    setInput("-");
});


//append + to expression
document.getElementById('plus').addEventListener("click", function(){
    setInput("+");
});


//append . to expression
document.getElementById('dot').addEventListener("click", function(){
    setInput(".");
});


//append ( to expression
document.getElementById('open').addEventListener("click", function(){
    setInput("(");
});


//append ) to expression
document.getElementById('close').addEventListener("click", function(){
    setInput(")");
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

