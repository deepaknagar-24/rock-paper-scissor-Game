// let userScore = 0;
// let compScore= 0;

// const choices = document.querySelectorAll('.choice');
// const msg = document.getElementById('msg');
// const userScorePara = document.getElementById('user-score');
// const compScorePara = document.getElementById('comp-score');

// const genCompChoice = ()=>{
//     let options = ['rock', 'paper', 'scissors'];
//     let randIdx = Math.floor(Math.random() * 3);
//     return options[randIdx];
// }

// const drawGame = ()=>{
//     msg.innerHTML = `Game was Draw. play again`;
//     msg.style.backgroundColor='#081b31'
// }

// const showWinner = (userWin, userChoice, compChoice)=>{
//        if(userWin){
//          userScore++;
//          userScorePara.innerHTML = userScore;
//          msg.innerHTML=`You win! your ${userChoice} beats ${compChoice}`;
//          msg.style.backgroundColor='green'
//        } else {
//          compScore++;
//          compScorePara.innerHTML = compScore;
//          msg.innerHTML=`You lose! ${compChoice} beats your ${userChoice}`;
//          msg.style.backgroundColor='red'
//        }
// }

// const checkWinner = (userChoice)=>{
//     const compChoice = genCompChoice();

//     if(userChoice === compChoice){
//         drawGame();
//     } else {
//        let userWin = true;
//        if(userChoice === 'rock'){
//           userWin = compChoice === 'paper'? false : true;
//        } else if(userChoice === 'paper'){
//           userWin = compChoice === 'scissors'? false : true;
//        } else {
//           userWin = compChoice === 'rock'? false : true;
//        } 
//        showWinner(userWin, userChoice, compChoice);
//     }
    
// }

// choices.forEach((choice)=>{
//     choice.addEventListener('click', function(){
//          let userChoice = choice.getAttribute('id');
//          checkWinner(userChoice)
//     })
// })


const choices = document.querySelectorAll('.choice');
const userScorePara = document.getElementById('user-score');
const compScorePara = document.getElementById('comp-score');
const msg = document.getElementById('msg');

let userScore = 0;
let compScore = 0;

const genCompChoice = ()=>{
        const options = ['rock', 'paper', 'scissors'];
        let randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerHTML = userScore;
            msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = 'green'
        } else{
            compScore++;
            compScorePara.innerHTML = compScore;
            msg.innerHTML = `You lose! ${compChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor='red';
        }
}

const drawGame = ()=>{
    msg.innerHTML = `Draw Game, play again`;
    msg.style.backgroundColor='#081b31';
    
}

const checkWinner = (userChoice)=>{
    console.log('user choice is', userChoice)
    let compChoice = genCompChoice();
    console.log('computer choice is',compChoice)

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin  = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper'? false : true;
        } else if(userChoice === 'paper'){
             userWin = compChoice === 'scissors'? false : true;
        } else {
             userWin = compChoice === 'rock'? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click', function(){
         let userChoice = choice.getAttribute('id');
         checkWinner(userChoice)
    })
})