let lista = [5, 2, 8, 1, 10]

let dobro = lista.map(lista => lista * 2)
console.log(dobro)
console.log("----------------------------------")

let resultado = lista.map(lista =>{
    console.log(lista)
    return lista * 2
})
console.log(resultado)