"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Xmen = (function () {
    function Xmen(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    Xmen.prototype.imprimir = function () {
        console.log(this.nombre + " - " + this.plan);
    };
    return Xmen;
}());
exports.Xmen = Xmen;
