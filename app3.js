let cola = []
const capacidadMaxima = 7

function agregarCliente() {
    if (cola.length < capacidadMaxima) {
        let cliente = prompt("Ingresa el nombre del cliente para agregar a la cola:")
        if (cliente) {
            cola.push(cliente)
            alert(`${cliente} ha sido agregado a la cola.`)
        }
    } else {
        alert("La cola está llena. No se pueden agregar más clientes.")
    }
}
function atenderCliente() {
    if (cola.length > 0) {
        let clienteAtendido = cola.shift()
        alert(`${clienteAtendido} está siendo atendido.`)
    } else {
        alert("La cola está vacía, no hay clientes por atender.")
    }
}
function mostrarCola() {
    if (cola.length > 0) {
        alert(`Clientes en la cola: ${cola.join(", ")}`)
    } else {
        alert("La cola está vacía.")
    }
}

function menuSupermercado() {
    let opcion
    do {
        opcion = prompt("Opciones:\n1. Agregar cliente\n2. Atender cliente\n3. Mostrar cola\n4. Salir\nElige una opción:")
        switch (opcion) {
            case "1":
                agregarCliente()
                break
            case "2":
                atenderCliente()
                break
            case "3":
                mostrarCola()
                break
            case "4":
                alert("Gracias por usar el sistema de cola. ¡Hasta luego!")
                break
            default:
                alert("Opción no válida. Por favor, intenta de nuevo.")
        }
    } while (opcion !== "4")
}

menuSupermercado()
