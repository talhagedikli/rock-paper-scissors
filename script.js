const buttons = document.getElementsByTagName("button");
const body = document.body;
body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.flexDirection = 'column';
body.style.gap = '30px';
const results = document.createElement('div');

let playerScore = 0;
let compScore = 0;


buttons[0].addEventListener('click', function (e) {
    playRound("rock");
});
buttons[1].addEventListener('click', function (e) {
    playRound("paper");
});
buttons[2].addEventListener('click', function (e) {
    playRound("scissors");
});

body.appendChild(results);

function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let rIndex = Math.floor(Math.random() * choices.length);   
    return choices[rIndex].toLowerCase();
}

function getWinner(playerChoice, computerChoice)
{
    switch (playerChoice)
    {
        case 'rock':
            switch (computerChoice)
            {
                case 'rock': winner = null; break;
                case 'paper': winner = 'computer'; break;
                case 'scissors': winner = 'player'; break;
            }
            break;
        case 'paper':
            switch (computerChoice)
            {
                case 'rock': winner = 'player'; break;
                case 'paper': winner = null; break;
                case 'scissors': winner = 'computer'; break;
            }
            break;
        case 'scissors':
            switch (computerChoice)
            {
                case 'rock': winner = 'computer'; break;
                case 'paper': winner = 'player'; break;
                case 'scissors': winner = null; break;
            }
            break;
    }
    return winner;
}

function playRound(playerSelection)
{
    // const _playerChoice = String(prompt("Rock, Paper or Scissors?")).toLowerCase();
    const _playerChoice = playerSelection;
    const _computerChoice = getComputerChoice();
    let winner = getWinner(_playerChoice, _computerChoice);
    if (winner)
    {
        if (winner = 'player') 
        {
            playerScore++;
        }
        else
        {
            compScore++;
        }

    }
    results.textContent = (`${winner} win the round :))\n Your Choice: ${_playerChoice}, PC's Choice: ${_computerChoice}`);

    if (playerScore >= 5)
    {
        alert('You win the game!');
        playerScore = 0;
        compScore = 0;
    }
    else if (compScore >= 5)
    {
        alert('You lost the game.');
        playerScore = 0;
        compScore = 0;
    }
    results.textContent += ' ' + playerScore.toString();
}






/* Old logic
function game()
{
    let pScore = 0;
    let cScore = 0;
    for (let i = 0; i < 5; i++)
    {
        if (playRound())
        {
            pScore++;
        }
        else
        {
            cScore++;
        }
    }
    if (pScore > cScore)
    {
        console.log(`You win the game!!\n Your score: ${pScore}, Computer's score: ${cScore}`);
    }
    else if (pScore < cScore)
    {
        console.log(`You lost the game..\n Your score: ${pScore}, Computer's score: ${cScore}`);
    }
    else
    {
        console.log("Draw!!");
    }
}
*/


