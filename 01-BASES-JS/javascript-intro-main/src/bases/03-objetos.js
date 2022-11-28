




const persona = {
    nombre : 'Tony',
    apellido: 'Stark',
    direccion :{
        ciudad: 'New York',
        zip: 54564,
        lat: 312.5646
    }
}

const persona2 = {...persona} //misma referencia en espacio memoria de persona por lo cual si cambio person2 se cambia en objeto persona tambien
persona2.nombre = 'Peter'
console.log(persona)
console.log(persona2)
// los dos son peter porque los objetos osn pasados en referencia

//{...objeto} rompe referencia y crea nuevo objeto con los atributos del objeto, operador spread