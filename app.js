let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let arr = ["rock", "paper", "scissors"];
let myScore = document.querySelector("#my-score");
let compScore = document.querySelector("#comp-score");
let display = document.querySelector("#commentary");
let bgd = document.querySelector(".display");
let myChoice = "";
const getRandom = () => {
    return arr[Math.floor(Math.random()*3)];
}
rock.addEventListener("click",() =>{
    myChoice = "rock";
    let compChoice = getRandom();
    if(myChoice === compChoice){
        display.innerText = "IT'S A DRAW. PLAY AGAIN!";
        bgd.style.backgroundColor = "goldenrod";
    }
    else if(compChoice === "paper"){
        display.innerText = "COMPUTER WINS!";
        bgd.style.backgroundColor = "red";
        compScore.innerText++;
    }
    else if(compChoice === "scissors"){
        display.innerText = "YOU WIN!";
        bgd.style.backgroundColor = "green";
        myScore.innerText++;
    }
})

paper.addEventListener("click",() =>{
    myChoice = "paper";
    let compChoice = getRandom();
    if(myChoice === compChoice){
        display.innerText = "IT'S A DRAW. PLAY AGAIN!";
        bgd.style.backgroundColor = "goldenrod";
    }
    else if(compChoice === "rock"){
        display.innerText = "YOU WIN!";
        bgd.style.backgroundColor = "green";
        myScore.innerText++;
    }
    else if(compChoice === "scissors"){
        display.innerText = "COMPUTER WINS!";
        bgd.style.backgroundColor = "red";
        compScore.innerText++;
    }
})

scissors.addEventListener("click",() =>{
    myChoice = "scissors";
    let compChoice = getRandom();
    if(myChoice === compChoice){
        display.innerText = "IT'S A DRAW. PLAY AGAIN!";
        bgd.style.backgroundColor = "goldenrod";
    }
    else if(compChoice === "paper"){
        display.innerText = "YOU WIN!";
        bgd.style.backgroundColor = "light green";
        myScore.innerText++;
    }
    else if(compChoice === "rock"){
        display.innerText = "COMPUTER WINS!";
        bgd.style.backgroundColor = "red";
        compScore.innerText++;
    }
})

