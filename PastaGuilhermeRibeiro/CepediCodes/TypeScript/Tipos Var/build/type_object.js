"use strict";
// Type Object
let user = {
    nome: "Pedro Alves",
    email: "pedroalves@gmail.com",
    idade: 15,
    status: false
};
let user2 = {
    nome: "Guilherme Ribeiro",
    email: "guilhermeribeiro@gmail.com",
    idade: 17,
    status: true
};
user = user2;
console.log(user);
