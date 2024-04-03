//Temperature conversion Program

const textBox = document.getElementById("input");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


// Prevent the default form submission behavior
document.getElementById("ButtonId").addEventListener("click", function(event) {
event.preventDefault(); 
});

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = ((9/5)*temp) + 32;
        result.textContent = temp.toFixed(1) + " °F ";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32)*5/9;
        result.textContent = temp.toFixed(1) + " °C";
    }
    else{
        result.textContent = "Select a Unit";

    }

}