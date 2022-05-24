/*Ejercicio 1.4
Dado el siguiente codigo:
1 Añadir anotaciones de tipo (lo más explı́citas posible)
2 Solucionar errores (si corresponde)*/

const entero :number = 6;
const decimal :number = 6.66;
const hexadecimal :number = 0xf00d;
const binario :number = 0b1010011010;
const octal :number = 0o744;
const ceroNegativo :number = -0;
const enRealiadadNumero :number = NaN;
const mayorNumero :number = Number.MAX_VALUE;
const elNumeroMasGrande :number = Infinity;

const miembros :number [] = [
    entero,
    decimal,
    hexadecimal,
    binario,
    octal,
    ceroNegativo,
    enRealiadadNumero,
    mayorNumero,
    elNumeroMasGrande
];

miembros[0] = +'12345'; //este "+", operador unario, me convierte el string a number me convierte!

console.log('[Ejercicio 1.4]', miembros);