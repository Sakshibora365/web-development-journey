
let btn=document.querySelector('button');
btn.addEventListener("click",function(){
let h3=document.querySelector('h3');
let colors=ColorChange();
h3.innerText=colors;
console.log(colors);

let div=document.querySelector('div');
div.style.backgroundColor=colors;
console.log("colors chnage too");
});

function ColorChange(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color= `rgb(${red},${green},${blue})`;
    return color;
}
