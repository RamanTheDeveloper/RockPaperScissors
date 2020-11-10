const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //Start the game
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
           introScreen.classList.add('fadeOut');
           match.classList.add('fadeIn');
        });
    };

    //Play Match
    const playMatch = ()=> {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function (){
                this.style.animation = '';
            });
        });

        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=>{
           option.addEventListener('click', function(){
               //The computer choice
               const computerNumber = Math.floor(Math.random() * 3);
               const computerChoice = computerOptions[computerNumber];

               setTimeout(()=>{
                   //Here is where we call compareHands
                   compareHands(this.textContent, computerChoice);

                   //Update images
                   playerHand.src=`./images/${this.textContent}.png`;
                   computerHand.src=`./images/${computerChoice}.png`;
               }, 2000);

               //Animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
           });
        });
    };

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice)=>{
        //Update text
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It\'s a tie!';
            return;
        }

        //Check for Rock
        if(playerChoice === 'rock'){
            //Check for Scissors
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }
            //Check for paper
            else{
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }

        //Check for Paper
        if(playerChoice === 'paper'){
            //Check for Scissors
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
            //Check for paper
            else{
                winner.textContent = 'Players wins!';
                pScore++;
                updateScore();
                return;
            }
        }

        //Check for Scissors
        if(playerChoice === 'scissors'){
            //Check for Rock
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
            //Check for paper
            else{
                winner.textContent = 'Players wins!';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //Call all the inner function
    startGame();
    playMatch();
};

//Start the game function
game();