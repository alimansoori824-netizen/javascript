// storage stored in browser is called local storage
//      setItem() - save data
//      getItem() - retrives data - only pass key
//      removeItem() - removes data - only pass key
//      clear() - clears data
// format - key and value
// max data - 10mb approx

localStorage.setItem("data","my name")
localStorage.setItem("person","code")//key and value both shud be passed
localStorage.removeItem("data") //only write key to remive data
let n = localStorage.getItem("person")//only write key to retrieve data
// localStorage.clear() //clears all data at once 
document.write(n)
