function multiplicar(num1, num2) {
    let multiplica = 0;

    if(num1 == 0 || num2 == 0) {
        return 0;
    }

    for(let i = 0; i < num1; i++) {
        multiplica += num2;
    }

    return multiplica;
}

console.log(multiplicar(3, 5));
console.log(multiplicar(4, 8));
console.log(multiplicar(2, 7));
console.log(multiplicar(1, 0));
