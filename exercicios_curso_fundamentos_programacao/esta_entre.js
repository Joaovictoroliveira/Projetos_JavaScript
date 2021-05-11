function estaEntre(numero, minimo, maximo, inclusivo=false) {
    if(inclusivo == true) {
        if(numero >= minimo && numero <= maximo) {
            return true;
        }
    }

    if(numero > minimo && numero < maximo) {
        return true;
    }

    return false;
}

console.log(estaEntre(10, 50, 100));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 3, 150, true));
console.log(estaEntre(3, 3, 150));
