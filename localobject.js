//30 march
// object storing in local storage
// also array
// it shud be string in localstorage then data will be shown
// json.stringify converts object and array into string data
let person ={
    name:"Ali",
    age:23,
    city:"Bhopal",
    contactn:123456
}
// localStorage.setItem("userdata",person) - data isnt gonna show up 
localStorage.setItem("userdata",JSON.stringify(person)) //data will be shown as json coverts it into string data type
// if u want data in object or array in LocalStorage
// json parse = converts string data into original form(object in our case)
let op = localStorage.getItem("userdata")
let pp = JSON.parse(op) // converts data into original form
console.log(pp) //prints 
console.log(pp.contactn) //prints contactn only

