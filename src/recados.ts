const btnLogout = document.querySelector("#logout") as HTMLButtonElement;
const form = document.querySelector("form") as HTMLFormElement;
const desc = document.querySelector("#descricao") as HTMLInputElement;
const det = document.querySelector("#detalhamento") as HTMLInputElement;
const usuario = document.querySelector("#usuario") as HTMLSpanElement;
const UsuariosLocalStorage = JSON.parse(localStorage.getItem("Usuarios"));
const nomeUsuario = UsuariosLocalStorage.nome;

class CRUD {
    nome: string;
    desc: string;
    det: string;
    constructor(nome : string, desc: string, det : string){
        this.nome = nome,
        this.desc = desc,
        this.det = det
    }

    welcome(){
        usuario.innerText = this.nome
    }
    
    logout(){
        localStorage.removeItem("token");
        window.location.href = 'index.html'
    }

    authentication() {
        if (!localStorage.getItem("token")) {
            alert('You must be logged in to access "Recados"')
            window.location.href = 'index.html'
        }
    }

    create() {
        if (desc.value === '' || det.value === '') {
            alert("Nada preenchido");
        }
        else {
            const tbody = document.querySelector("tbody") as HTMLTableSectionElement;
            const tr = document.createElement('tr');
            const id = Math.floor(Math.random() * 100);
                tr.innerHTML = `
                <td contentEditable="false"> # ${id} </td>
                <td class="text-break"> ${desc.value} </td>
                <td class="text-break"> ${det.value} </td> 
                <td class="col-1">
                <div class="d-flex d-md-none flex-column justify-between align-items-center">
                    <button contentEditable="false" class="w-50 btn rounded-5 bg-success rounded"></button>
                    <button contentEditable="false" class="w-50 btn rounded-5 bg-danger rounded"></button>
                </div>
                <div class="d-none d-md-flex">
                    <button contentEditable="false" class="btn btn-success" data="edit" >Editar</button>
                    <button contentEditable="false" class="btn btn-danger ms-3" data="delete" >Excluir</button>
                </div>
                </td>
                    `;
                tbody.appendChild(tr)
        }
    }

    delete (){
        const deletBtns : NodeList = document.querySelectorAll('[data="delete"]');
        deletBtns.forEach(btn => {
            btn.onclick = (e) => {
                e.target.parentNode.parentNode.parentNode.remove()
            }
        })
    }

    edit(){
        const editBtns : NodeList = document.querySelectorAll('[data="edit"]');
        editBtns.forEach(btn => {
            btn.onclick = (e) => {
                e.target.parentNode.parentNode.parentNode.setAttribute("contentEditable", "true")
            }
        })
    }
}

const USUARIO = new CRUD(nomeUsuario, desc.value, det.value)


window.onload = () => {
    USUARIO.welcome()
    USUARIO.delete()
    USUARIO.edit()
    USUARIO.authentication()
}

btnLogout.onclick = () => {
    USUARIO.logout()
}
    
form.onsubmit = (e) => {
    e.preventDefault()
    USUARIO.create()
    USUARIO.delete()
    USUARIO.edit()
}