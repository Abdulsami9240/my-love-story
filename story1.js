const girlName = localStorage.getItem("girlName") || "My Love";

document.getElementById("title").innerHTML =
"Dear " + girlName + " ❤️";

const lines = [

"Sometimes life introduces us to someone when we least expect it...",

"And without realizing it...",

"That person slowly becomes our happiest thought...",

"The reason behind random smiles...",

"And the first name we look for on our phone...",

"For me...",

"That person is you. ❤️"

];

const text = document.getElementById("line");

const next = document.getElementById("nextBtn");

let index = 0;

function showLine(){

text.style.opacity=0;

setTimeout(()=>{

text.innerHTML=lines[index];

text.style.opacity=1;

index++;

if(index<lines.length){

setTimeout(showLine,3500);

}else{

next.style.display="inline-block";

}

},800);

}

showLine();

next.onclick=()=>{

window.location.href="story2.html";

}

const music = document.getElementById("storyMusic");

const musicBtn = document.getElementById("musicBtn");


musicBtn.onclick = ()=>{

    music.volume = 0.5;

    music.play();

    musicBtn.style.display="none";

};