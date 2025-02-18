let btn;
let img;

function mudar() {
  btn = prompt("Insira um nome: ");

  if (btn == "Enzo" || btn == "enzo") {
    let btn = document.getElementById("btn");
    let img = document.createElement("img")
    img.src = "ftenzo.jpg"
    document.body.appendChild(img)
  } else {
    document.body.style.backgroundColor = "green";
  }
}
