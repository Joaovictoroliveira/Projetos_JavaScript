function inverso(valor) {

    if(typeof(valor) == "boolean") {
        return !valor;
    }else if(typeof(valor) == "number") {
        if(valor > 0) {
            return valor * -1;
        }else if(valor < 0) {
            return Math.abs(valor);
        }
    }

    return `Booleano ou numero esperados, mas o parametro eh do tipo ${typeof(valor)}`;
}

console.log(inverso(true));
console.log(inverso("8"));
console.log(inverso(-2000));
console.log(inverso("programacao"))
