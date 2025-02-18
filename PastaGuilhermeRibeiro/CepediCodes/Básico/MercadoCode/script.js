function login() {
    let main = document.getElementById("main")
    let nome = prompt("Digite seu Nome")
    let tituloNome = document.getElementById("tituloNome")
    tituloNome.innerText = `Seja bem vindo ${nome}`


    let botaoPerfil = document.createElement("button")
    main.appendChild(botaoPerfil);
    botaoPerfil.innerText = "Entrar Perfil"
    botaoPerfil.onclick = entrarPerfil();

    function entrarPerfil() {
        let inputData = document.createElement("input");
        inputData.type = "date"
        main.appendChild(inputData)
    }
}
