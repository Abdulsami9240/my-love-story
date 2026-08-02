const gameArea = document.getElementById("gameArea");
const scoreText = document.querySelector("#score span");
const message = document.getElementById("message");
const nextButton = document.getElementById("nextButton");

let score = 0;

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random()*90+"%";

heart.style.top = "-50px";

gameArea.appendChild(heart);

let y = -50;

const fall = setInterval(()=>{

y += 3;

heart.style.top = y+"px";

if(y > 450){

heart.remove();

clearInterval(fall);

}

},20);

heart.onclick = ()=>{

score++;

scoreText.innerHTML = score;

heart.remove();

clearInterval(fall);

message.innerHTML = "You caught my heart ❤️";

if(score >= 15){

finishGame();

}

}

}

function finishGame(){

clearInterval(spawn);

message.innerHTML = "🎉 You collected every piece of my heart ❤️";

nextButton.style.display = "inline-block";

}

const spawn = setInterval(createHeart,700);

nextButton.onclick = ()=>{

window.location.href="game3.html";

};