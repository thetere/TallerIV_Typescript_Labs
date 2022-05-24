/*
Ejercicio 2.1
Dado el siguiente codigo:
*/
interface CartItem {
    id: number;
    titulo: string;
    idVariante?: number
}

function agregarAlCarro(item: CartItem ) {
    console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras con id "${item.id}".`);
}

agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero' });

/*
1 Crea una interfaz ‘CartItem‘ y reemplaza el tipo de parametros con ella
2 Hacer idVariante opcional
*/