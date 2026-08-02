const gifts = document.querySelectorAll(".gift");
const message = document.getElementById("message");
const nextButton = document.getElementById("nextButton");

const winner = Math.floor(Math.random() * gifts.length);

let finished = false;

gifts.forEach((gift,index)=>{

gift.addEventListener("click",()=>{

if(finished) return;

if(index===winner){

finished=true;

gift.innerHTML="❤️";

gift.style.background="gold";
gift.style.transform="scale(1.2)";

message.innerHTML="🎉 You found my surprise ❤️";

nextButton.style.display="inline-block";

confetti();

}else{

gift.innerHTML="😝";

gift.style.opacity=".6";

message.innerHTML="Nope... Try another gift 🎁";

}

});

});

nextButton.onclick=()=>{

window.location.href = "story1.html";

};

function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*window.innerWidth+"px";

c.style.background=`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},4000);

}

}