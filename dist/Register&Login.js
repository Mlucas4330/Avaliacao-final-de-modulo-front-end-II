const nomeRegister = document.querySelector("#nome-register");
const emailRegister = document.querySelector("#email-register");
const senhaRegister = document.querySelector("#senha-register");
const emailLogin = document.querySelector("#email-login");
const senhalogin = document.querySelector("#senha-login");

class Usuario {
    constructor(nome, email, senha) {
            this.nome = nome,
            this.email = email,
            this.senha = senha
    }
    createAccount() {
        const account = {
            nome: this.nome,
            email: this.email,
            senha: this.senha
        }
        const arrayofaccounts = JSON.parse(localStorage.getItem("Usuarios")) || [];
        arrayofaccounts.push(account);
        localStorage.setItem("Usuarios", JSON.stringify(arrayofaccounts));

    }
    login() {
        const usuario = JSON.parse(localStorage.getItem("Usuarios"));
        let valid = false
        let emailValidation = usuario.some(item => item.email === emailLogin.value)
        let passValidation = usuario.some(item => item.senha === senhalogin.value)
        if (emailValidation) {
            valid = true
        }
        if (passValidation) {
            valid = true
        }
        if (valid === true) {
            let token = Math.floor(Math.random() * 100)
            localStorage.setItem("token", token)
            window.location.href = 'recados.html'
        }
    }
}

document.querySelector("#form-register").addEventListener("submit", (e) => {
    e.preventDefault()
    let usuario = new Usuario(nomeRegister.value, emailRegister.value, senhaRegister.value);
    usuario.createAccount();
})

document.querySelector("#form-login").addEventListener("submit", (e) => {
    e.preventDefault();
    let usuario = new Usuario(nomeRegister.value, emailRegister.value, senhaRegister.value);
    usuario.login();
});

