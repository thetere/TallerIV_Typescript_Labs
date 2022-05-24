/*
Ejercicio 1.5
Dado el siguiente codigo:
1 Añadir anotaciones de tipo (lo más explı́citas posible)
2 Solucionar errores (si corresponde)
*/

const secuencia: number[] = Array.from(Array(10).keys());
const animales: string[] = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros: [number, string][]= [[1, 'uno'], [2, 'dos'], [3, 'tres']];
const todosMisArreglos: ((number|string)[]|[number, string][])[] = [secuencia, animales, cadenasYNumeros];

console.log('Ejercicio 1.5', todosMisArreglos);