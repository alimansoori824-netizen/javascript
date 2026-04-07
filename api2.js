async function access2(){
   let a= await fetch('https://jsonplaceholder.typicode.com/posts')
    let b= await a.json()
//    console.log(b);
    // let c = b.map((e)=>{return e.name})//event object
//    console.log(c);
    let data = b.map((i)=>`
    <tr>
    <td>${i.id}</td>
    <td>${i.title}</td>
    <td>${i.body}</td>
    </tr>
    `).join("")

    document.getElementById("showdata").innerHTML = data 
}
access2()