"use strict";
const signupnmobileanimator = document.querySelector("#signup-mobile-animator");
const sectionsignin = document.querySelector("#section-sign-in");
const signinmobileanimator = document.querySelector("#signin-mobile-animator");
const sectionsignup = document.querySelector("#section-sign-up");
signupnmobileanimator.addEventListener("click", () => {
    sectionsignin.style.cssText = `
    transform: translateY(-100%);
    transition: ease-in-out 1s;
    z-index: 5;
`;
});
signinmobileanimator.addEventListener("click", () => {
    sectionsignin.style.cssText = `
    transform: translateY(0%);
    transition: ease-in-out 1s;
    z-index: 5;
`;
});
