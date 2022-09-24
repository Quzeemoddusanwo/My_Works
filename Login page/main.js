function validateForm(){
    var x = document.forms['mylogin']['username'].value;
    var y = document.forms['mylogin']['password'].value;

    if(x==""){
        alert("Username hasn't be fill.");
        return false;
    }
    else if(y==""){
        alert("Password must be fill.");
        return false;
    }
    else{
        alert("Login is successful!");
    }
}