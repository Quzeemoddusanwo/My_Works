function validateForm(){
    var x = document.forms["myForm"]["firstname"].value;
    if (x == ""){
        alert("Firstname must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["lastname"].value;
    if (y == ""){
        alert("Lastname must be filled out");
        return false;
    }
    var p = document.forms["myForm"]["password"].value;
    if (p == ""){
        alert("Password must be filled out");
        return false;
    }
    var e = document.forms["myForm"]["email"].value;
    if (e == ""){
        alert("Email must be filled out");
        return false;
    }
    var c = document.forms["myForm"]["country"].value;
    if (c == ""){
        alert("Country must be filled out");
        return false;
    }
}