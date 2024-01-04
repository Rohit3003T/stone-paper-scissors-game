  let playerChoice;
  let num=0;
  let compScore=0;
  let playerScore =0;
  let result;
  let options =["rock","paper","sissors"];
  var rdnnum=Math.floor(Math.random()*3);
  
 // for click action 
  let img1 =document.querySelector(".img1");
 img1.addEventListener("click",()=>{
    playerChoice="rock";
    compareChoice();
    
    
    

});
let img2 =document.querySelector(".img2");
 img2.addEventListener("click",()=>{
    playerChoice="paper";
    compareChoice();

   

});
let img3 =document.querySelector(".img3");
 img3.addEventListener("click",()=>{
    playerChoice="sissors";
    compareChoice();
    

});
var compChoice = options[rdnnum];
function compareChoice (){
    let rdnnum=Math.floor(Math.random()*3);
    let compChoice = options[rdnnum];

if((playerChoice=="rock" && compChoice=="rock")||(playerChoice=="paper" && compChoice=="paper")||playerChoice=="sissors" && compChoice=="sissors"){
    result ="Draw";
    displayScore();
  
    
}else if((playerChoice=="rock" && compChoice== "paper")||(playerChoice=="paper" && compChoice=="sissors")||(playerChoice=="sissors" && compChoice=="rock")){
   result="you lost!";
   compScore=compScore+1;
   displayScore();


} else if((playerChoice=="rock"&& compChoice=="sissors") || (playerChoice=="paper" && compChoice=="rock")|| (playerChoice=="sissors" && compChoice=="paper")){
    result="you won!";
    playerScore=playerScore+1;
    displayScore();
    
}
}

function displayScore() {
    document.querySelector(".plscr").innerHTML = playerScore;
    document.querySelector(".cpscr").innerHTML = compScore; 
    document.querySelector(".rslt").innerHTML = result;
}






