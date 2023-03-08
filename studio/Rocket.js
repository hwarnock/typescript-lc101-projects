"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i in items) {
            sum += items[i].massKg;
        }
        ;
        return sum;
    };
    ;
    Rocket.prototype.currentMassKg = function () {
        var mass1 = this.sumMass(this.cargoItems);
        var mass2 = this.sumMass(this.astronauts);
        return mass1 + mass2;
    };
    ;
    Rocket.prototype.canAdd = function (item) {
        var load = false;
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            load = true;
        }
        return load;
    };
    ;
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
