"use strict";
// Type Tupla
// Não possui no JavaScript, e sim só no TypeScript
let aluno; // O tipo Tupla faz com que a Array receba parâmetros, e esses tem que ser respeitados em sua dentro os "[]"
aluno = ["Aluno1", 123456789]; // Neste caso, o array só terá esses dois elementos, pois nos parâmetros do array só há dois tipos declarados.
// Caso seja adicionado um "Aluno2", o código certamente dará erro.
let aluno2; // Com a criação de uma nova array com novos parâmetros, o código irá rodar corretamente.
aluno2 = ["Aluno2", 987654321];
let aluno3;
aluno3 = ["Aluno4", "Guilherme", 182736459, true];
console.log(aluno);
console.log(aluno2);
console.log(aluno3);
