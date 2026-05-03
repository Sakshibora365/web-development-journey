console.log("hello");
let a =34;
let b =35;
console.log(`sum is ${a+b}`);
let n ='addy';
let m ='simr';
console.log(`full name is ${n + m}`);

let age=45;
if(age>=18){
    console.log('your age is eligible for it' );
}
else if (age<=18){
console.log('you are not eligible for this program and i am really sorry for you');
}
let gender=34;
if(gender>=10);
{
    console.log("yes i am girl ");
if(gender>=30){
    console.log('then ofcourse you are preety!');
}
}


let names='shrey';
if(names==='shrey');
{console.log("you are my girl then ")  ;
    if(names==='shrey')
    {console.log("you are enough")};
}

let string='a';
if(string==' '){
    console.log('yes string is empty');}

else (string!=' ') 
    console.log('not available');

let s='aPnacollEge';
let index=3;
if(s[index]==s[index].toLowerCase);{
console.log("yes ther is lowercase");}
 
let stringme= prompt('please enter your string');
console.log(`original = ${stringme}`);
console.log(`new = ${stringme.trim()}`);

let aes=[1,2,'er'];
let i=2;
if(aes.indexOf(i) != -1){
    console.log('array contain that element ');
}
else {
    console.log('that element do not exist in array');
}
for(let i=1;i<=20;i=2+i){
    console.log(i);
}
let hero=[['ironman','spiderman','thor'],['hulk','captain america','black widow']];
for(leti=0;i<hero.length;i++){
    console.log(hero[i], i);
    for(let j=0;j<hero[i].length;j++){
        console.log(`j=${j},${hero[i][j]}`);
    }
}

//learn about object literal
const info={
    
aman:{
    name:"aman",
    age:"23",
},

hema:{
    name:"hema",
    age:"32"
},
nuse:{
    name:"hey",
    age:"45",
},


};

const object={
    name:"hytt",
    age:"54",
};

let user=prompt('please eenter number ');
const randomNumber=Math.floor(Math.random()*10)+1;
let guess=("guess the number between 1 to 10");
while(true){
    if(guess=="quit"){
        console.log("you have quit the game");
        break;
    }
    else if(guess==randomNumber){
        console.log("congratulations! you guessed the number");
        break;
    }

    else if(guess<randomNumber){
        console.log("too low! try again");
    }
    else if(guess>randomNumber){
        console.log("too high! try again");
    }   
    else {
        console.log("invalid input! please enter a number between 1 to 10 or 'quit' to exit");
    }
};