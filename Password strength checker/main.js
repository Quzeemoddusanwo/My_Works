var password = document.getElementById("password");
var message = document.getElementById("msg");
var strength = document.getElementById("strength");

password.addEventListener('input', () => {
    if(password.value.length > 0){
        message.style.display = "block";
    }
    else{
        message.style.display = "none";
    }

    if(password.value.length < 4){
        strength.innerHTML = 'weak';
        password.style.borderColor = " #ff5925";
        message.style.color = " #ff5925";
    }
    else if(password.value.length > 4 && password.value.length <= 8){
        strength.innerHTML = 'medium';
        password.style.borderColor = " #ffff00";
        message.style.color = " #ffff00";
    }
    else if(password.value.length > 8){
        strength.innerHTML = 'strength';
        password.style.borderColor = " #26d730";
        message.style.color = " #26d730";
    }
})