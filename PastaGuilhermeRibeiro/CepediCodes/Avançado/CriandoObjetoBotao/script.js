let usuario ={ 
    nome: "",
    sobrenome: "",
    idade: "" 
}

let info = document.getElementById("info");


function enviarNome(){
    usuario.nome = prompt("Insira seu nome");
    info.innerHTML = `Nome : ${nome}`;
}

function enviarSobrenome(){
    usuario.sobrenome = prompt("Insira seu sobrenome");
    info.innerHTML = `Sobrenome : ${sobrenome}`;
}

function enviarIdade(){
    usuario.idade = prompt("Insira sua idade");
    info.innerHTML = `Idade : ${idade}`;
}

console.log(usuario)