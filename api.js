 async function access(){
   let d = await fetch('https://jsonplaceholder.typicode.com/comments')
   let res = await d.json()
//    console.log(res);
// map (to find name)
   let x = res.map((e)=>{return e.name})
console.log(x);




// backtick
// json practice 
//    thats how we fetch data and print 

//    await means to make the varaible wait untill it comes fully
//    async is used when we want to use await
//    json converts it to original format(array of object in our case) so we can print the data 
//    
}
// json always store string
access()