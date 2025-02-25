"use strict";
// Type Boolean
// Tudo que for diferente de zero, string vazia, undefined, será verdadeiro.
let userAtivo = true;
// let infUser = 10;
// userAtivo = Boolean(infUser); // A variável infUser era do tipo number, e depois passou a ser boolean(true), pois qualquer valor 
// diferente de 0 ou null é true! 
let infUser = ""; // Neste caso, dentro da variável infUser não tem nenhum conteúdo, ou seja, ela se torna false
userAtivo = Boolean(infUser);
console.log(userAtivo);
console.log(typeof userAtivo);
