
//tag informando que o h2 no HTMl será referenciado com o seu id (area)
var area = document.getElementById('area');

//FUNÇÃO FEITA ESPECIALMENTE PARA A ÁREA DE ENTRADA
function entrar(){
    //Comando para implementar mensagem no prompt
    var nome = prompt("Digite seu nome");

    if(nome === '' || nome === null){
        //alert = imprimir aviso no prompt
        alert("Ops, algo deu errado!");

        //innerHTML = Exibir mensagem no HTML
        area.innerHTML = "Clique no botão acessar!";
    }
    else{
        area.innerHTML = "Bem vindo " + nome + "! "

        //Criação do elemento botaoSair, acessando o documento e criando um botão com a tag createElement("button")
        let botaoSair = document.createElement("button");
        //Implementando texto dentro do botão com a tag innerText "Sair da conta"
        botaoSair.innerText = "Sair da conta";
        //Outra maneira de usar a função onclick
        botaoSair.onclick = sair;
        //Adicionando mais um elemento, neste caso, o novo botão no id area onde está o h2 no HTMl
        area2.appendChild(botaoSair);

    }
}

function sair(){
    alert("Saindo...")
    area2.innerHTML = "Você saiu!";

}

    let botaoMedia = document.createElement("button");
    botaoMedia.innerText = "Visualizar Média";
    botaoMedia.onclick = mediaAluno;
    area3.appendChild(botaoMedia);

    let nota1;
    let nota2;

function mediaAluno(nota1, nota2){

    nota1 = parseInt(prompt("Digite sua primeira nota:"));
    nota2 = parseInt(prompt("Digite sua segunda nota:"));    

    let media;

    media = (nota1 + nota2) / 2;

    if(media >= 6){
        area.innerHTML = "Aluno Aprovado com média: " + media;
    }
    else{
        area.innerHTML = "Aluno Reprovado com média: " + media;
    }
}