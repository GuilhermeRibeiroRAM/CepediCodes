// Rest Operator

// function convidados(...nomes){
//     console.log("Sejam Bem Vindos(as)")
//     console.log(nomes)
// }

// convidados("Isabel", "Mario", "Lucas");

function sortearNumeros(...numeros){
    console.log("Possíveis números a serem gerados: " + numeros);

    const numeroGerado = Math.floor( Math.random() * numeros.length);
    console.log("O número gerado foi: " + numeros[numeroGerado])
}

sortearNumeros(1,32,984,-8,1.2);