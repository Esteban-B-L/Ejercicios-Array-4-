let nombreProducto = ["Papas", "Cocacola", "Chicles", "Chocolates", "Galletas"]
let cantidadProducto = [1, 3, 6, 8, 10]

const mostrarInventario = () => {
    let productos = "Productos\n"
    for (let i = 0; i < nombreProducto.length; i++) {
        productos += `${i + 1}. ${nombreProducto[i]}: ${cantidadProducto[i]}\n`
    }
    alert(productos)
}
const comprarProducto = () => {
    let producto = parseInt(prompt("Ingresa el número del producto que deseas comprar:"))
    if (producto < 1 || producto > 5) {
        alert("Producto no válido.")
    }else if(cantidadProducto[producto-1] == 0){
        
        alert(`Este producto esta agotado`)
        sugerirProducto()
    }else {
        cantidadProducto[producto - 1]--
        alert(`Se ha comprado ${nombreProducto[producto - 1]}.`)
    }
}
function sugerirProducto() {
    for (let i = 0; i < cantidadProducto.length; i++) {
        if (cantidadProducto[i] > 0) {
            alert(`Te sugerimos comprar ${nombreProducto[i]}.`)
            return
        }
    }
}
while (true) {
    let opcion = prompt("Elige una opción:\n1. Ver inventario\n2. Agregar producto\n3. Salir")
    if (opcion === "1") {
        mostrarInventario()
    } else if (opcion === "2") {
        comprarProducto()
    } else if (opcion === "3") {
        alert("Saliendo...")
        break
    } else {
        alert("Opción no válida.")
    }
}