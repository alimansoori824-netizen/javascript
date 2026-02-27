// to store multiple type of data 
//denoted by curly braces 
//unordered (no indexing)
//data is stored in form of key value
//{key : value}
//object and array can be stored inside an object
// let student = {name:"code",
//     age:32,
//     city:"Bhopal",
//     bank:{accno:12345,accbalance:12000},
//     monthly:[1000,1100,1200]
// }

// console.log(student)
// console.log(student.city)//to print a specific key
// console.log(student.bank.accno)//to access an object inside of an object
// console.log(student.monthly[1])//to access an array value

//dynamic
// let emp = {
//     emp_name: prompt("Enter name"),
//     emp_age:  prompt("Enter age"),
//     emp_city: prompt("Enter city")
// }
// console.log(emp)

//to print keys
//for in loop - To print/access keys
// let emp1={
//     name:"ali",
//     age:19,
//     city:"Bhopal",
// }
// for(let k in emp1){
//     console.log(k);   
// }

// let ob={
//     "name 1":"ali",//key is acepted
//     "name 2":"sameer"
// }
// console.log(ob["name 1"]);

//imp point
//object notation - . and []-(used when space in key)

//to print a specific key
// let emp1={
//     name:"ali",
//     age:19,
//     city:"Bhopal",
// }
// for(let k in emp1){
//     if(k=="name"){
//     console.log(k)
// }
// }
//Object.keys is used to store keys in an array and then we can print a specific ey in an array

// let emp2={
//     name:"ali",
//     age:19,
//     city:"Bhopal",
// }
// let k = Object.keys(emp2)
// console.log(k);//to print all keys
// console.log(k[1]);//to print a specific keys

//24 feb
//destructuring of object
// let {name,city}={//same name as key shud be given to the variable or else it will be undefined 
    // name:"code",
    // city:"bhopal"
// }
// console.log(name);

let ob1 = {
    name:"code",
    city:"bhopal"
}
let ob2 = {
    contact:213
}
let ob3 = {...ob1,...ob2}//spread operator
console.log(ob3);

