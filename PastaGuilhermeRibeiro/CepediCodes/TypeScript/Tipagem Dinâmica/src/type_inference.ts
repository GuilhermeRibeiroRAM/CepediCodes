// Tipagem Dinâmica
// Se o tipo não for definido no início, a variável será tipada automaticamente pelo TS

let varTeste = "varTeste";

let nomes:(number|string|boolean)[] = [
    10, 11, 100, varTeste, true
]

nomes.push("Gui");
nomes.push(2020.2);

console.log(nomes);