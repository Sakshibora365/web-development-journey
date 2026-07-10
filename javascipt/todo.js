let button = document.getElementById('color');
button.addEventListener("click",function(){
    button.style.backgroundColor="green";
});

let text=document.querySelector('#tsk');
let p=document.querySelectorAll('p');
text.addEventListener("input",function(){
console.log(text.value);
p[0].innerText=text.value;
;});


let addbutton=document.querySelector("#addtask");
let inputinbox=document.querySelector("#task");
let ul=document.querySelector("ul");

addbutton.addEventListener("click",function(){

let newlist=document.createElement("li");
newlist.innerText=inputinbox.value;

let deletebutton=document.createElement("button");
deletebutton.innerText="Delete";

newlist.appendChild(deletebutton);
ul.appendChild(newlist);
inputinbox.value="";

});
let delbtns=document.querySelectorAll(".delete");
for (const deleteBtn of delbtns) 
    deleteBtn.addEventListener("click",function(){
     let par=this.parentElement;
     par.remove();
    });
