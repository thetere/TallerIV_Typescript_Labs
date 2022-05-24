/*Ejercicio 1.6
Queremos representar un elemento de inventario como una estructura donde la primera en-
trada es el nombre del artı́culo y la segunda es la cantidad.
Dado el siguiente codigo:
1 Añadir anotaciones de tipo (lo más explı́citas posible)
2 Solucionar errores (si corresponde)*/

const elementoInventario = ['tuerca', 11];

// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario;

const mensaje = agregarInventario(nombre, cantidad);

console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {
    return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}