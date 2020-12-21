
/** USUARIO **/
const usuario = {
  nombre: "David",
  edad: 30,
  deuda: 0
}

/* variables*/
let pedido = []
let costoPedido = 0
let ventasDia = 0

/** MOSTRAR PRODUCTOS **/
const mostrarMenu = () => {

  console.log(`CÓDIGO  - NOMBRE PRODUCTO - PRECIO`);
  // productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`) )

  for (let producto of productos) {
    console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
  }
}

/** PEDIR PRODUCTO **/
const pedirProducto = cod => {
  if (!cod || typeof cod === "boolean" ) return "Ingrese un código válido" /*Verifica si codigo en blanco*/

  // Si encuentra el código, devuelve producto
  const productoEncontrado = productos.find(producto => producto.codigo === cod )
  if (!productoEncontrado) return "El producto no existe" //Si undefined(false) return texto.
  
  // agregamos producto al pedido del usuario
  pedido.push(productoEncontrado)
  console.log(`Se ha agregado ${productoEncontrado.nombre} a su pedido. \nDescripción: `);
  return mostrarPedido() //retornamos los productos en pedido
}


/** MOSTRAR PEDIDO **/
const mostrarPedido = () => pedido


/** CALCULANDO EL COSTO DEL PEDIDO **/
const calcularCosto = () =>{
  let costo = 0
  for (producto of pedido){
    costo+= producto.costo 
  }
  costoPedido = costo

  return `Su cuenta actual es de $${costoPedido}.`
}

/** PEDIR CUENTA AL MESERO**/
const pedirCuenta = () => {
  calcularCosto()
  
  // se agrega el costo del pedido a la deuda del usuario
  usuario.deuda = costoPedido

  // Reinicializando variables
  pedido = []
  costoPedido = 0

  return `${usuario.nombre}, debes pagar $${usuario.deuda}`
}


/** PAGAR PEDIDO **/

//verifica si usuario tiene deuda
const debeAlgo = () => usuario.deuda > 0

//paga pedido
const pagarCuenta = montoEntregado =>{
  if (!debeAlgo) return "No tiene una factura adeudada. Debe hacer un pedido primero."
    switch (true){
      case (montoEntregado < usuario.deuda):
        console.log("No te alcanza para pagar tu factura.");
        break;

      case (montoEntregado === usuario.deuda):
        console.log(`Tu pedido ha sido pagado satisfactoriamente.`);
        ventasDia += usuario.deuda
        usuario.deuda = 0
        
        break;

      case (montoEntregado > usuario.deuda):
        console.log(`Tu pedido ha sido pagado y tu cambio es de $${montoEntregado - usuario.deuda}`);
        ventasDia += usuario.deuda
        usuario.deuda = 0
        break;
      default:
        console.log(`Algo salió mal.`);
    }
}


/** VENTAS DEL DIA **/
const muestraVentasDia = () => console.log(`Las ventas del día han sido de $${ventasDia}`);