function validateForm(){
    var x = document.forms["myForm"]["fullname"].value;
    if (x == ""){
        alert("Full Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["email"].value;
    if (y == ""){
        alert("Email must be filled out");
        return false;
    }
    var ph = document.forms["myForm"]["phonenumber"].value;
    if (ph == ""){
        alert("Phone Number must be filled out");
        return false;
    }
    var a = document.forms["myForm"]["password"].value;
    if (a == ""){
        alert("Password must be filled out");
        return false;
    }
    var cp = document.forms["myForm"]["cpassword"].value;
    if (cp == ""){
        alert("Confirm Password must be filled out");
        return false;
    }
    var a = document.forms["myForm"]["address"].value;
    if (a == ""){
        alert("Address must be filled out");
        return false;
    }
    var d = document.forms["myForm"]["dob"].value;
    if (d == ""){
        alert("Date Of Birth must be filled out");
        return false;
    }
}