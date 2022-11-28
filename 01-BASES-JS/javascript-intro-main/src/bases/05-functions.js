

//FUNCION NORMAL
function saludar(xyz){
    // return 'Hola '+xyz
    return  `Hola ${xyz}`
}
// mas seguro para no pidar el nombre con alguna constante variable que se llame igual
const saludar2 = function(xyz){
    return  `Hola ${xyz}`
}

//funcion de flecha or landa function
const saludar3 = (xyz) => {
    return  `Hola ${xyz}`
}
// si solo retorno algo de una
// const saludar4 = (xyz) =>   `Hola ${nombre}`
const saludar4 = (nombre = 'Peter') =>   `Hola ${nombre}`

const nombre = 'Tony'

// const getUser = () => {
//     return{
//         uid:'ABC123',
//         username: 'Tony001'
//     }
// }

const getUser = () => ({uid:'ABC123', username:'Tony001'}) // entre llaves para dar a entender q se retorna objeto y no es cuerpo de function max largo

const heroes = [{
    id:1,
    name:'Batman'
    },
    {
        id:2,
        name:'Superman'
    }
]

const existe = heroes => heroes.id === 1 // retorna true si es que existe un heroe con id 1 con metodo some

const existeCorrecto = heroes.some( ( heroes ) => heroes.id === 1)
const {existeCorrectoFind} = heroes.find( ( heroes ) => heroes.id === 1)

const {name} = heroes.find( ( heroes ) => heroes.id === 1)

// console.log(existeCorrectoFind.name)
console.log(name)

console.log(existeCorrecto)
console.log(heroes.some(existe))
console.log(getUser())
console.log(saludar3(nombre))