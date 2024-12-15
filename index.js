let boxes=document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgame = document.querySelector(".new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg")

let turnO=true;
let count=0;

const winpatterns=[ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    count=0
    enabledboxes();
    msgcontainer.classList.add("hide")

}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO){
            box.innerHTML="O";
           
            turnO=false;
            
        }
        else{
            box.innerHTML="X";
           
            turnO=true;
        }
        box.disabled = true;
count++;
const iswinner = checkWinner();
if (count===9 && !iswinner){
    gamedraw();
};

        //                                              check winner
// checkWinner();        
    });
});
//                                gamedraw
const gamedraw=()=>{
    msg.innerHTML="game was draw";
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
//                             show winner
const showwinner=(winner)=>{
    msg.innerHTML=`congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
//                             disalbled btn
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    } }
    //                            enablebtn
    const enabledboxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerHTML="";
        }
}

//                         check winner function
const checkWinner=()=>{
    for (let pattern of winpatterns){
let posval1=boxes[pattern[0]].innerHTML;
let posval2=boxes[pattern[1]].innerHTML;
let posval3=boxes[pattern[2]].innerHTML;

if(posval1 !=="" && posval2 !=="" && posval3 !==""){
    if(posval1===posval2 && posval1===posval3){
        console.log("winner");
        showwinner(posval1);
        return true;
    }
         

    }
  }
 return false;
}


newgame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


