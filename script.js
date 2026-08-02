const message="Welcome My Beautiful ❤️";

let i=0;

function type(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(type,100);

}

}

type();

const button=document.getElementById("startButton");

button.addEventListener("mouseover",()=>{

button.innerHTML="Click Me ❤️";

});

button.addEventListener("mouseout",()=>{

button.innerHTML="Start Our Journey";

});

button.addEventListener("click",()=>{

button.innerHTML="Loading... ❤️";

setTimeout(()=>{

window.location.href = "intro.html";

},1200);

});