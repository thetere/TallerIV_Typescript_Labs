/* 
Para una palabra dada, calculamos su puntuación en Scrabble® 
*/

function computeScore(word: string): number {
    const letters: string[] = word.toUpperCase().split('');
    return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
}

function getPointsFor(letter: string): number {
    const lettersAndPoints: [string, number][] = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];

    return lettersAndPoints.reduce((computedScore: number, pointsTuple: [string, number], i=0, arr) => {
        /*debug*/console.log(`iteracion nro ${i}`);
        const [letters, score] = pointsTuple;
        /*debug*/console.log(`recorremos la tupla ${pointsTuple} buscando ${letter}`);
        if (letters.split('').find((ll) => ll === letter)) {
            /*debug*/console.log(`${letter} en ${pointsTuple}`);
            console.log(`el array queda asi spliceado ${arr.splice(0)}`);
            /* al hacerle splice a "arr", ultimo argumento, el array sobre el que estamos trabajando, 
            lo estamos modificando y al hacerlo se "corta" el reduce y no itera al pedo, peeero 
            modificar los parametros de una funcion no son buenas practicas
            fuente: https://stackoverflow.com/questions/36144406/how-to-early-break-reduce-method  */
            return computedScore += score;
        }        
        /*debug*/console.log(`${letter} no en ${pointsTuple}`);
        i++;
        return computedScore;
    }, 0);
}

console.log('[Ejercicio 3.3]', `abc vale ${computeScore('abc')} puntos.`);

/*
1 Añadir anotaciones de tipo siempre que sea posible
*/