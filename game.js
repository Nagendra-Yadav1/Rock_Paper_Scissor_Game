// let userScore = 0;
// let compScore = 0;

// const Showwinner= (userWin,userchoice,comchoice)=>{
//     if (userWin){
//         userScore++;
//         userScorePara.innerText=userScore
//         massage.style.backgroundColor="green",
//         massage.innerText=`Your ${userchoice} beats ${comchoice}`
//     }
//     else{
//         compScore++;
//         comscorePara.innerText=compScore
//         massage.style.backgroundColor="red",
//         massage.innerText=`Com ${comchoice} beats ${userchoice}`
//     }
// }

// const Complay=()=>{
//     const comchoices=["rock","paper","scissors"]
//     const Comgenerate=Math.floor(Math.random()*3)
//     console.log(comchoices[Comgenerate]);
//     return comchoices[Comgenerate];


// }

// const Gamedraw=()=>{
//     massage.innerText="Game draw.Play again"
//     massage.style.backgroundColor="#081b31"
// }

// const Gameplay=(userchoice)=>{
//     const comchoice=Complay()
//     if (userchoice===comchoice){
//         Gamedraw()
//     }
//     else{
//         let userWin=true;
//         if (userchoice==="rock"){
//             // paper, scissors
//             userWin=comchoice==="paper" ? false:true;
//         }
//         else if(userchoice=="paper"){
//             // rock,scissors
//             userWin=comchoice==="scissors" ? false:true;
//         }
//         else{
//             // paper,rock
//             userWin=comchoice==="rock" ? false:true;
//         }
//         Showwinner(userWin,userchoice,comchoice);
//     }
// }
// const userScorePara=document.querySelector("#user-score")
// const comscorePara=document.querySelector("#comp-score")
// const massage=document.querySelector("#msg")
// const choices=document.querySelectorAll(".choice")
// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userchoice=choice.getAttribute("id");
//         Gameplay(userchoice)  
//     })
// })