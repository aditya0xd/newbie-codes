// const min = 1;
// const max = 500;
// const answer = Math.floor(Math.random()* (max-min +1) + min);

// // console.log(answer);

// let attempt=0;
// let guess;
// let running=true;

// while(running){
//     guess = window.prompt("Enter a number between " + min +" and " + max);
//     guess= Number(guess);
//     if(isNaN(guess)){
//         window.alert("Enter a valid number!!");
//     }
//     else if (guess>max || guess<min) {
//         window.alert("Enter a valid number!!");
//     }
//     else{
//         attempt++;
//         if(guess<answer){
//             window.alert("TOO LOW!! try again");
//         }
//         else if(guess>answer){
//             window.alert("TOO HIGH!! try again");
//         }
//         else if(guess===answer){
//             window.alert("Congratulations!! Attemps = " + attempt);
//             running = false;
//         }
//     }
    
// }
const min = 1;
const max = 100;
const answer = Math.floor(Math.random()* (max-min +1) + min);

let attempt=0;
let guess;


let Submit = document.getElementById("myBtn").onclick = function(){
        guess= document.getElementById("Answer").value;
        guess = Number(guess);

        if(isNaN(guess)){
            window.alert("Enter a valid number!!");
        }
        else if (guess>max || guess<min) {
            window.alert("Enter a valid number!!");
        }
        else{
        attempt++;
            if(guess<answer){
                window.alert("TOO LOW!! try again");
            }
            else if(guess>answer){
                window.alert("TOO HIGH!! try again");
            }
            else if(guess===answer){
                window.alert("Congratulations!! Attemps = " + attempt);
                document.getElementById("submitBtn").disabled = true;
            }
        }
    
}
