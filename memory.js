const girlName = localStorage.getItem("girlName") || "Jaan";

document.getElementById("title").innerHTML =
"Our First Call ❤️";

const text =

"Jaan...\n\n"+

"Do you remember our very first call?\n\n"+

"Maybe for the world...\n\n"+

"It was just another normal day.\n\n"+

"But for me...\n\n"+

"It became the beginning of something beautiful.\n\n"+

"I still smile whenever I remember that moment.\n\n"+

"From that day...\n\n"+

"Your voice became one of my favorite sounds.\n\n"+

"And slowly...\n\n"+

"You became one of the most important people in my life.\n\n"+

"So thank you...\n\n"+

"For answering that very first call.\n\n"+

"Because maybe...\n\n"+

"It changed my world forever. ❤️";

let i=0;

const area=document.getElementById("typing");

function type(){

if(i<text.length){

if(text.charAt(i)=="\n"){

area.innerHTML+="<br>";

}else{

area.innerHTML+=text.charAt(i);

}

i++;

setTimeout(type,18);

}else{

document.getElementById("nextBtn").style.display="inline-block";

}

}

type();

const music=document.getElementById("bgMusic");

document.getElementById("musicBtn").onclick=()=>{

music.play();

};

document.getElementById("nextBtn").onclick=()=>{

window.location.href="letter.html";

};

for(let i=0;i<180;i++){

const d=document.createElement("div");

d.className="drop";

d.style.left=Math.random()*100+"%";

d.style.animationDuration=(0.6+Math.random())+"s";

d.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(d);

}