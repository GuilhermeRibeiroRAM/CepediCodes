// URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");

let posts = [];

function nutriApp() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts") // A tag fetch irá consumir a API na internet, e garante que pode dar certo ou errado.
    .then((response) => response.json())
    .then((json) => {
        posts = json;
        console.log(posts);

        posts.map((item) =>{
            let liElement = document.createElement("li");
            let tittleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("a");

            let tittleText = document.createTextNode(item.titulo);
            tittleElement.appendChild(tittleText);
            liElement.appendChild(tittleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionText);
            liElement.appendChild(descriptionElement);

            listElement.appendChild(liElement);
        })
    })
    .catch(() => {
        console.log("Deu algum erro");
    })
}

nutriApp();