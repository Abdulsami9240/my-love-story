// AUTO MUSIC START ❤️

window.addEventListener("load",()=>{

let music=document.getElementById("music");

music.volume = 0.5;

music.play().catch(()=>{

console.log("Click required for music");

});

});



// FINAL PREMIUM JAVASCRIPT ❤️


// =====================
// LOADING SCREEN
// =====================

window.onload = ()=>{


setTimeout(()=>{

document.getElementById("loader").style.display="none";


},3000);


};

// =====================
// TYPING EFFECT
// =====================


let text =
"I Love You Forever Minal ❤️";


let index=0;


function typing(){


if(index < text.length){


document.getElementById("typing").innerHTML += text.charAt(index);


index++;


setTimeout(typing,120);


}


}


setTimeout(typing,3500);





// =====================
// MUSIC CONTROL
// =====================


const music =
document.getElementById("music");


const musicBtn =
document.getElementById("musicBtn");


let playing=false;



musicBtn.onclick=()=>{


if(!playing){


music.play();


musicBtn.innerHTML="🔊";


playing=true;


}

else{


music.pause();


musicBtn.innerHTML="🎵";


playing=false;


}


};



// =====================
// FLOATING HEARTS
// =====================


function createHeart(){


let heart=document.createElement("div");


heart.className="floating-heart";


heart.innerHTML="❤️";


heart.style.left=
Math.random()*100+"%";



heart.style.animationDuration=
(4+Math.random()*5)+"s";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},8000);



}



setInterval(createHeart,500);







// =====================
// REAL FIREWORKS
// =====================


const canvas =
document.getElementById("fireworks");


const ctx =
canvas.getContext("2d");



canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;



window.onresize=()=>{

canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;

};




let particles=[];



function createFirework(){



let x =
Math.random()*canvas.width;


let y =
Math.random()*canvas.height/2;



for(let i=0;i<80;i++){



particles.push({

x:x,

y:y,

speedX:
(Math.random()-0.5)*8,

speedY:
(Math.random()-0.5)*8,

life:100

});


}



}




function animate(){



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach((p,index)=>{


p.x+=p.speedX;

p.y+=p.speedY;


p.life--;



ctx.beginPath();


ctx.arc(
p.x,
p.y,
3,
0,
Math.PI*2
);



ctx.fillStyle=
"pink";


ctx.fill();



if(p.life<=0){

particles.splice(index,1);

}


});



requestAnimationFrame(animate);


}




setInterval(createFirework,1200);


animate();






// =====================
// HEART EXPLOSION
// =====================


setTimeout(()=>{


for(let i=0;i<50;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="absolute";


heart.style.left="50%";


heart.style.top="50%";


heart.style.fontSize=
(15+Math.random()*30)+"px";



heart.style.transform=
`translate(
${Math.random()*500-250}px,
${Math.random()*500-250}px
)`;


heart.style.transition="2s";


document.body.appendChild(heart);



setTimeout(()=>{


heart.style.opacity="0";


},100);



setTimeout(()=>{


heart.remove();


},2500);



}



},4000);