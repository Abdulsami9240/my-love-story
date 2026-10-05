const gift =

document.getElementById("gift");


const box =

document.querySelector(".gift-box");


const message =

document.getElementById("message");


const button =

document.getElementById("nextBtn");


const music =

document.getElementById("bgMusic");



let opened=false;



gift.onclick=()=>{


if(opened)

return;


opened=true;


box.classList.add("open");



/* =========================
   BACKGROUND MUSIC
========================= */

if(music){

music.play().catch(()=>{

console.log("Music could not start.");

});

}



/* =========================
   FLOATING HEARTS
========================= */

createHearts();



/* =========================
   FIREWORKS
========================= */

createFireworks();



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






/* =========================================
   FIREWORKS
========================================= */

function createFireworks(){


const canvas=document.createElement("canvas");


canvas.id="fireworksCanvas";


document.body.appendChild(canvas);



const ctx=canvas.getContext("2d");



canvas.style.position="fixed";

canvas.style.top="0";

canvas.style.left="0";

canvas.style.width="100%";

canvas.style.height="100%";

canvas.style.pointerEvents="none";

canvas.style.zIndex="10";



function resizeCanvas(){


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


}


resizeCanvas();



window.addEventListener("resize",resizeCanvas);



let particles=[];



function randomColor(){


const colors=[

"#ff004c",

"#ff66cc",

"#ffd700",

"#00ffff",

"#ffffff",

"#9d4edd",

"#ff7b00"

];


return colors[

Math.floor(Math.random()*colors.length)

];


}



function createExplosion(x,y){


const particleCount=70;



for(let i=0;i<particleCount;i++){


const angle=

Math.random()*Math.PI*2;


const speed=

Math.random()*6+2;



particles.push({


x:x,

y:y,


vx:Math.cos(angle)*speed,

vy:Math.sin(angle)*speed,


alpha:1,


size:Math.random()*3+1,


color:randomColor()


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



for(let i=particles.length-1;i>=0;i--){


const p=particles[i];



p.x+=p.vx;

p.y+=p.vy;



p.vy+=0.05;



p.vx*=0.99;

p.vy*=0.99;



p.alpha-=0.015;



ctx.globalAlpha=p.alpha;


ctx.fillStyle=p.color;



ctx.beginPath();


ctx.arc(

p.x,

p.y,

p.size,

0,

Math.PI*2

);


ctx.fill();



if(p.alpha<=0){


particles.splice(i,1);


}


}



ctx.globalAlpha=1;



requestAnimationFrame(animate);


}



animate();



/* =========================
   FIREWORK TIMING
========================= */


let fireworkCount=0;



const fireworkInterval=setInterval(()=>{


const x=

Math.random()*canvas.width;


const y=

Math.random()*

(canvas.height*0.55);



createExplosion(x,y);



fireworkCount++;



if(fireworkCount>=12){


clearInterval(fireworkInterval);



setTimeout(()=>{


canvas.remove();


},3000);


}


},500);


}