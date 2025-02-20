// // Find

// let listagem = [5,3,"Guilherme",1,"João"];

// let busca = listagem.find((item)=>{

//    if(item === "Guilherme"){
//       return console.log(`Item "${item}" encontrado com sucesso!`);
//    }

// })


// Filter

let palavras = ["Bola", "Carro", "Pessoa", "Pessoa"]; 

let resultado = palavras.filter((item)=>{

   return item.length > 4;
   console.log(resultado);

})