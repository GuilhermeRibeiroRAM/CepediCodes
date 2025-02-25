// Type Array


let numeros:number[]; // Maneira 1 um declaração de uma array tipada
                      // Maneira 2: let numeros: (number | string)[]; 
                      // Maneira 3: let numeros: Array<number>; 
                      // Adicionando o Piper: let numeros: Array<number | string>; 

numeros = [1,10,2.5,570];
console.log(numeros);

let nomes:string[];

nomes = ["Guilherme", "Pedro", "Maria"];
console.log(nomes);

let bool:boolean[];

bool = [true, false];
console.log(bool);

let anyThing = [];

anyThing = ["Teste", 100, false, "", null, undefined];
console.log(anyThing);