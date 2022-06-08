const buttonhello = document.querySelector("#button-hello")
const buttonwelcome = document.querySelector("#button-welcome")
const hellocontainer = document.querySelector("#hello-container")
const welcomecontainer = document.querySelector("#welcome-container")
const logincontainer = document.querySelector("#login-container")
const registercontainer = document.querySelector("#register-container")
const dangercontainer = document.querySelector("#danger-container")
buttonhello.addEventListener("click", () => {
    hellocontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: 5;
        `
    welcomecontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: 15;
        `
    logincontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: -5;
        `
    registercontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: 5;
        `
    dangercontainer.style.cssText = `
        transform: translateX(-100%);
        transition: ease-in-out 1s;
        z-index: 5;
        `
})
buttonwelcome.addEventListener("click", () => {
    hellocontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: 5;
    `
    welcomecontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: -5;
    `
    logincontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: 5;
    `
    registercontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: -5;
    `
    dangercontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: 5;
    `
})



// const button = document.querySelector("#teste");

// button.addEventListener("click", (e) => {
//     e.preventDefault()
//     let requireds = document.querySelectorAll("[required]")
//     for(let required of requireds){
//     let teste = required.value
//     let teste2 = teste.split(",");
//     console.log(teste2)
//     }
// })





