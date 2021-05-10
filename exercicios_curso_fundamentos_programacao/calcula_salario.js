function calcularSalario(horas_trabalhadas, salario_hora) {
    salario_mes = horas_trabalhadas * salario_hora
    return `Salario igual a R$${salario_mes}`;    
}

console.log(calcularSalario(150, 40.5));
