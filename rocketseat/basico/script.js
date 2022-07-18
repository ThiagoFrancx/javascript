//praticando
// 1. Declare uma variável de nome weight
//var weight = 53
// 2. Que tipo de dado é a váriavel acima?
//console.log(typeof weight) 

/*
3. Declare uma variável e atribua valores para cada um dos valores dos dados
* name: String
* age: Number (integer)
* stars: Number (float)
* isSubscribed: Boolean
*/

    /*let name = 'Thiago' ;
    let age = 20 ;
    let stars = 3.2 ;
    let isSubscribed = false;
   
    console.log(`o ${name} tem ${age} anos e ganhou ${stars} estrelas` ) 
 */

    let student = {
        name: 'João',
        age: 23 ,
        stars: 4.8,
        isSubscribed: true,
    }

    console.log(`${student.name} tem ${student.age} de idade e ganhou ${student.stars} estrelas` )

// 4. Declare uma váriavel do tipo Array, de nome students e atribua a ela nenhum, valor, ou seja, somente o Array vazio

let students = []

// 5. Reateribua valor para variável acima, colocando dentro dela o objeto student da questão 4. 
 students = [
    student
 ]

 console.log(students[0])