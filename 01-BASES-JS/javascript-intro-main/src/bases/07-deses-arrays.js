



const characters = ['Goku','Vegeta','Trunks']

const [ g, v, t, goten = 'No tiene valor' ] = characters 

const returnArray = () => {
    return ['ABC', 123]
}

const [letters , numbers] = returnArray()
console.log(letters,numbers)
// console.log(g,v,t)
console.log(goten)