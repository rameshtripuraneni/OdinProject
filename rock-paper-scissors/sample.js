
let humanScore = 0;
let computerScore = 0;
//Get the human choice through input
function getHumanChoice()
{
    const humanTurn = prompt("Enter your choice for the game");
    return humanTurn;
}
//Generated the computer choice randomly
function getComputerChoice()
{
    const gameWords = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * gameWords.length);
    const randomWord = gameWords[randomIndex];
    return randomWord;

}

//Compares the human's choice and computer's choice.
//Also returns the score
function playRound(humanChoice,computerChoice)
{
    const choice = humanChoice.toLowerCase();
    const comp = computerChoice.toLowerCase();
    if(choice === comp)
    {
        console.log("It's a tie");

    }
    else if((choice === "rock" && comp === "scissors") ||
            (choice === "paper" && comp === "rock") ||
            (choice === "scissors" && comp === "paper"))
            {
                 humanScore++;
                console.log("Human won the game because human choice is "  + choice + " and the computer choice is " + computerChoice + " and the score is " + humanScore);




            }
            else
            {
                computerScore++;
                console.log("Computer won the game because human choice is " + choice + " and the computer choice is " + computerChoice + " and the score is " + computerScore);


            }
}

//User chooses how many rounds that are to be played and returns the total score of the rounds
function playMultipleRounds(rounds)
{
    humanScore = 0;
    computerScore = 0;
    for( let i=1; i<=rounds; i++)
    {
        const human = getHumanChoice();
        if(human === null)
        {
            console.log(" Game cancelled.")
            break;
        }
        const computer = getComputerChoice();
        playRound(human, computer);
    }
    return{ human:humanScore, computer: computerScore};

}


const rounds = Number(prompt("How many rounds?"));
const finalScores = playMultipleRounds(rounds);
console.log(`Final Scores — You: ${finalScores.human} | Computer: ${finalScores.computer}`);



