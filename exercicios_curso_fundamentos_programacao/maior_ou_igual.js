function maiorOuIgual(num1, num2) {
    
    if(num1 > num2) {
        return `${num1} eh maior que ${num2}`;
    }else if(num1 < num2) {
        return `${num1} eh menor que ${num2}`;
    }
    
    return `Os numeros sao iguais -> ${num1}`;
}

console.log(maiorOuIgual(0, 2));
console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(5, 1))
