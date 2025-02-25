"use strict";
// Type Enum
// Serve para enumerar tipos de dados.
// enum DesignerColors {
//     white = "#FFFFFF", 
//     black = "#000000"
// }
// console.log(DesignerColors.white);
var NomesPessoas;
(function (NomesPessoas) {
    NomesPessoas[NomesPessoas["nome1"] = 0] = "nome1";
    NomesPessoas[NomesPessoas["nome2"] = 1] = "nome2";
    NomesPessoas[NomesPessoas["nome3"] = 2] = "nome3";
    NomesPessoas["nome4"] = "Guilherme";
})(NomesPessoas || (NomesPessoas = {}));
console.log(NomesPessoas);
