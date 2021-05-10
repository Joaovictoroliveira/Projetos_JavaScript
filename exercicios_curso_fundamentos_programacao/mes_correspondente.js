function nomeDoMes(numero) {
    meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    for(let i = 1; i <= meses.length; i++) {
        if(numero == i) {
            return meses[i-1];
        }
    }

}

console.log(nomeDoMes(4));
