
let screen = document.getElementById("screen1");
let history = document.getElementById("screen2");
let inputs = document.querySelectorAll("button");

for (let input of inputs) {
    input.addEventListener("click", calcfunc);
}

let screenInputs = "";

function calcfunc(input) {
    
        let inputText = input.target.innerText;
         // console.log(inputText);
         if (inputText == "C") {
             screenInputs = "";
             screen.value = screenInputs;
         }
         else if (inputText == "B") {
             screenInputs = screen.value.slice(0, - 1);
             screen.value = screenInputs;
         }
         else if (inputText == "=") {
             let result = eval(screenInputs);
             screen.value = result;

             history.value = screenInputs +" = " +result;
             
         }
         else {
             screenInputs += inputText;
             screen.value = screenInputs;
         }
}


