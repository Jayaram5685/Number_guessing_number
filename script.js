let checkBtn=document.getElementById("check");
let numberEle=document.getElementById("number");
let restartBtn=document.getElementById("restart");
let bestscore=document.getElementById("best");

let successmsg=document.getElementById("success");
let alerMsg=document.getElementById("alert");

let minimum=1;
let maximum=100;
let attempts=0;
let best=0;
const answer=Math.floor(Math.random()*(maximum-minimum+1))+minimum;

checkBtn.addEventListener("click",function(){
    let guess=numberEle.value;
    if(guess === "" || isNaN(guess)){
        alerMsg.textContent="Please enter valid number ";
        alerMsg.classList.add("error");
        successmsg.textContent="";
    }

    else if(guess<minimum || guess>maximum){
        alerMsg.textContent="Please enter valid number";
        successmsg.textContent="";

    }
    else{
        attempts++;
        if (guess<answer){
            alerMsg.textContent=`Hint:your guess ${guess} is TOO LOW! TRY AGAIN!`;
            alerMsg.classList.add("error");
            successmsg.textContent="";


        }
        else if(guess>answer){
            alerMsg.textContent=`Hint:your guess ${guess} is TOO HIGH! TRY AGAIN`;
            alerMsg.classList.add("error");
            successmsg.textContent="";


        }
        else{
            successmsg.textContent=`CONGRATULATIONS 🎉🎉! The answer was ${answer}. you guess ${attempts} attempts`;
            successmsg.classList.add("success")
            alerMsg.textContent="";
            if (attempts>best){
                bestscore.textContent=`Best Score :${attempts}`;
                bestscore.classList.add("score");
            }
            attempts=0;

        }
    }


});

restartBtn.addEventListener("click",function(){
    let attempts=0
    const answer=Math.floor(Math.random()*(maximum-minimum+1))+minimum;
    numberEle.value="";
    alerMsg.textContent="";
    successmsg.textContent="";
})



