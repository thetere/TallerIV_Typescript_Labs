function add(x, y) {
    return x + y;
}

function sumArray(numbers) {
    return numbers.reduce(add, 0);
}

const someSum = sumArray(['3', '6', '9']);

console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);
/*
    1 Agregue tipos explı́citos a los parámetros y el tipo de retorno
    2 Solucione cualquier error resultante de tipos inválidos
 */