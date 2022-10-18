function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let rIndex = Math.floor(Math.random() * choices.length);   
    return choices[rIndex].toLowerCase();
}

function playRound(playerSelection="")
{
    const _playerChoice = String(prompt("Rock, Paper or Scissors?")).toLowerCase();
    const _computerChoice = getComputerChoice();
    if (_playerChoice == _computerChoice)
    {
        console.log(`You won the round :))\n Your Choice: ${_playerChoice}, PC's Choice: ${_computerChoice}`);

        return true;
    }
    else
    {
        console.log(`You lost the round:((\n Your Choice: ${_playerChoice}, PC's Choice: ${_computerChoice}`)
        return false;
    }
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

