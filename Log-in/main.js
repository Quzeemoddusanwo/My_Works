function validateForm(){
    var u = document.forms["mylog"]["username"].value;
    if(u == ""){
        alert("Username must be filled out");
        return false;
    }

    var e = document.forms["mylog"]["email"].value;
    if(e == ""){
        alert("Email Address must be filled out");
        return false;
    }

    var p = document.forms["mylog"]["password"].value;
    if(p == ""){
        alert("Password must be filled out");
        return false;
    }
}