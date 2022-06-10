const buttonhello = document.querySelector("#button-hello") as HTMLButtonElement
const buttonwelcome = document.querySelector("#button-welcome") as HTMLButtonElement
const hellocontainer = document.querySelector("#hello-container") as HTMLDivElement
const welcomecontainer = document.querySelector("#welcome-container") as HTMLDivElement
const logincontainer = document.querySelector("#login-container") as HTMLDivElement
const registercontainer = document.querySelector("#register-container") as HTMLDivElement
const dangercontainer = document.querySelector("#danger-container") as HTMLDivElement
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


const formregister = document.querySelector("#form-register") as HTMLFormElement
formregister.addEventListener("submit", (e) => {
    const nomeRegister = document.querySelector("#nome-register") as HTMLInputElement
    const emailRegister = document.querySelector("#email-register") as HTMLInputElement
    const senhaRegister = document.querySelector("#senha-register") as HTMLInputElement
    e.preventDefault()
    const usuario = {
        nome: nomeRegister.value,
        email: emailRegister.value,
        senha: senhaRegister.value,
    }
    const usuarioToLocalStorage = JSON.stringify(usuario);
    localStorage.setItem("Usuario", usuarioToLocalStorage);
})

const formlogin = document.querySelector("#form-login") as HTMLFormElement
formlogin.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailLogin = document.querySelector("#email-login") as HTMLInputElement
    const senhalogin = document.querySelector("#senha-login") as HTMLInputElement
    const usuario = JSON.parse(localStorage.getItem("Usuario"))
    let validado: Boolean = false
    if(emailLogin.value === usuario.email){
        validado = true
    }
    if(senhalogin.value === usuario.senha){
        validado = true
    }
    if(validado === true){
        window.location.href = "recados.html"
    }
    else {
       alert("Email ou senha inválidos")
    }
})



