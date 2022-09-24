var age=document.getElementById("age");
var height=document.getElementById("height");
var weight=document.getElementById("weight");
var male=document.getElementById("male");
var female=document.getElementById("female");
var form=document.getElementById("form");

function validateForm(){
    if(age.value==''|| height.value==''|| weight.value==''||
    (male.checked==false && female.checked==false)){
        alert("All fields are required!");
        document.getElementById("submit").removeEventListener("click",countBmi);
    }
    else{
        countBmi();
    }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmi(){
    var p=[age.value,
    height.value,
    weight.value];
    if(male.checked){
        p.push("male");
    }
    else if(female.checked){
        p.push("female");
    }
}