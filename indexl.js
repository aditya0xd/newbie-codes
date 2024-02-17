let counter=0;

document.getElementById("b1").onclick = function(){
    counter--;
    document.getElementById("mylabel").textContent = counter;
}

document.getElementById("b2").onclick = function(){
    counter=0;
    document.getElementById("mylabel").textContent = counter;
}

document.getElementById("b3").onclick = function(){
    counter++;
    document.getElementById("mylabel").textContent = counter;
}