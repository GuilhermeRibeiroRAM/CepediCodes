let peso;
let altura;
let imc;
let resultado;



function calcular(event){
    event.preventDefault(); 

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura^2);


    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `Resultado: ${imc}. Você está muito abaixo do peso! </br>`;
    }
    else if(imc > 17 &&  imc <= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `Resultado: ${imc}. Você está abaixo do peso! </br>`;
    }
    else if(imc > 18.5 &&  imc <= 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `Resultado: ${imc}. Você está no peso ideal! </br>`;
    }
    else if(imc > 25 &&  imc <= 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `Resultado: ${imc}. Você está acima do peso! </br>`;
    }
    else if(imc > 30){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `Resultado: ${imc}. Você está muito acima do peso! </br>`;
    }

}
