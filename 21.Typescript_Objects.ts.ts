
// Write a program that creates objects containing these items.

// Datatype of person object
interface person{
    age : number,
    name :string,
    nationality :string,
    Student :Boolean
}
// person object
let person :person = {
    
    age : 20 ,
    name : 'Zahra' ,
    nationality : 'Pakistan' ,
    Student : true
}
// print person
console.log(person);

// Datatype of car object
interface car{
    maker : string,
    color : string,
    automatic : boolean
}
// car object
let car =  {
    maker : 'toyota',
    color : 'Black',
    automatic : true
}

// print car
console.log(car);

