/*let cuenta = 0

function contador(numero){
    cuenta = cuenta + numero
    console.log(cuenta)
}

contador(5)
contador(2)
contador(3)

//La funcion flecha se declara como constante siempre

const concatenar = (tercera,cuarta) => {
    let primera = "Hola"
    let segunda = "mundo"
    console.log(primera,segunda,tercera,cuarta)
}

concatenar("cruel","y despiadado")
*/

//Para transformar un array debo utilizar el metodo map

function corroborar(arreglo){
    const tiposdedato = arreglo.map(cadauno => ({valor: cadauno, tiposdedato: typeof cadauno}))
    console.log(tiposdedato)
    return tiposdedato
}

const result = corroborar([1,2,"hola",null,false])

corroborar([1,2,"hola",null,false])

//Las clases funcionan como moldes 


