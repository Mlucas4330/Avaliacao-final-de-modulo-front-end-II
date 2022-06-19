"use strict";
// REGISTER & LOGIN
const nomeRegister = document.querySelector("#nome-register");
const emailRegister = document.querySelector("#email-register");
const senhaRegister = document.querySelector("#senha-register");
const nomelogin = document.querySelector("#nome-login");
const senhalogin = document.querySelector("#senha-login");
const buttonLogout = document.querySelector("#logout");
const formRegister = document.querySelector("#form-register");
const formLogin = document.querySelector("#form-login");
// DESKTOP-DESIGN
const buttonhello = document.querySelector("#button-hello");
const buttonwelcome = document.querySelector("#button-welcome");
const hellocontainer = document.querySelector("#hello-container");
const welcomecontainer = document.querySelector("#welcome-container");
const logincontainer = document.querySelector("#login-container");
const registercontainer = document.querySelector("#register-container");
const dangercontainer = document.querySelector("#danger-container");
// MOBILE-DESIGN
const signupnmobileanimator = document.querySelector("#signup-mobile-animator");
const sectionsignin = document.querySelector("#section-sign-in");
const signinmobileanimator = document.querySelector("#signin-mobile-animator");
const sectionsignup = document.querySelector("#section-sign-up");
function createAccount() {
    const account = {
        nome: nomeRegister.value,
        email: emailRegister.value,
        senha: senhaRegister.value,
    };
    localStorage.setItem("Usuarios", JSON.stringify(account));
}
function login() {
    const usuario = JSON.parse(localStorage.getItem("Usuarios"));
    if (usuario) {
        let nomevalidation = usuario.nome === nomelogin.value;
        let senhavalitadion = usuario.senha === senhalogin.value;
        if (nomevalidation && senhavalitadion) {
            let token = Math.floor(Math.random() * 100);
            localStorage.setItem("token", JSON.stringify(token));
            window.location.href = 'recados.html';
        }
        else {
            alert("Email or password incorrect!");
        }
    }
    else {
        alert("Email or password incorrect!");
    }
}
function toRight() {
    hellocontainer.style.cssText = `
    transform: translateX(100%);
    transition: ease-in-out 1s;
    z-index: 5;
    `;
    welcomecontainer.style.cssText = `
    transform: translateX(100%);
    transition: ease-in-out 1s;
    z-index: 15;
    `;
    logincontainer.style.cssText = `
    transform: translateX(100%);
    transition: ease-in-out 1s;
    z-index: -5;
    `;
    registercontainer.style.cssText = `
    transform: translateX(100%);
    transition: ease-in-out 1s;
    z-index: 5;
    `;
    dangercontainer.style.cssText = `
    transform: translateX(-100%);
    transition: ease-in-out 1s;
    z-index: 5;
    `;
}
function toLeft() {
    hellocontainer.style.cssText = `
    transform: translateX(0);
    transition: ease-in-out 1s;
    z-index: 5;
`;
    welcomecontainer.style.cssText = `
    transform: translateX(0);
    transition: ease-in-out 1s;
    z-index: -5;
`;
    logincontainer.style.cssText = `
    transform: translateX(0);
    transition: ease-in-out 1s;
    z-index: 5;
`;
    registercontainer.style.cssText = `
    transform: translateX(0);
    transition: ease-in-out 1s;
    z-index: -5;
`;
    dangercontainer.style.cssText = `
    transform: translateX(0);
    transition: ease-in-out 1s;
    z-index: 5;
`;
}
formRegister.onsubmit = (e) => {
    e.preventDefault();
    toLeft();
    createAccount();
};
formLogin.onsubmit = (e) => {
    e.preventDefault();
    login();
};
buttonhello.onclick = () => toRight();
buttonwelcome.onclick = () => toLeft();
signupnmobileanimator.onclick = () => {
    sectionsignin.style.cssText = `
    transform: translateY(-100%);
    transition: ease-in-out 1s;
    z-index: 5;
`;
};
signinmobileanimator.onclick = () => {
    sectionsignin.style.cssText = `
    transform: translateY(0%);
    transition: ease-in-out 1s;
    z-index: 5;
`;
};
