let userseq = [];
let gameseq = [];

let btns = ["green", "red", "yellow", "blue"];

let started = false;
let level = 0;

let pressbtn = document.querySelector(".button");
let changebybtn = document.querySelector(".simonhead h1+p");

pressbtn.addEventListener("click", () => {
    if (!started) {
        console.log("Game started");
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userseq = []; // Reset user inputs for the new level
    level++;
    changebybtn.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random() * 4);
    let randmcolor = btns[randIndx];
    let randmbtn = document.querySelector(`#${randmcolor}`);
    
    gameseq.push(randmcolor);
    gameflash(randmbtn);
}

function checkanswer(idx) {
    // 1. Check if current button matches game sequence at step `idx`
    if (userseq[idx] === gameseq[idx]) {
        // 2. If true, check if user completed the entire sequence for this level
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        // Game Over condition
        changebybtn.innerText = `Game Over! Score: ${level}. Press start button to restart.`;
        reset();
    }
}

function btnpress() {
    if (!started) return; // Prevent clicking before game starts

    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    // Pass the index of the last clicked color
    checkanswer(userseq.length - 1);
}

let allbtn = document.querySelectorAll(".simonbtn");
for (let btn of allbtn) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}