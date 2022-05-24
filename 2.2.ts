interface PersonaInterfaz {
    getNombre(): string;
    getEdad(): number;

}

class Persona implements PersonaInterfaz {
    constructor(private nombre: string, private edad: number) { }  

    getNombre(): string {
        return this.nombre;
    }

    getEdad(): number {
        return this.edad;
    }
    
}

const juan = new Persona('Juan', 31);

console.log('[Ejercicio 2.2]', `${juan.getNombre()} tiene ${juan.getEdad()} anios.`);

/*
    1 Cree e implemente una interfaz en ‘Persona‘ para asegurarse de que siempre tenga acceso
    a las propiedades miembros ‘nombre‘ y ‘edad‘
*/