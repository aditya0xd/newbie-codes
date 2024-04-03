
let list = document.getElementById("list");
let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");
let message = document.getElementById("message");
let playerScore = 0;
let computerScore = 0;

let playerSpan = document.createElement("span");
let computerSpan = document.createElement("span");
let displayAttempt = document.createElement("span");

let attempt = 0;

let arr = [" Rock", " Paper", " Scissors"];



list.addEventListener("click", event =>{

    attempt++;

    playerChoice.textContent = "PLAYER:";
    computerChoice.textContent = "Computer:";

    if(event.target.textContent === "🤚") {
        playerChoice.textContent += " Paper";
    }
    if(event.target.textContent === "👊") {
        playerChoice.textContent += " Rock";
    }
    if(event.target.textContent === "✌️") {
        playerChoice.textContent += " Scissors";
    }

    let random = Math.floor(Math.random()* 3);
    computerChoice.textContent += arr[random];

    if(playerChoice.textContent == "PLAYER: Rock" && computerChoice.textContent == "Computer: Rock"){
        message.textContent = "IT'S A TIE!!"
        message.style.color = "grey";
        playerScore++;
        computerScore++;
    }

    if(playerChoice.textContent == "PLAYER: Rock" && computerChoice.textContent == "Computer: Paper"){
        message.textContent = "YOU LOOSE!"
        message.style.color = "red";
        computerScore++;
    }

    if(playerChoice.textContent == "PLAYER: Rock" && computerChoice.textContent == "Computer: Scissors"){
        message.textContent = "YOU WIN!"
        message.style.color = "hsl(120, 87%, 60%)";
        playerScore++;
    }

    if(playerChoice.textContent == "PLAYER: Paper" && computerChoice.textContent == "Computer: Paper"){
        message.textContent = "IT'S A TIE!"
        message.style.color = "grey";
        computerScore++;
        playerScore++;
    }

    if(playerChoice.textContent == "PLAYER: Paper" && computerChoice.textContent == "Computer: Rock"){
        message.textContent = "YOU WIN!"
        message.style.color = "hsl(120, 87%, 60%)";
        playerScore++;
    }

    if(playerChoice.textContent == "PLAYER: Paper" && computerChoice.textContent == "Computer: Scissors"){
        message.textContent = "YOU LOOSE!"
        message.style.color = "red";
        computerScore++;
    }

    if(playerChoice.textContent == "PLAYER: Scissors" && computerChoice.textContent == "Computer: Paper"){
        message.textContent = "YOU WIN!"
        message.style.color = "hsl(120, 87%, 60%)";
        playerScore++;
    }
    if(playerChoice.textContent == "PLAYER: Scissors" && computerChoice.textContent == "Computer: Rock"){
        message.textContent = "YOU LOOSE!"
        message.style.color = "red";
        computerScore++;
    }
    if(playerChoice.textContent == "PLAYER: Scissors" && computerChoice.textContent == "Computer: Scissors"){
        message.textContent = "IT'S A TIE!!"
        message.style.color = "grey";
        computerScore++;
        playerScore++;
    }
    playerSpan.textContent = playerScore;
    playerSpan.style.color = "green";
    document.getElementById("playerScore").append(playerSpan);

    computerSpan.textContent = computerScore;
    computerSpan.style.color = "red";
    document.getElementById("computerScore").append(computerSpan);

    // document.getElementById("playerScore").textContent += playerScore;
    // document.getElementById("playerScore").style.color = "green";
    // document.getElementById("computerScore").textContent += computerScore;
    // document.getElementById("computerScore").style.color = "red";
    displayAttempt.textContent = attempt;
    document.getElementById("attempt").append(displayAttempt);

});




