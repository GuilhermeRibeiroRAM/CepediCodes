// Type_Assertions

// Afirma algum tipo

let statusAtual: unknown = 1;
let mudarStatus: number = 0;

mudarStatus = statusAtual as number; // Afirmando que a variável statusAtual é um número.
console.log(mudarStatus);

// Outra maneira de alterar o tipo:

console.log("==============");

mudarStatus = <number>statusAtual;
console.log(mudarStatus);

console.log("==============");

let informacaoUsuario: unknown = "Estagiário";

let buscarInfUser: string = informacaoUsuario as string;
console.log(buscarInfUser);