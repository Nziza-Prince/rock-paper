
let Choices=['scissors','rock','paper']
let playerChoiceDisplay=document.getElementById("playerChoice")
let computerChoiceDisplay=document.getElementById("computerChoice")
let display=document.getElementById("results")
let playerPointsDisplay=document.getElementById("playerPoints")
let computerPointsDisplay=document.getElementById("computerPoints")
let rounds=document.getElementById("rounds")
let playTracker=0
let playerPoints=0;
let computerPoints=0;
let timesWon=0
let timesLost=0;
// the event of pressing the keys

function startTheGame(playerChoice){
  let result=""
    let computerChoice=Choices[Math.floor(Math.random()*3)]
   if(playerChoice===computerChoice){
    result="Its a tie😐"
   }
   else{
    switch(playerChoice){
        case 'scissors'||scissors():
            result=(computerChoice==='paper')? 'You win😀':'Computer wins😓'
            break;
        case 'paper'||paper():
            result=(computerChoice==='rock')? 'You win😀':'Computer wins😓'
            break;
        case 'rock'||rock():
            result=(computerChoice==='scissors') ? 'You win😀':'Computer wins😓'
            break;
    }
 
   }
display.classList.remove("greenText","redText")
   
   if(result==="You win😀"){
 display.classList.add("greenText")
    display.textContent=result
    playerPoints++
    playerPointsDisplay.classList.add("greenText")
   }
   else if(result==="Computer wins😓"){
    console.log('pc wins');
    display.classList.add("redText")
    display.textContent=result
    computerPoints++
    computerPointsDisplay.classList.add("redText")
   }
   else{
    display.textContent=result
  }
   
   playerChoiceDisplay.textContent=`PLAYER:${playerChoice}`
   computerChoiceDisplay.textContent=`COMPUTER:${computerChoice}`
   playerPointsDisplay.textContent=`player points:${playerPoints}`
   computerPointsDisplay.textContent=`computer points:${computerPoints}`; 
   setTimeout( ()=>{
    if(playTracker===(rounds.value)-1)
 if(playerPoints > computerPoints){
  
   playTracker=0
   alert("You won Dude Congs 🎉🎉🎉🎊")
   playerPoints=0
   computerPoints=0
   window.location.reload()
 }
 else if(playerPoints < computerPoints){

   playTracker=0
   alert("Sorry you lost bro try again later 🙇🙇🙇‍♂️")
   window.location.reload()
   playerPoints=0
   computerPoints=0
 }
 else{
  
   playTracker=0
   alert("That was a tie 😅😅😮‍💨😮‍💨")
   playerPoints=0
   computerPoints=0
  }
  
 playTracker++

},100)
}

document.addEventListener('keydown' , function(event){
  //  switch
  switch (event.key) {
    case 's':
      // console.log("Hey letter S was pressed 😅😠🦁")
      startTheGame('scissors');
      break;
    case 'p' :
      // console.log("Hey letter P was pressed 😅😠🦁")
     startTheGame('paper');
     break
    case 'r':
    //  console.log("Hey letter R was pressed 😅😠🦁")
     startTheGame('rock');
     break
    default:
      break;
  }
})



