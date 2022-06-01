const numbers: (number | [number, number])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

const text: (string | [string, string])[] = ['aaa', 'bbb', ['ccc', 'ddd'], 'eee', ['fff', 'ggg'], 'hhh', 'iii'];

function flatten<Type>(array: (Type | [Type, Type])[]): Type[] {
    const flattened: Type[] = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            element; // any[]
            flattened.push(...element);
        } else {
            element; // any
            flattened.push(element);
        }
    }

    return flattened;
}

const flattenedNumbers: number[] = flatten<number>(numbers);

console.log('[Ejercicio 4.3]', numbers);
console.log('[Ejercicio 4.3]', flattenedNumbers);

const flattenedText: string[] = flatten<string>(text);

console.log('[Ejercicio 4.3]', text);
console.log('[Ejercicio 4.3]', flattenedText);

/*
1 Añadir anotaciones de tipo (‘any‘ excluido)
2 Inspeccione el tipo de ‘element‘ en diferentes ramas de código
3 Bonificación: convertir ‘flatten‘ en una función genérica
*/