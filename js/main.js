let playGame = confirm("You want to play THE GAME?");
if (playGame)
{

    let playerChoice = prompt("Please enter rock, paper, or scissors.");

    if (playerChoice)
    {
    if (playerChoice == "rock")
    {

        const randomNum = Math.floor(Math.random() * 3) + 1;

        if (randomNum == 1)
        {
            alert("Computer played rock, it is a tie!");
        }
        else if (randomNum == 2)
        {
            alert("Computer played scissors, you win!");
        }
        else alert("Computer played paper, you lose!");
        console.log(randomNum);
        let playAgain = confirm("Play Again?");
        if (playAgain) location.reload();
        else alert("Ok maybe next time!");

    }
    else if (playerChoice == "scissors")
    {
        const randomNum = Math.floor(Math.random() * 3) + 1;

        if (randomNum == 1)
        {
            alert("Computer played rock, you lose!");
        }
        else if (randomNum == 2)
        {
            alert("Computer played scissors, it is a tie!");
        }
        else alert("Computer played paper, you win!");
        console.log(randomNum);
        let playAgain = confirm("Play Again?");
        if (playAgain) location.reload();
        else alert("Ok maybe next time!");
    }
    else if (playerChoice == "paper")
    {

        const randomNum = Math.floor(Math.random() * 3) + 1;

        if (randomNum == 1)
        {
            alert("Computer played rock, you win!");
        }
        else if (randomNum == 2)
        {
            alert("Computer played scissors, you lose!");
        }
        else alert("Computer played paper, it is a tie!");
        console.log(randomNum);

        let playAgain = confirm("Play Again?");
        if (playAgain) location.reload();
        else alert("Ok maybe next time!");
    }
    else alert("you did not enter a correct word");


    
    }
    else alert("Ok maybe next time.");
}
else{

    alert("Ok, maybe next time.");

}