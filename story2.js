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



// Story Heading

document.getElementById("heading").innerHTML =
"Our Little Story ❤️";



const messages = [

"Before you... life was moving just like every other day.",

"Then one day... without any warning... you became a part of my world.",

"I don't know the exact moment when everything changed...",

"But slowly... your messages became my favorite notifications.",

"Your smile became something I could never get tired of imagining.",

"And somehow... without even trying...",

"You became one of the most beautiful parts of my life, " + girlName + ". ❤️"

];


const text = document.getElementById("text");

const button = document.getElementById("nextBtn");


let index = 0;



function showMessage(){


text.style.opacity="0";


setTimeout(()=>{


text.innerHTML = messages[index];


text.style.opacity="1";


index++;


if(index < messages.length){


setTimeout(showMessage,4000);


}

else{


button.style.display="inline-block";


}


},800);


}



showMessage();



button.onclick=()=>{


window.location.href="story3.html";


};