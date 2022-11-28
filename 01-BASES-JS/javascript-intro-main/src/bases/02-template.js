




const nombre = 'Fernando'
const apellido = 'Gaete'
const nombreCompleto = nombre + ' ' + apellido
const nombreCompletoTemplateString = `${nombre} ${apellido}`
console.log(nombreCompleto,nombreCompletoTemplateString)



console.log(`Resultado: ${1+5}`)

function getSaludo(nombre){
    return 'Hola '+ nombre
}
console.log(`Esta es un texto: ${getSaludo(nombre)}`)