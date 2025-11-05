function botChoice(){
    let randomSelect = Math.random()*100;
    if(randomSelect < 33){
        let botSelect = "rock";
        let botUpper = botSelect.toUpperCase();
        return botUpper;
    }
    else if(randomSelect >= 33 && randomSelect < 67){
        let botSelect = "paper";
        let botUpper = botSelect.toUpperCase();
        return botUpper;
    }
    else if(randomSelect >= 67){
        let botSelect = "scissors";
        let botUpper = botSelect.toUpperCase();
        return botUpper;
    }
}


function humanChoice(){
    let humanSelect = prompt("Select between rock, paper, and scissors");
    return humanSelect.toUpperCase();
}

function playRound(manAnswer,botAnswer){
    if(manAnswer == botAnswer){
        return "Draw";
    }
    else if((manAnswer == "ROCK") && (botAnswer == "PAPER")){
        return "lose";
    }
    else if((manAnswer == "ROCK") && (botAnswer == "SCISSORS")){
        return "win";
    }
    else if((manAnswer == "PAPER") && (botAnswer == "SCISSORS")){
        return "lose";
    }
    else if((manAnswer == "PAPER") && (botAnswer == "ROCK")){
        return "win";
    }
    else if((manAnswer == "SCISSORS") && (botAnswer == "ROCK")){
        return "lose";
    }
    else if((manAnswer == "SCISSORS") && (botAnswer == "PAPER")){
        return "win";
    }
}

function startGame(){
    let round = 0;
    let humanScore = 0;
    let botScore = 0;
    while((humanScore < 3) && (botScore < 3)){
        let manAnswer = humanChoice();
        let botAnswer = botChoice();

        let decision = playRound(manAnswer,botAnswer);
        console.log("You chose " + manAnswer + " and bot chose " + botAnswer);
        console.log("it's a " + decision);

        if (decision == "win"){
            humanScore = humanScore+1;
        }
        else if(decision == "lose"){
            botScore = botScore+1;
        }
        console.log("Your Score " + humanScore);
        console.log("BOT's Score " + botScore);

    }
    console.log("Final Score is " + humanScore +"(Human) to " + botScore + "(BOT)")
}

startGame();

