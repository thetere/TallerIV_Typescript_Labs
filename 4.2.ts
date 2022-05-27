function padLeft(value: string, padding: number | string): string {
    //return ((typeof padding === 'number')? `${Array(padding + 1).join(' ')}${value}` : padding + value);
    //esto de arriba funciona pero queda horrible para mi gusto, bastante ilegible, y no chequea q sea string entonces...
    if (typeof padding === 'number')
        return `${Array(padding + 1).join(' ')}${value}`
    else if (typeof padding === 'string')
        return padding + value
}

console.log('[Ejercicio 4.2]', `
    ${padLeft('a', 0)}
    ${padLeft('a', '')}
    ${padLeft('a', '')}
    ${padLeft('a', 10)}
    ${padLeft('a', '   ')}
`);

/*
1 Use un protector de tipo para completar el cuerpo de la función ‘padLeft‘
*/