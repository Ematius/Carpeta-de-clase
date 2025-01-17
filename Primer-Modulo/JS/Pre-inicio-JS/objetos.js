//objetos literales

//JSON Es un atajo para crear objetos, llamada JSON
const user = {
    name : 'Pepe', 
    age : 22
}

//para acceder

console.log(user.name);

//primitivos (inmutables)
//const -> CONSTANTE

const x = 22
// imposible x = 1

//objetos (mutables)
//const -> NO RE-ASIGNABLE
//Ejemplos de re-asignación, el objeto no es mutable, se puede puede cambiar las propiedades uno por uno, no todo el objeto
//ES UNA BUENA PRACTICA HACER CONST LOS OBJETOS
const student = {
    name : 'Pepe', 
    age : 22, 
    color: 'White'
}
student.age = 23 // Esto si se puede hacer
student.course = 'Web' //Añadir una propiedad y su valor
delete student.color  //Se borra