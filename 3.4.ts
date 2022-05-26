function greet(greeting?: string): string {
    const saludo: string = "hola";
    /* if (greeting)
        return greeting.toUpperCase();
    else
        return saludo.toUpperCase(); */ 
    // ^ esta es la clasica, pero en typescript podemos hacerlo rarito,con el ternary operator asi:
    return (greeting? greeting.toUpperCase() : saludo.toUpperCase());
}

const defaultGreeting: string = greet();
const portugueseGreeting: string = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);

/*
1 Añadir tipos explı́citos a los parámetros y tipo de retorno
2 Añadir un saludo predeterminado: ”hola”
*/