// REGISTER & LOGIN
const nomeRegister = document.querySelector("#nome-register") as HTMLInputElement;
const emailRegister = document.querySelector("#email-register") as HTMLInputElement;
const senhaRegister = document.querySelector("#senha-register") as HTMLInputElement;
const nomelogin = document.querySelector("#nome-login") as HTMLInputElement;
const senhalogin = document.querySelector("#senha-login") as HTMLInputElement;
const buttonLogout = document.querySelector("#logout") as HTMLButtonElement;
const formRegister = document.querySelector("#form-register") as HTMLFormElement;
const formLogin = document.querySelector("#form-login") as HTMLFormElement;

// DESKTOP-DESIGN
const buttonhello = document.querySelector("#button-hello") as HTMLButtonElement;
const buttonwelcome = document.querySelector("#button-welcome") as HTMLButtonElement;
const hellocontainer = document.querySelector("#hello-container") as HTMLDivElement;
const welcomecontainer = document.querySelector("#welcome-container") as HTMLDivElement;
const logincontainer = document.querySelector("#login-container") as HTMLDivElement;
const registercontainer = document.querySelector("#register-container") as HTMLDivElement;
const dangercontainer = document.querySelector("#danger-container") as HTMLDivElement;

// MOBILE-DESIGN
const signupnmobileanimator = document.querySelector("#signup-mobile-animator") as HTMLDivElement;
const sectionsignin = document.querySelector("#section-sign-in") as HTMLDivElement;
const signinmobileanimator = document.querySelector("#signin-mobile-animator") as HTMLDivElement;
const sectionsignup = document.querySelector("#section-sign-up") as HTMLDivElement;

function createAccount() {
    const account: { nome: string, email: string, senha: string } = {
        nome: nomeRegister.value,
        email: emailRegister.value,
        senha: senhaRegister.value,
    }
    localStorage.setItem("Usuarios", JSON.stringify(account));
}

function login() {
    const usuario = JSON.parse(localStorage.getItem("Usuarios"));
    if (usuario) {
        let nomevalidation = usuario.nome === nomelogin.value;
        let senhavalitadion = usuario.senha === senhalogin.value;
        if (nomevalidation && senhavalitadion) {
            let token: number = Math.floor(Math.random() * 100);
            localStorage.setItem("token", JSON.stringify(token))
            window.location.href = 'recados.html';
        }
        else {
            alert("Email or password incorrect!")
        }
    }
    else {
        alert("Email or password incorrect!")
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
    e.preventDefault()
    toLeft()
    createAccount();
}



formLogin.onsubmit = (e) => {
    e.preventDefault();
    login();
}


buttonhello.onclick = () => toRight()
buttonwelcome.onclick = () => toLeft()

signupnmobileanimator.onclick = () => {
    sectionsignin.style.cssText = `
    transform: translateY(-100%);
    transition: ease-in-out 1s;
    z-index: 5;
`
}

signinmobileanimator.onclick = () => {
    sectionsignin.style.cssText = `
    transform: translateY(0%);
    transition: ease-in-out 1s;
    z-index: 5;
`
}





