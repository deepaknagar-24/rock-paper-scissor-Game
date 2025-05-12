let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg_container = document.querySelector('.msg-container');
const msg = document.getElementById('msg');
const user_score = document.getElementById('user-score');
const comp_score = document.getElementById('comp-score');

const genCompChoice = ()=>{
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx] ;
}

const drawGame = ()=>{
    msg.innerText = 'Game was Draw. Play again.';
    msg_container.style.display = 'flex'
      msg_container.style.backgroundColor = 'black';
}

const showWinner = (userWin, userChoice, compChoice)=>{
   if(userWin){
    userScore++;
    user_score.innerHTML = userScore
      msg.innerHTML = `You win!. your ${userChoice} beats ${compChoice}`;
      msg_container.style.backgroundColor = 'green'
   } else{
    compScore++;
    comp_score.innerHTML = compScore
        msg.innerHTML = `You loss!. ${compChoice} beats your ${userChoice}`;
        msg_container.style.backgroundColor = 'red'
   }
}

const playGame = (userChoice)=>{

     console.log('user choice is', userChoice)
     const compChoice = genCompChoice();
     console.log('comp choice is', compChoice);

     if(userChoice === compChoice){
         drawGame();
     } else{

        let userWin = true;

        if(userChoice === 'rock'){
            userWin = compChoice === 'paper'? false : true;
        } else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors'? false : true;
        } else{
            userWin = compChoice === 'rock'? false : true;
        }

           showWinner(userWin, userChoice, compChoice)
     }
};

choices.forEach((choice)=>{
    choice.addEventListener('click', function(){
        const userChoice = choice.getAttribute('id')
        playGame(userChoice);
    })
})