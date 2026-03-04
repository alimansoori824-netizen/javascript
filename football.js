document.getElementById("player1").addEventListener("click",play1);
document.getElementById("player2").addEventListener("click",play2);

var myball;
var myball1;
var lft=100;
var right=100;
function Right(){
    let obj = document.getElementById("ball");
    lft=lft+5;
    obj.style.left=lft+"px";

    if(lft>=1250){
        clearInterval(myball);
    }
}
function play1(){
   myball= setInterval(Right, 10);
}
function left(){
    let obj1 = document.getElementById("ball")
    lft=lft-5;
    obj1.style.left=lft+"px"

    if(lft<=(-20)){
        clearInterval(myball1);
    }
}
function play2(){
    myball1 = setInterval(left,10);
}