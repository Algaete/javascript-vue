

const person ={
    name:'Tony',
    age:45,
    codeName:'Ironman',
    power : 'El dinero'
}

const {name,age,codeName, power = 'No tiene poder'} = person 


// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

const createHero = ({name:nombre,age,codeName,power}) => ({
    id:2845684,
    nombre,
    age,
    codeName,
    power
})

console.log(createHero(person))