let addtask = document.querySelector('button');
let input = document.querySelector('input');
let list = document.querySelector('ul');
//accessing the button and input for functonality

addtask.addEventListener('click',()=>{
  let val = input.value;
  console.log(val);
  list.innerHTML = list.innerHTML+`<li>${val} <button class="delete">delete</button></li>`;
  input.value = '';
})