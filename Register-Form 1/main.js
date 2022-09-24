function validateForm(){
    var x = document.forms["myForm"]["firstname"].value;
    if (x == ""){
        alert("First Name cannot be blank");
        return false;
    }
    var y = document.forms["myForm"]["lastname"].value;
    if (y == ""){
        alert("Last Name cannot be blank");
        return false;
    }
    var g = document.forms["myForm"]["gender"].value;
    if (g == ""){
        alert("Gender must be selected");
        return false;
    }
    var p = document.forms["myForm"]["country"].value;
    if (p == ""){
        alert("Country must be choosed");
        return false;
    }
    else{
        alert("Your details has been saved.");
        return false;
    }
}