btn1.innerHTML = "Add Filme";
btn2.innerHTML = "Procurar Filme";
let tagp = document.getElementById("tagp");

// COM ARRAYS

// let listaFilmes = [];

// function addFilme() {
//     let filme = prompt("Insira o nome de um filme para ser adicionado");
//     listaFilmes.push(filme);

// }

// function procurarFilme() {
//     let check = prompt("Insira o nome do filme que deseja procurar na lista");

//     if (listaFilmes.includes(check)) {
//         tagp.innerHTML = ("Filme encontrado!");
//     }
//     else{
//         tagp.innerHTML = ("Filme não encontrado!");
//     }
// }

// COM OBJETOS

let listaFilme = [];

function addFilme() {
    let filme = {
        nome: "",
        ano: "",
        diretor: "",
    };

    filme.nome = prompt("Insira o nome de um filme para ser adicionado");
    filme.ano = prompt("Insira o ano desse filme");
    filme.diretor = prompt("Insira o nome do diretor desse filme");
    listaFilme.push(filme);
}

function procurarFilme() {
    let encontrado = false;
    let check;
    check = prompt("Insira um filme para procurar na lista");

    for (let i = 0; i < listaFilme.length; i++) {
        if (listaFilme[i].nome.includes(check)) {
            encontrado = true; 
        }
    }
    if (encontrado) {
        tagp.innerHTML = "Filme encontrado!";
    } else {
        tagp.innerHTML = "Filme não encontrado!";
    }
}