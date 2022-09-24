function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    if (x == ""){
        alert("Name must be filled out");
        return false;
    }
    var m = document.forms["myForm"]["mnumber"].value;
    if (m == ""){
        alert("Name must be filled out");
        return false;
    }
}
function myFunction() {
    var x, text;
  
    x = document.getElementById("numb").value;
  
    if (isNaN(x) || x < 21010211001 || x > 21010211300) {
      text = "You are not a Computer Science Student.";
    } else {
      text = "Correct!,You are a Computer Science Student.";
    }
    document.getElementById("demo").innerHTML = text;
}