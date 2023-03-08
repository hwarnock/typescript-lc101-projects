import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Payload [] = [];
    astronauts: Payload [] = [];
    
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        
    }

    sumMass(items: Payload[]): number {
        let sum: number = 0
        for (let i in items){
            sum += items[i].massKg     
        };
        return sum;
    };

    currentMassKg(): number {
        let mass1: number = this.sumMass(this.cargoItems)
        let mass2: number = this.sumMass(this.astronauts)
        return mass1 + mass2;
    };

    canAdd(item: Payload): boolean {
        let load: boolean = false
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            load = true
        }
        return load
    };

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo)
            return true
        }
        return false
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut)
            return true
        }
        return false
    }

}