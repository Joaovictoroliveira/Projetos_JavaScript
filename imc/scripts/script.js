const btn_imc = document.querySelector('.btn_imc');

function calculaIMC() {
    let nome = document.querySelector('#input_nome').value;
    validaCampo(nome, 'nome');

    let altura = document.querySelector('#input_altura').value;
    validaCampo(altura, 'altura');

    let peso = document.querySelector('#input_peso').value;
    validaCampo(peso, 'peso');

    let resposta = document.querySelector('.resp_imc');
    let imc = IMC(Number(peso), Number(altura));

    resposta.textContent = `${nome}, seu IMC é ${imc[0]} e você está ${imc[1]}.`;
}

function validaCampo(campo, nomeCampo) {
    if (campo == '') {
        alert(`O campo ${nomeCampo} não pode ser vazio`);
    }
}

function IMC(peso, altura) {
    let imc = (peso / (altura * altura)).toFixed(2);

    if (imc < 18.5) {
        return [imc, 'abaixo do peso'];
    } else if (imc < 25) {
        return [imc, 'com peso normal'];
    } else if (imc < 30) {
        return [imc, 'com sobrepeso'];
    } else if (imc < 40) {
        return [imc, 'com obesidade'];
    } else {
        return [imc, 'com obesidade grave'];
    }
}

btn_imc.addEventListener('click', calculaIMC);
