function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let rIndex = Math.floor(Math.random() * choices.length);   
    return choices[rIndex].toLowerCase();
}

function playRound(playerSelection)
{
    const _playerChoice = String(prompt("Rock, Paper or Scissors?")).toLowerCase();
    const _computerChoice = getComputerChoice();
    if (_playerChoice == _computerChoice)
    {
        console.log(`You won the round :))\n Your Choice: ${_playerChoice}, PC's Choice: ${_computerChoice}`);

        return 1;
    }
    else
    {
        console.log(`You lost the round:((\n Your Choice: ${_playerChoice}, PC's Choice: ${_computerChoice}`)
        return 0;
    }
}

