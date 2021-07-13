
//Baddy One
var button1 = document.getElementById("button-one");

function getQuoteOne() {
     var input1 = document.getElementById("baddy-one")
    var a = 5
    var b = input1.value
    var c = a * b;
    document.getElementById("first-total").innerHTML = c + " coins"
}

button1.addEventListener("click", getQuoteOne)



//Baddy Two
var button2 = document.getElementById("button-two");

function getQuoteTwo() {
     var input2 = document.getElementById("baddy-two")
    var a = 7
    var b = input2.value
    var c = a * b;
    document.getElementById("second-total").innerHTML = c + " coins"
}

button2.addEventListener("click", getQuoteTwo)


//Baddy Three
var button3 = document.getElementById("button-three");

function getQuoteThree() {
     var input3 = document.getElementById("baddy-three")
    var a = 11
    var b = input3.value
    var c = a * b;
    document.getElementById("third-total").innerHTML = c + " coins"
}

button3.addEventListener("click", getQuoteThree)