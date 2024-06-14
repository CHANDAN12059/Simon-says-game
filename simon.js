let h2=document.querySelector("h2");
let user=[];
let game=[];
let level=0;
let start=false;
let colors=["red","green","yellow","purple"];
document.addEventListener("keypress",()=>{
if(start==false){
    start=true;
   levelUp();}
})
function gameflash(btns){
    btns.classList.add("gameflash");
    setTimeout(()=>{
        btns.classList.remove("gameflash");
    },250);

}
function userflash(btns){
    btns.classList.add("userflash");
    setTimeout(()=>{
        btns.classList.remove("userflash");
    },250);
}
function levelUp(){
    user=[];
    level++;
    h2.innerText=`Level ${level}`;
    let idx=Math.floor(Math.random()*3);
    let randomColor=colors[idx];
    let randombtn=document.querySelector(`.${randomColor}`);
    game.push(randomColor);
    console.log(game);

    gameflash(randombtn);
}
function checkAns(index){
if(user[index]===game[index]){
if(user.length==game.length){
    setTimeout(   levelUp,1000);
 
}
}
else{
    h2.innerText=`GAME OVER,YOUR SCORE IS ${level}`;
document.querySelector("body").style.backgroundColor="red";
setTimeout(()=>{
    document.querySelector("body").style.backgroundColor="white";
},1000);
    reset();
}
}
let btn=document.querySelectorAll(".box");
function btnpress(){
    bt=this;
    userflash(bt);
    usercolor=bt.getAttribute("id");
    user.push(usercolor);
    console.log(user);
    checkAns(user.length-1);
}

for(b of btn){
    b.addEventListener("click",btnpress);
}
function reset(){
    start=false;
    game=[];
    user=[];
    level=0;
}




