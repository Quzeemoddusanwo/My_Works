const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');

overlayBtn.addEventListener('click', ()=>{
    container.classList.toggle('right-panel-active');

    overlayBtn.classList.remove('btnScaled');
    window.requestAnimationFrame(()=>{
        overlayBtn.classList.add('btnScaled');
    })
});

function validateForm(){
    var n = document.forms["signUp"]["Name"].value
    if(n == ""){
        alert("Name must be filled out.");
        return false;
    }
    var e = document.forms["signUp"]["Email"].value
    if(e == ""){
        alert("Email Address must be filled out.");
        return false;
    }
    var p = document.forms["signUp"]["Password"].value
    if(p == ""){
        alert("Password must be filled out.");
        return false;
    }
    var cp = document.forms["signUp"]["ConfirmPassword"].value
    if(p != cp){
        alert("What you input, does not match with the password!.");
    }
    else{
        alert("You have Sign Up Successfully!");
    }
}

function validatteForm(){
    var e = document.forms["signIn"]["Email"].value
    if(e == ""){
        alert("Email Address must be filled out.");
        return false;
    }
    var ip = document.forms["signIn"]["Password"].value
    if(ip == ""){
        alert("Password must be filled out.");
        return false;
    }
    else{
        alert("You have Sign In Successfully!");
    }
}