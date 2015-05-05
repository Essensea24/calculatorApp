

var numButtons = document.getElementsByClassName("number");
var contents = ""; 


function numClickHandler(e) {
    console.log(e.target.innerHTML);    
    console.log("Click on " + e.target.innerHTML);
    contents += e.target.innerHTML;
    console.log(contents);
}

for(var i=0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", numClickHandler);
}

function getResult() {

    console.log(eval(contents));    
}



// function getSecondNum(firstNumb,secondNumb) {
//     console.log(secondNumb)
// }

// function addTwoNums(firstNumb,secondNumb) {
//    result = (a+b);
//    console.log(a + b);

// }

// function multTwoNums(firstNumb,secondNumb) {
//     result = (a*b);
//     console.log (a *b);

// }


// function subTwoNums(firstNumb,secondNumb) {
//     result = (a-b);
//     console.log(a - b);
// }

// function divideTwoNums(firstNumb,secondNumb) {
//     result = (a/b);
//     console.log(a/b);
// }





// function refresh() {
//     result = 0
//     console.log("0");
// }