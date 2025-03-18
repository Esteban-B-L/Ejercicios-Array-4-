const colaClientes = []

let añadirCliente = () => {
    let cliente = prompt("Nombre del cliente:")
    colaClientes.push(cliente)
    if (colaClientes.length > 7) {
        colaClientes.pop()
        alert("Cola llena")
    } else if (cliente === "") {
        alert("Nombre no válido")
        colaClientes.pop()
    } else {
        alert(`Cliente añadido: ${cliente}`)
    }
}

const mostrarCola = () => {
    let clientes = "Clientes en cola:\n"
    for (let i = 0; i < colaClientes.length; i++) {
        clientes += `${i + 1}. ${colaClientes[i]}\n`
    }
    alert(clientes)
}

while (true) {
    let opcion = prompt("Escoja una opción:\n1. Adicionar cliente\n2. Atender cliente\n3. Ver cola\n4. Salir")
    if (opcion === "4") {
        alert("Saliendo...")
        break
    }
    switch (opcion) {
        case "1":
            añadirCliente()
            break
        case "2":
            if (colaClientes.length === 0) {
                alert("No hay clientes en la cola.")
            } else {
                let clienteAtendido = colaClientes.shift()
                alert(`Cliente atendido: ${clienteAtendido}`)
            }
            break
        case "3":
            mostrarCola()
            break
        default:
            alert("Opción inválida.")
    }
}
