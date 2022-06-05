const slidebutton = document.querySelector("#slide-button");
const slider = document.querySelector("#slider");
const signincol = document.querySelector("#signin-col");
const signupcol = document.querySelector("#signup-col");


const slideleft = () => {
    slider.classList.add("slideleft");
}

const slideright = () => {
    setInterval(function () {
        signincol.classList.add("invisible")
    }, 100);
    signincol.classList.add("slideright");
}



slidebutton.addEventListener("click", slideright)
slidebutton.addEventListener("click", slideleft)

