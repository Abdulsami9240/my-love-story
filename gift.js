const gift =
document.getElementById("gift");


const box =
document.querySelector(".gift-box");


const message =
document.getElementById("message");


const button =
document.getElementById("nextBtn");



let opened=false;



gift.onclick=()=>{


if(opened)
return;


opened=true;


box.classList.add("open");



createHearts();



setTimeout(()=>{


message.style.display="block";


},1200);



};




button.onclick=()=>{


document.body.style.opacity="0";


setTimeout(()=>{


window.location.href="final.html";


},800);



};




// floating hearts

function createHearts(){


for(let i=0;i<30;i++){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"%";


heart.style.animationDuration=
(3+Math.random()*4)+"s";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},7000);



}


}