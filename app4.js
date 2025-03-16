let productos = ["Agua", "Galletas", "Chocolatina", "Papas", "Jugo"]
let cantidades = [3, 5, 2, 4, 1]

function mostrarInventario() {
    let inventario = "Inventario actual:\n"
    for (let i = 0; i < productos.length; i++) {
        inventario += `${i + 1}. ${productos[i]} - Cantidad: ${cantidades[i]}\n`
    }
    alert(inventario)
}
function comprarProducto() {
    let codigo = parseInt(prompt("Introduce el código numérico del producto que deseas comprar (1-5):")) - 1

    if (codigo >= 0 && codigo < productos.length) {
        if (cantidades[codigo] > 0) {
            alert(`Has seleccionado ${productos[codigo]}. Procesando tu pago de $1...`)
            cantidades[codigo]--
            alert(`¡Gracias por tu compra! Has recibido ${productos[codigo]}.`)
        } else {
            alert(`Lo sentimos, ${productos[codigo]} está agotado.`)
            sugerirProducto()
        }
    } else {
        alert("Código de producto no válido. Por favor, intenta de nuevo.")
    }
}
function sugerirProducto() {
    for (let i = 0; i < cantidades.length; i++) {
        if (cantidades[i] > 0) {
            alert(`Te sugerimos comprar ${productos[i]}.`)
            return
        }
    }
    alert("Lo sentimos, todos los productos están agotados.")
}
function menuMaquinaExpendedora() {
    let opcion
    do {
        opcion = prompt("Opciones:\n1. Mostrar inventario\n2. Comprar producto\n3. Salir\nElige una opción:")
        switch (opcion) {
            case "1":
                mostrarInventario()
                break
            case "2":
                comprarProducto()
                break
            case "3":
                alert("Gracias por usar la máquina expendedora. ¡Hasta pronto!")
                break
            default:
                alert("Opción no válida. Por favor, intenta de nuevo.")
        }
    } while (opcion !== "3")
}
menuMaquinaExpendedora()
