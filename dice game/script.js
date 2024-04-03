function roll(){
    const noOfDice = document.getElementById("noOfDice").value;
    const values = [];
    const images = [];

    const diceR = document.getElementById("diceR");
    const diceIm = document.getElementById("diceIm");


    for(let i=0; i<noOfDice; i++){
        const rand = Math.floor(Math.random()*6) +1; 
        values.push(rand);
        images.push(`<img src="dice_images/${rand}.png">`);
    }
    
    diceR.textContent = values.join(", ");
    diceIm.innerHTML = images.join("");
}