//array
// let p=[8,7,6,5,4,3,2,1];
// let sum=0;
// for(let i=0;i<p.length;i++){
//     sum=sum+p[i]; 
// }
// console.log(p);
// console.log("sum is",sum);

//rest(in function) or spread operator - used to join two array
// let ar1=["pradosh","ali","saksham","chandan"]
// let ar2=["aditya","rishabh","aniruddh"]
// let a3=[...ar1,...ar2]
// console.log(a3);
//can be merged by just writing ..ar2 in the end of array

//destructing of array - pick an element using variable(helpful in react)
// let [name,age,city,height]=["ali",19,"Bhopal","5.8"]//array is nameless in this case
// console.log(city);//any variable name inside parenthesis

// let [name,age, ,height]=["ali",19,"Bhopal","5.8"]//bhopal isnt stored in any variable in this case
// console.log(height);

//for of loop is used to pick/access element without indexing(onlu used in array)
//syntax
// let stud = ["ali",19,"bhopal",5.8];
// for(let v of stud){
//     console.log(v);   
// }

// let num = [1,2,3,4,5,6,7,8,9,10];
// for(let n of num){
//     if(n%2==0){
//         var c=n*n;
//         console.log(c); 
//     }     
// }

//for in loop - will only give indexing numbers
let num = [1,2,3,4,5,6,7,8,9,10];
for(let n in num){
    console.log(n);
}

