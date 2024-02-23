let rounds = prompt("How many rounds do you want to play?", 3);
console.log(parseInt(rounds));

let userWins = 0
let userLoses = 0
let ties = 0

for (let i = 0; i < rounds; i++) {
let userChoice = prompt("Rock, Paper, or Scissors? (r, p, or s)")
console.log(userChoice)

let computerChoice = Math.floor(Math.random()* 3);
if (computerChoice === 0) {
    computerChoice = "r";
} else if (computerChoice === 1) {
    computerChoice = "p";
} else {computerChoice = "s"
}
console.log(computerChoice)

if(userChoice === "r" && computerChoice === "s") {
    alert("You won! You choose " + (userChoice) + " which beats " + (computerChoice)); userWins += 1;
} else if (userChoice === "p" && computerChoice === "r") {
    alert("You won! You choose " + (userChoice) + " which beats " + (computerChoice)); userWins += 1
} else if (userChoice === "s" && computerChoice === "p") {
    alert("You won! You choose " + (userChoice) + " which beats " + (computerChoice)); userWins += 1
} else if (userChoice === computerChoice) {
    alert("It's a tie!"); ties += 1;
} else {
    alert("You lose! The computer picked " + (computerChoice) + " which beats " + (userChoice) ); userLoses += 1
}
}

alert("You won " + (userWins) + " times, tied " + (ties) + " times, lost " + (userLoses) + " times.")