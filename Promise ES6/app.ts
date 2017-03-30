let prom1 = new Promise ( function ( resolve, reject ){
  console.log('Promesa ejecutada')
  setTimeout( () => {
    resolve()
  }, 1500)
})


prom1.then(function(){
  console.log('Ejecutado OK!');
},
function(){
  console.log('Error');
})
