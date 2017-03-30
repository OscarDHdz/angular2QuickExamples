
// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;

let PERSONAJE = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface Hero {
  nombre:string,
  artesMarciales:string[]
}
let batman:Hero = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"],
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}

let resultadoDoble2  = ( a:number, b:number ) => ( a + b ) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string , poder?:string, arma:string="arco" ){
  let mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
  console.log(mensaje)
};
getAvenger('Oscar', 'Rayos X', 'Espada');
getAvenger('Oscar');
getAvenger('Oscar', 'Rayox Y');

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
  base:number;
  altura:number;

  constructor( base:number, altura:number){
    this.base = base;
    this.altura = altura;
  }

  sacarArea(  ):number {
    console.log('Area: ', this.base * this.altura);
    return this.base * this.altura;
  }
}

let myRect = new Rectangulo(5,4);
myRect.sacarArea();