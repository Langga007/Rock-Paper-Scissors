let choices = ["rock", "paper", "scissors"];

function startGame() {
  let imgs = document.querySelectorAll(".game-img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id)
      }
    })
  );
}

function playRound(playerChoice) {
  let oppImgs = document.querySelectorAll('.opp-img')
  oppImgs.forEach(img => {
    img.style.display = 'none'
  })
  const computerChoice = computerSelect();
  const winner = checkWinner(playerChoice, computerChoice);
  let roundWin = document.querySelector('h1');
  roundWin.textContent = `${winner}`
  tallyWins(playerChoice, computerChoice);
}

function tallyWins(playerChoice, computerChoice) {
  const winner = checkWinner(playerChoice, computerChoice)
  if(winner == "Player Wins"){
    let pwin = document.querySelector(`.pwin`);
    let currentWins = parseInt(pwin.textContent)
    pwin.textContent = ++currentWins;
    if(currentWins == 5){
      let gameWinner = document.querySelector('h1');
      gameWinner.textContent = `CONGRATULATIONS YOU ARE THE WINNER!`
      showReset();
      let pImg = document.querySelectorAll('.game-img');
      pImg.forEach(img => {
        img.style.pointerEvents = "none"
      })
    }
  }
    if(winner == "Opponent Wins"){
    let cwin = document.querySelector(`.cwin`);
    let currentWins = parseInt(cwin.textContent)
    cwin.textContent = ++currentWins;
    if(currentWins == 5){
      let gameWinner = document.querySelector('h1');
      gameWinner.textContent = `GAME OVER, YOU LOSE`
      showReset();
      let pImg = document.querySelectorAll('.game-img');
      pImg.forEach(img => {
        img.style.pointerEvents = "none"
      })
    }
  }
  if(winner == "It's a Tie"){
    let tie = document.querySelector(`.tie`);
    let currentWins = parseInt(tie.textContent)
    tie.textContent = ++currentWins;
  }
}


function showReset(){
  let resetBtn = document.querySelector('button');
  resetBtn.addEventListener('click', resetGame) 
  resetBtn.style.display = "block"

}

function resetGame(){
  let h1 = document.querySelector('h1');
  h1.textContent = `ROCK, PAPER, SCISSORS`
  let h2 = document.querySelector('h2');
  h2.textContent = `Choose, to begin the Game`
  let cwin = document.querySelector(`.cwin`);
  cwin.textContent = 0;
  let pwin = document.querySelector(`.pwin`);
  pwin.textContent = 0;
  let tie = document.querySelector(`.tie`);
  tie.textContent = 0;
  let oppImg = document.querySelectorAll(`.opp-img`);
  oppImg.forEach(img => {
    img.style.display = "none"
  })
  let resetBtn = document.querySelector(`button`);
  resetBtn.style.display = "none"
  let pImg = document.querySelectorAll('.game-img');
  pImg.forEach(img => {
    img.style.pointerEvents = "auto"
  })
}

function computerSelect() {
  let computerImg = choices[Math.floor(Math.random() * choices.length)];
  let oppImgs = document.querySelectorAll(`#${computerImg}-opp`);
  oppImgs.forEach(img => {
    img.style.display = 'block';
  })
  let opptxt = document.querySelector('h2');
    opptxt.textContent = `Computer Picks: ${computerImg[0].toUpperCase() + computerImg.slice(1)}`;
  return computerImg;
}

function glow() {
  this.style.opacity = "60%";
}

function resetOpacity() {
  this.style.opacity = "";
}

let imgList = document.querySelectorAll(".game-img");

imgList.forEach(function (img) {
  img.addEventListener("mouseover", glow);
  img.addEventListener("mouseout", resetOpacity);
});

function checkWinner(playerChoice, computerChoice) {
  if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    return "Player Wins";
  } else if (playerChoice == computerChoice) {
    return "It's a Tie";
  } else {
    return "Opponent Wins";
  }
}

startGame();