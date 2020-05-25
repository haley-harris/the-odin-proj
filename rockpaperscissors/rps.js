function computerPlay() {
    // returns a choice at random
    choice = ['rock', 'paper', 'scissors']
    computer_choice = choice[Math.floor(Math.random() * 3)]; 
    return computer_choice;
}

function playerSelection() {
    // prompts player for input and returns the input in lowercase
    player_input = prompt('Choose rock, paper, or scissors: ');
    final_player_input = player_input.toLowerCase();
    return final_player_input;   
}

// initialize score
player_score = 0;
computer_score = 0;

function playRound() {

    player_selection = playerSelection();
    computer_selection = computerPlay();

    // rock paper scissors logic + score incrementation
    if (player_selection == 'rock' && computer_selection == 'scissors') {
        console.log('You won!');
        player_score++;  
    } else if (player_selection == 'paper' && computer_selection == 'rock') {
        console.log('You won!');
        player_score++;
    } else if (player_selection == 'scissors' && computer_selection == 'paper'){
        console.log('You won!');
        player_score++;
    } else if (player_selection == computer_selection) {
        console.log('Draw')
    } else {
        console.log('You lost...');
        computer_score++;
    }

    // print player and computer choices for each round
    console.log('Player:', player_selection);
    console.log('Computer:', computer_selection);
    // print player and computer score for each round
    console.log('Player score:', player_score);
    console.log('Computer score:', computer_score);

    return player_score, computer_score;
}

function resetScore() {
    // reset scores after playing a full 5-turn round
    player_score = 0;
    computer_score = 0;

    return player_score, computer_score;
}

function game() {

    // loop through 5 rounds of gameplay
    for (i = 0; i < 5; i++) {
        playRound();
    }

    resetScore();
}