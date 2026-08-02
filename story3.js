const girlName = localStorage.getItem("girlName") || "My Love";


// Music System

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


musicBtn.onclick = ()=>{


if(music.paused){


music.play();


musicBtn.innerHTML="⏸ Pause Music";


}

else{


music.pause();


musicBtn.innerHTML="🎵 Play Music";


}


};



// Heading

document.getElementById("title").innerHTML =
"One More Thing ❤️";



const lines = [


girlName + "...",


"There is something I have been wanting to tell you...",


"Life is full of unexpected moments...",


"And meeting someone who makes your days brighter is one of the greatest blessings.",


"You have made me laugh when I needed it the most.",


"You have given me memories that I will always keep close to my heart.",


"So before this journey ends...",


"I just want you to know something...",


"You are truly special to me. ❤️"


];



const message = document.getElementById("message");

const next = document.getElementById("nextBtn");


let i = 0;



function show(){


message.style.opacity = "0";


setTimeout(()=>{


message.innerHTML = lines[i];


message.style.opacity = "1";


i++;


if(i < lines.length){


setTimeout(show,4000);


}

else{


next.style.display="inline-block";


}


},700);


}



show();



next.onclick = ()=>{


window.location.href="memory.html";


};