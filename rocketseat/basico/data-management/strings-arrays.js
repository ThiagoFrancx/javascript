//Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois  disso, transforme o array em um texto e onde eram os espaços, coloque _

let pharse = 'Estruturas de dados e algoritmos com JavaScript!'
let myArray = pharse.split(' ')
let pharasewithUnderscore = myArray.join('_')
console.log (pharasewithUnderscore)

//Manipulando Strings

// Verificar se o texto contém a palavra JavaScript

let frase = 'Estruturas de dados e algoritmos com JavaScript!'
console.log(frase.includes('JavaScript'))

//Manipulando Arrays

//Contar elementos de um Array
console.log(['a', 'b', 'c'].length)
