let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usermsg=document.querySelector("#user-score");
const compmsg=document.querySelector("#comp-score");
const genCompchoice=()=>{
    const options=["rock","paper","Scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}
const gamedraw=()=>{
    // console.log("The game was draw");
    msg.innerText="The game was draw,Play again.";
    msg.style.backgroundColor='rgb(118, 192, 181)';
}
const winner=(winuser,userchoice,comChoice)=>{
    if (winuser){
        userScore++;
        usermsg.innerText=userScore;
        msg.innerText=`You win!,Your ${userchoice} beats ${comChoice}`;
        msg.style.backgroundColor='green';
    }
    else{
        compScore++;
        compmsg.innerText=compScore;
        msg.innerText=`You Lost!!,${comChoice} beats your ${userchoice}`;
        msg.style.backgroundColor='red';
    }
}
const playGame=(userchoice)=>{
    console.log("user choice",userchoice);
    //generate computer choice
    const comChoice=genCompchoice();
    console.log("computer choice",comChoice);
    if( userchoice===comChoice)
        gamedraw();
    else{
        let winuser=true;
        if(userchoice=='rock'){
            //papper,Scissors
            winuser=comChoice==='paper'?false:true;
        }else if(userchoice==='paper'){
            //scissors,rock
            winuser=comChoice==='Scissors'?false:true;
        }else{
            //rock,paper
            winuser=comChoice==='rock'?false:true;
        }
        winner(winuser,userchoice,comChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute('id')
        playGame(userchoice);

    })
})
