let btn;
let img;

function mudar() {
  btn = prompt("Insira um nome: ");

  if (btn == "Enzo" || btn == "enzo") {
    let btn = document.getElementById("btn");
    let img = document.getElementById("img");

    btn.style.backgroundColor = "pink";
    img.style.display = "flex";
  } else {
    document.body.style.backgroundColor = "green";
  }
}
