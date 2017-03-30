"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villano = (function () {
    function Villano(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    Villano.prototype.imprimir = function () {
        console.log(this.nombre + " - " + this.plan);
    };
    return Villano;
}());
exports.Villano = Villano;
