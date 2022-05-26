/*
Actualmente, nuestra función ‘pushToCollection‘ acepta *cualquier* elemento y lo agrega, (in-
discriminadamente) a *cualquier* tipo de matriz.
Un par de problemas con esto:
1 El tipo ‘any‘ hace que perdamos toda la información de tipos en nuestros parámetros.
2 Esta holgura se ha vuelto en nuestra contra durante el tiempo de ejecución (mira a ‘incre-
mentByTwo‘)
Dado el siguiente codigo:
*/

const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection<T>(item: T, collection: T[]) {
    collection.push(item);
    return collection;
}

// Anadir algunas cosas a las colecciones
pushToCollection<string>(`${false}`, stringCollection);
pushToCollection<string>('hi', stringCollection);

pushToCollection<string>([].toString(), stringCollection);

pushToCollection<number>(1, numberCollection);
pushToCollection<number>(2, numberCollection);
pushToCollection<number>(3, numberCollection);

const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);

//probando otros tipos

const tupleCollection: [number, string][] = [];
pushToCollection<[number, string]>([1, 'aaaa'], tupleCollection);
pushToCollection<[number, string]>([2, 'bbbb'], tupleCollection);
pushToCollection<[number, string]>([3, 'cccc'], tupleCollection);
pushToCollection<[number, string]>([4, 'dddd'], tupleCollection);
pushToCollection<[number, string]>([5, 'eeee'], tupleCollection);

console.log(`
numberCollection: ${numberCollection}
stringCollection: ${stringCollection}
tupleCollection: ${tupleCollection}
`);


/*
1 Implementar ‘pushToCollection‘ como una función genérica. (Esto deberı́a crear errores
en tiempo de compilación en lugares donde se agregan valores incorrectos a una colección
determinada. Fije estos valores a los tipos correctos)
2 Una vez hecho genérico, ‘pushToCollection‘ debe ser suficientemente *generic* para o-
perar en artı́culos y colecciones de cualquier tipo mientras se continúa aplicando que coni-
cidan
*/