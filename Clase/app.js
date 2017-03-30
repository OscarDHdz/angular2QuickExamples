var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger('Antman', 'Capi', 'Jason');
console.log(antman);
