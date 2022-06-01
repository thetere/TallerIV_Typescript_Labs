// Tengo que comentar esto para poder hacer el 4.4 porque sino toma que declare las mismas clases y tipos en dos archivos del mismo proyecto
/*
interface EggLayer {
    layEggs(): void;
}

interface Flyer {
    fly(height: number): void;
}

interface Swimmer {
    swim(depth: number): void;
}

// agregar alias de tipo(s) aqui
type BirdLike = EggLayer & Flyer;

type FishLike = EggLayer & Swimmer;

class Bird implements BirdLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }

    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
};

class Fish implements FishLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }

    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal(): Bird | Fish {
    const animals: (Bird | Fish)[] = [
        new Bird('frailecillo'),
        new Bird('gaviota'),
        new Fish('rubio'),
        new Fish('dragón de mar foliado'),
    ];

    return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal: Bird | Fish = getRandomAnimal()): string {
    if (animal instanceof Fish)
        animal.swim(10) // se llama solo si es un pez
    else if (animal instanceof Bird)
        animal.fly(10); // se llama solo si es un pajaro

    return animal.species;
}

console.log('[Ejercicio 4.4]',
`Tenemos un ${interrogateAnimal()} en nuestras manos!`);
*/
/*
1 Restrinja el tipo de ‘valor‘ a ‘string o number‘
2 Solucione cualquier error resultante
...??????*/