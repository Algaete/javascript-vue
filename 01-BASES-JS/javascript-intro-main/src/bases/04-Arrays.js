




const arreglo = [1,2,3,4] // or const arreglo= new Array(100)
arreglo.push(5)

const arreglo2 = [...arreglo] // spread para arreglo con corchetes de array
arreglo2.push(6)


const arreglo3 = arreglo2.map( function (n){
 return n*2 // n valores del arreglo2
}) //map devuelve nuevo arreglo con espacio nuevo de memoria

arreglo3.push(14)
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)