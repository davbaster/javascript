
/** MOSTRAR PRODUCTOS **/

const mostrarMenu = () => {

  console.log(`CÓDIGO  - NOMBRE PRODUCTO - PRECIO`);
  // productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`) )

  for (let producto of productos) {
    console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
  }
}