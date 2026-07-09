let button = document.getElementById('color');
button.addEventListener("click",function(){
    button.style.backgroundColor="green";
});

let text=document.querySelector('#tsk');
text.addEventListener("input",function(){
console.log(text.value);


;});
let btn=document.querySelector('#addtask');
let ul=document.querySelector('ul');
let input=document.querySelector('#task');

btn.addEventListener("click",function(){
let listitem =document.createElement('li');
listitem.innerText=input.value;
ul.appendChild(listitem);
input.value="";


});



