

interface Xmen{
  nombre:string,
  poder:string
}


function enviarMision( xmen:Xmen ){
   console.log('Enviando a: ' + xmen.nombre );
}
function enviarCuartel( xmen:Xmen ){
   console.log('Enviando a cuartel: ' + xmen.nombre );
}

let wolverine:Xmen = {
  nombre: 'Logan',
  poder: 'regeneración'
};

enviarMision(wolverine);
