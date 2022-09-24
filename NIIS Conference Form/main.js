function validateForm(){
    var x = document.forms["myForm"]["name"].value;
    if (x == ""){
        alert("Name cannot be blank");
        return false;
    }
    var y = document.forms["myForm"]["email"].value;
    if (y == ""){
        alert("Email address cannot be blank");
        return false;
    }
    var g = document.forms["myForm"]["whatsapp-number"].value;
    if (g == ""){
        alert("Whatsapp number must be selected");
        return false;
    }
    var p = document.forms["myForm"]["organisation"].value;
    if (p == ""){
        alert("Organisation must be choosed");
        return false;
    }
    var p = document.forms["myForm"]["bio"].value;
    if (p == ""){
        alert("We would like to Know");
        return false;
    }
    else{
        alert("Congratulations.");
        return false;
    }
}