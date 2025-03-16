let saldo = 0
const consultarSaldo = () => {
    let consultar = prompt("¿Desea consultar su saldo? (s/n)")
    if (consultar === "s") {
        alert(`Su saldo es de ${saldo}`)
    }}

const retirarDinero = () => {
    let retirar = prompt("¿Desea retirar dinero? (s/n)")
    if (retirar === "s") {
        let cantidad = parseInt(prompt("Introduce la cantidad a retirar:"))
        if (cantidad > saldo) {
            alert("No tienes suficiente saldo.")
        }else if (cantidad > 500) {
            alert("El monto máximo a retirar es de 500")
        }else {
            saldo -= cantidad
            alert(`Has retirado ${cantidad}. Tu saldo actual es de ${saldo}`)
        }
    }
}
const depositarDinero = () => {
    let depositar = prompt("¿Desea depositar dinero? (s/n)")
    if (depositar === "s") {
        let cantidad = parseInt(prompt("Introduce la cantidad a depositar:"))
        saldo += cantidad
        alert(`Has depositado ${cantidad}. Tu saldo actual es de ${saldo}`)
    }
}
while (true) {
    let opcion = prompt("1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir\nElige una opción:")
    if (opcion === "1") {
        consultarSaldo()
    } else if (opcion === "2") {
        retirarDinero()
    } else if (opcion === "3") {
        depositarDinero()
    } else if (opcion === "4") {
        alert("Saliendo...")
        break
    } else {
        alert("Opción no valida.")
    }
}