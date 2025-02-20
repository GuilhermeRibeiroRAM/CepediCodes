// map = percorrer uma array

// let lista = ["Guilherme", "Gustavo", "Gabriel"];

// lista.map((item, index)=>{
//     console.log(`Passando: ${item} - está na posição ${index}`);
// })

// Reduce = reduz um array

 let numeros = [5,4,3,2,1];
 let total = numeros.reduce((acumulador, numero, indice, original)=>{
    console.log(`Total até o momento: ${acumulador}`);
    console.log(`Valor atual: ${numero}`);
    console.log(`Indice atual: ${indice}`);
    console.log(`Array original: ${original}`);
    console.log("=====================");

    return acumulador += numero;
 })

   console.log(`Total do Reduce: ${total}`);