// <!-- 16 feb -->
// <!-- loop - do while, while, for ,for in, for of, forEach -->
// <!-- do while -->

// let a = 5;
// do{
//     console.log(a);
//     a--;        
// }while(a>=0)

//table
// let num = parseInt(prompt("Enter a number"))
// let l = 1
// do{
//     console.log(num*l);
//     l++
// }while(l<=10)

//while
// let x = 1
// while(x<=15){
//     document.write(x)
//     x++
// }

//wap to print sum of all digits btwn 10 to 1
//wap to print square of all even numbers btwn 5 to 15
//wap to print square of all numbers btwn 1 to 10
//using while loop

//take input till 0 using do while
//1st program
// let i=10;
// let sum=0;
// while(i>=1){
//     sum=sum+i;
//     i--;
// }console.log(sum)

//2nd program

// let a = 5
// let mul = 0
// while(a<=15){
//     if(a%2==0){
//         console.log(a*a)     
//     }
//     a++
// }

//3rd program

// let a = 1
// while(a<=10){
//     console.log(a*a)
//     a++
// }

//4th program

// do{
//     var num = parseInt(prompt("enter a number"))
// }while(num!=0);

//17 feb

//for loop
// for(Init;cond;inc/dc){
// code
// }

//print 2 to 10 using - for loop
// for(let x=2;x<=10;x++){
//     console.log(x)
// }

//print table in reverse
// var mul=parseInt(prompt("enter a number"))
// for(let x=10;x>=1;x--){
//     console.log(mul*x)
// }


// var num=parseInt(prompt("enter a number"))
//     if(num>=1 && num<=5){
//         for(let a=1;a<=10;a++){
//         console.log(num*a)
//         }}

//     else if(num>=6 && num<=10){
//         for(let a=10;a>=1;a--){
//         if(a%2==0){
//         console.log(a*a)
//             }
//         }
//     }
//     else{
//         console.log("invalid")
//     }

// 18 feb
//nested for loop
//for(init;condtion;i++/i--){
//     for(init;condtion;i++/i--){
//         //code
//     }
// }

//table of 2 and 3
// for(let a=2;a<=3;a++){
//     for(let r=1;r<=10;r++){
//         console.log(a*r)
//     }
// }

//triangle (first make rows)
// for(let r=1;r<=5;r++){
//     for(let c=1;c<=r;c++){
//         document.write("*")
//     }
//         document.write("<br>")
// }

//reverse 
//rows will always go from 1 to 5 
// for(let r=1;r<=5;r++){
//     for(let c=5;c>=r;c--){
//         document.write("*")
//     }
//         document.write("<br>")
// }

//equal
// for(let r=1;r<=4;r++){
//     for(let c=1;c<=4;c++){
//         document.write("*")
//     }
        // document.write("<br>")
// }

//square 
// let size=5;
// for(r=1;r<=size;r++){
//     for(c=1;c<=size;c++){
//         if(r==1 ||r==size || c==1 || c==size){
//             document.write("* ")
//         }
//         else{
//             document.write("&nbsp;&nbsp;&nbsp")
//         }
//     }
//     document.write("<br>")
// }


// for(let r=1;r<=5;r++){
//     for(let c=1;c<=5;c++){

//         if(c==3 || r==1){
//         document.write("*  ")
//     }
//     else{
//         document.write("&nbsp;&nbsp;")
//     }
        
//     }document.write("<br>") 
// }
