// Funções Anônimas


/*

    () => {}

    1 - Os parênteses é onde a função recebe seus argumentos (assim como na funções tradicionais)
    2 - A "seta" é responsável pelo nome "arrow"
    3 - As chaves representa o bloco de código no corpo da função

*/

// Função Comum

function somar(a, b) {

    let total = a + b;
    return console.log(total);

}

// somar(10,30);

console.log("======================");

// Função Anônima

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;
    console.log(total);
}

//subtrair(60,30);

let numeros = [1, "Teste", 3, 4, 100];

numeros.map((item) => {

    console.log(item);

})