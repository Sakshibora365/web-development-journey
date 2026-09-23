let userseq=[];
let gameseq=[];

let btns=["green","red","yellow","blue"];

let started=false;
let level=0;

let pressbtn=document.querySelector(".button");
let changebybtn=document.querySelector(".simonhead h1+p");
let bg=document.querySelector(".simonbg");
pressbtn.addEventListener("click",()=>{
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }

});

function btnflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},1000)}


function levelup(){
level++;
changebybtn.innerText= `level ${level}`;

//random btn to choose abut flash
let randIndx=Math.floor(Math.random()*3);
let randmcolor=btns[randIndx];
let randmbtn=document.querySelector(`.${randmcolor}`);
console.log(randmbtn);
btnflash(randmbtn);
}