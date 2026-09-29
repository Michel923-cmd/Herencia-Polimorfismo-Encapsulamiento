class Vehiculo {
    #kilometraje;

    constructor(marca, modelo, kilometraje) {
        this.marca = marca;
        this.modelo = modelo;
        this.#kilometraje = kilometraje;
    }

    consultarKilometraje() {
        return this.#kilometraje;
    }

    aumentarKilometraje(kilometros) {
        if (kilometros > 0) {
            this.#kilometraje += kilometros;
        }
    }

    moverse() {
        console.log("El vehículo se está moviendo.");
    }
}


class Carro extends Vehiculo {

    constructor(marca, modelo, kilometraje, puertas) {
        super(marca, modelo, kilometraje);
        this.puertas = puertas;
    }

    moverse() {
        console.log("El carro está avanzando por la carretera.");
    }
}


class Motocicleta extends Vehiculo {

    constructor(marca, modelo, kilometraje, cilindrada) {
        super(marca, modelo, kilometraje);
        this.cilindrada = cilindrada;
    }

    moverse() {
        console.log("La motocicleta está avanzando por la carretera.");
    }
}

// Crear objetos

let carro = new Carro("Toyota", 2022, 15000, 4);

let moto = new Motocicleta("Yamaha", 2023, 8000, 150);

// Mostrar información

console.log("CARRO");
console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Puertas:", carro.puertas);

carro.moverse();

console.log("Kilometraje inicial:", carro.consultarKilometraje());

// Modificar el kilometraje mediante un método

carro.aumentarKilometraje(500);

console.log("Kilometraje después:", carro.consultarKilometraje());

console.log("MOTOCICLETA");
console.log("Marca:", moto.marca);
console.log("Modelo:", moto.modelo);
console.log("Cilindrada:", moto.cilindrada);

moto.moverse();

console.log("Kilometraje:", moto.consultarKilometraje());
