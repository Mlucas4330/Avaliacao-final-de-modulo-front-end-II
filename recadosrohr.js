// const descricao = document.getElementById("descricao");
// const detalhamento = document.getElementById("detalhamento");

// document.querySelector("form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     create();
// })

// window.onload = function atualizar(){

//     read();

// }

// descricao.onsubmit = atualizar()

// function create() {
//     let infograv = new Array();
//     infograv = JSON.parse(localStorage.getItem("info")) ? JSON.parse(localStorage.getItem("info")) : []
//     infograv.push({
//         "descricao": descricao.value,
//         "detalhamento": detalhamento.value
//     })

//     localStorage.setItem("info", JSON.stringify(infograv));
//     read();
// }


// function read(){
//     document.getElementById("tbody").innerHTML = "";
//     let infograv = new Array();
//     infograv = JSON.parse(localStorage.getItem("info")) ? JSON.parse(localStorage.getItem("info")) : []
//     if(infograv){
//         for(let i = 0; i < infograv.length; i++){
//             let addTr = document.createElement('tr');
//             addTr.innerHTML = `<td> # </td><td> ${infograv[i].descricao} </td><td> ${infograv[i].detalhamento} </td> 
//             <td class="col-1">
//             <div class="d-flex d-md-none flex-column justify-between align-items-center">
//                 <button class="w-50 btn rounded-5 bg-success rounded"></button>
//                 <button class="w-50 btn rounded-5 bg-danger rounded"></button>
//             </div>
//             <div class="d-none d-md-flex">
//                 <button class="btn btn-success">Editar</button>
//                 <button class="btn btn-danger ms-3" onclick = "deletar()">Excluir</button>
//             </div>
//             </td>
//             `;
//             document.getElementById("tbody").appendChild(addTr);
//         }
//     }
// }

// function deletar(){
//     const infos = JSON.parse(localStorage.getItem("info"))
//     console.log(infos)
//     atualizar()
// }


