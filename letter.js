const girlName = localStorage.getItem("girlName") || "Jaan";

const envelope=document.getElementById("envelope");

const cover=document.querySelector(".cover");

const paper=document.querySelector(".paper");

const box=document.getElementById("letterBox");

const title=document.getElementById("title");

const area=document.getElementById("letter");

const next=document.getElementById("next");

title.innerHTML="My Dearest Jaan ❤️";

envelope.onclick=()=>{

cover.style.transform="rotateX(180deg)";

paper.style.transform="translateY(-170px)";

setTimeout(()=>{

envelope.style.display="none";

box.style.display="block";

startTyping();

},1200);

};

const letterText =
`My Dearest Jaan ❤️,

Happy Girlfriend's Day.

Today isn't just another day...

It's a small reminder of how lucky I feel to have you in my life.

I don't think a simple "I Love You" is enough to explain what you mean to me.

Sometimes I wonder...

How did one person become so important to me?

Maybe it started with our first call.

Maybe it started with your smile.

Or maybe...

It started the day my heart quietly chose you.

Whenever I think about your beautiful eyes...

I feel calm.

They have a way of making every worry disappear.

Thank you...

For making me smile.

For listening to me.

For caring about me.

For being yourself.

You don't have to be perfect.

Because to me...

You are already more than enough.

I know life won't always be easy.

There will be good days...

And difficult days.

But if I have one wish...

It's that we always stay together.

No matter what happens.

No matter where life takes us.

If I could choose again...

I would still choose you.

Again.

Again.

And forever.

Thank you for being my happiness.

Thank you for becoming my safe place.

And thank you for making ordinary moments feel unforgettable.

Happy Girlfriend's Day, My Jaan.

I Love You Forever ❤️

— Yours Always ❤️`;

let index = 0;

function startTyping(){

    area.innerHTML = "";

    function type(){

        if(index < letterText.length){

            if(letterText.charAt(index) == "\n"){

                area.innerHTML += "<br>";

            }else{

                area.innerHTML += letterText.charAt(index);

            }

            index++;

            setTimeout(type,25);

        }else{

            next.style.display = "block";

        }

    }

    type();

}

next.onclick = () => {

    window.location.href = "gift.html";

};