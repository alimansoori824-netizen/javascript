let count =0
function dec(){
    if(count>0){
        count--
        document.getElementById("zero").textContent=count
    }
}
function inc(){
        count++
        document.getElementById("zero").textContent=count
}
function res(){
    count=0
        document.getElementById("zero").textContent=count

}