const desc = document.querySelector("#descricao");
const det = document.querySelector("#detalhamento");
const usuario = document.querySelector("#usuario");

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("token")) {
        alert('You must be logged in to access "Recados"')
        window.location.href = 'index.html'
    }
    bemVindo()
})

function bemVindo() {
    const usuarionome = JSON.parse(localStorage.getItem("Usuarios"));
    usuario.innerText = usuarionome.nome
}


function logout() {
    localStorage.removeItem("token");
    window.location.href = 'index.html'
}

function limparRecados() {
    const td = document.querySelectorAll("td");
    td.forEach(td => td.innerText = '');
}

function create() {
    if (desc.value === '' || det.value === '') {
        alert("Nada preenchido")
    }
    else {
        const usuario = JSON.parse(localStorage.getItem("Usuarios"));
        const detalhamentos = det.value;
        const descricoes = desc.value;
        usuario.descricao.push(descricoes);
        usuario.detalhamento.push(detalhamentos);
        localStorage.setItem("Usuarios", JSON.stringify(usuario))
        read()
    }
}

function read() {
    const recados = JSON.parse(localStorage.getItem("Usuarios"));
    const tbody = document.querySelector("#tbody");
    const tr = document.createElement('tr');
    const id = Math.floor(Math.random() * 100)
    tr.innerHTML = `
                <td> # ${id} </td>
                <td> ${recados.descricao.slice(-1)} </td>
                <td> ${recados.detalhamento.slice(-1)} </td> 
                <td class="col-1">
                <div class="d-flex d-md-none flex-column justify-between align-items-center">
                    <button class="w-50 btn rounded-5 bg-success rounded"></button>
                    <button class="w-50 btn rounded-5 bg-danger rounded"></button>
                </div>
                <div class="d-none d-md-flex">
                    <button class="btn btn-success editBtn">Editar</button>
                    <button class="btn btn-danger ms-3 deleteBtn">Excluir</button>
                </div>
                </td>
        `;
    tbody.appendChild(tr)
    deletar()
    update()
}

function update(){
    const btn = document.querySelectorAll(".editBtn")
    btn.forEach(btn => {
        btn.addEventListener("click", () => {
             btn.innerHTML = 'oi'
        })
    })
}

function deletar() {
   const btn = document.querySelectorAll(".deleteBtn")
   btn.forEach(btn => {
       btn.addEventListener("click", () => {
            btn.parentNode.parentNode.parentNode.remove()
       })
   })
}



document.querySelector("#logout").addEventListener("click", logout);


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    create()
})



