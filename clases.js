class Persona{
    static cantidadPersonas = 0 // contador de integrantes
    static administrador = "Macimiliano Holsbach"
    constructor(nombre,apellido,edad,ciudad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.ciudad = ciudad 
        Persona.agregar()
        this.ordenRegistro = Persona.cantidadPersonas
    }
    imprimir(){
        console.log(this)
    }
    miNombre = () => console.log(this.nombre,this.apellido)
    static agregar(){
        Persona.cantidadPersonas++
    }
    static getAdmin = () => console.log(Persona.administrador)
}


const alumno = new Persona("Maximiliano","HOLS",33,"Barranqueras")

const profesor = new Persona("Ignacio","Borraz",33,"Rosario")

const tutor = new Persona("Gabril","Rodriguez",23,"Cordoba")

const bedel = new Persona("Bot01","Coder",10,"BS AS")



alumno.imprimir()
alumno.miNombre()
console.log(alumno.edad)

console.log(Persona.cantidadPersonas)


