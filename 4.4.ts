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

type Animal = Bird | Fish;

class Bird implements BirdLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }

    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
}

class Fish implements FishLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }

    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal(): Animal {
    const animals: Animal[] = [
        new Bird('frailecillo'),
        new Bird('gaviota'),
        new Fish('rubio'),
        new Fish('dragón de mar foliado'),
    ];

    return animals[Math.floor(Math.random() * animals.length)];
}


function interrogateAnimal(animal: Animal = getRandomAnimal()): string {
    if (animal instanceof Fish)
        animal.swim(10) // se llama solo si es un pez
    else if (animal instanceof Bird)
        animal.fly(10); // se llama solo si es un pajaro

    return animal.species;
}

console.log('[Ejercicio 4.4]',
`Tenemos un ${interrogateAnimal()} en nuestras manos!`);

/*
1 Las aves y los peces ponen huevos. Sólo los pájaros vuelan. Sólo los peces nadan. Defina dos tipos nuevos: ‘BirdLike‘ y ‘FishLike‘ basados en estos rasgos
2 Crea un alias de tipo para ‘Bird OR Fish‘ llamado ‘Animal‘
3 Use ‘instanceof‘ en ‘interrogateAnimal‘ para permitir a los peces nadar y a los pájaros volar
4 Agregue cualquier anotación de tipo faltante, siendo lo más explı́cito posible
*/