//14 feb
//if else
// let marks = parseInt(prompt("enter marks"))

// if(marks>33){
//     console.log("passed")
// }
// else{
//     console.log("failed")
// }

// let num = parseInt(prompt("Enter a number"))

// if(num%2==1){
//     console.log("odd")
//     var a=num*num
//     console.log(a)
     

// }
// else{
//     console.log("even")
//     var r = 3.14*num*num;
//     console.log(r)
// }

//ladder if else if multiple condition
//char and string is same in js

// let vari = prompt("Enter a char")

// if(vari=='a'){
//     console.log("vowel")
// }
// else if(vari=='e'){
//     console.log("vowel")
// }
// else if(vari=='i'){
//     console.log("vowel")
// }
// else if(vari=='o'){
//     console.log("vowel")
// }
// else if(vari=='u'){
//     console.log("vowel")
// }
// else {
//     console.log("consonant")
// }

//HW for 16 feb
//wap to program to take one input from the user . you have to perfom calculations based on input, when user give 1
//in input so you have to perfrom addition of two numbers , 2 for sub ,3 for multiplication, 4 for division, otherwise
//print invalid , using ladder if else

//wap to find grade of student according to percentage take 5 inputs(subject marks) then find percentage then print
//grade accordingly

//wap to take 3 int inputs from user and check 1 input is divisible by 3 or not . if it is divisible by three then
//find area of rectangle of 1 and 2 input . if not divisible then add all input and print it

// 15 feb hw


// 1st program 
// a = parseInt(prompt("Enter 1st number"));
// b = parseInt(prompt("Enter 2nd number"));
// c = parseInt(prompt("Enter calculation"));

// if(c==1){
//     console.log(a+b);
// }
// else if(c==2){
//     console.log(a-b);
// }
// else if(c==3){
//     console.log(a*b);
// }
// else if(c==4){
//     console.log(a/b);
// }
// else{
//     console.log("invalid");
// }

//2nd program
// phy = parseInt(prompt("Enter physics marks"))
// chem = parseInt(prompt("Enter chemistry marks"))
// math = parseInt(prompt("Enter maths marks"))
// eng = parseInt(prompt("Enter english marks"))
// pe = parseInt(prompt("Enter physical education marks"))
// total = phy+chem+math+eng+pe;
// console.log("Total marks ",total)
// per = (phy+chem+math+eng+pe)/5;
// console.log(per);

//3rd program
a = parseInt(prompt("Enter 1st number"))
b = parseInt(prompt("Enter 2nd number"))
c = parseInt(prompt("Enter 3rd number"))

if(c%3==0){
    console.log(a*b)
}
else{
    console.log(a+b+c)
}