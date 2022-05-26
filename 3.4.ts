function greet(greeting) {
    return greeting.toUpperCase();
}

const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);

/*
1 Añadir tipos explı́citos a los parámetros y tipo de retorno
2 Añadir un saludo predeterminado: ”hola”
*/