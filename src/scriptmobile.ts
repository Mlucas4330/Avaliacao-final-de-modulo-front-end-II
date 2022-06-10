const signupnmobileanimator = document.querySelector("#signup-mobile-animator") as HTMLDivElement
const sectionsignin = document.querySelector("#section-sign-in") as HTMLDivElement
const signinmobileanimator = document.querySelector("#signin-mobile-animator") as HTMLDivElement
const sectionsignup = document.querySelector("#section-sign-up") as HTMLDivElement


signupnmobileanimator.addEventListener("click", () => {
    sectionsignin.style.cssText = `
    transform: translateY(-100%);
    transition: ease-in-out 1s;
    z-index: 5;
`
})

signinmobileanimator.addEventListener("click", () => {
    sectionsignin.style.cssText = `
    transform: translateY(0%);
    transition: ease-in-out 1s;
    z-index: 5;
`
})