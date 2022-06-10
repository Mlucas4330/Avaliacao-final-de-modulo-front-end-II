"use strict";
const buttonhello = document.querySelector("#button-hello");
const buttonwelcome = document.querySelector("#button-welcome");
const hellocontainer = document.querySelector("#hello-container");
const welcomecontainer = document.querySelector("#welcome-container");
const logincontainer = document.querySelector("#login-container");
const registercontainer = document.querySelector("#register-container");
const dangercontainer = document.querySelector("#danger-container");
buttonhello.addEventListener("click", () => {
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
});
buttonwelcome.addEventListener("click", () => {
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
});
const formregister = document.querySelector("#form-register");
formregister.addEventListener("submit", (e) => {
    const nomeRegister = document.querySelector("#nome-register");
    const emailRegister = document.querySelector("#email-register");
    const senhaRegister = document.querySelector("#senha-register");
    e.preventDefault();
    const usuario = {
        nome: nomeRegister.value,
        email: emailRegister.value,
        senha: senhaRegister.value,
    };
    const usuarioToLocalStorage = JSON.stringify(usuario);
    localStorage.setItem("Usuario", usuarioToLocalStorage);
});
const formlogin = document.querySelector("#form-login");
formlogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailLogin = document.querySelector("#email-login");
    const senhalogin = document.querySelector("#senha-login");
    const usuario = JSON.parse(localStorage.getItem("Usuario"));
    let validado = false;
    if (emailLogin.value === usuario.email) {
        validado = true;
    }
    if (senhalogin.value === usuario.senha) {
        validado = true;
    }
    if (validado === true) {
        window.location.href = "recados.html";
    }
    else {
        alert("Email ou senha inválidos");
    }
});
