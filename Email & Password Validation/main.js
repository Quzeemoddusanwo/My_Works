var email = document.getElementById("email");
var password = document.getElementById("password");

email.addEventListener('input',()=>{
    var emailBox = document.querySelector('.emailBox');
    var emailText = document.querySelector('.emailText');
    var emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

    if(email.value.match(emailPattern)){
        emailBox.classList.add('valid');
        emailBox.classList.remove('invalid');
        emailText.innerHTML = "Your Email Address in Valid";
    }else{
        emailBox.classList.add('invalid');
        emailBox.classList.remove('valid');
        emailText.innerHTML = "Must be a valid email address";
    }
});

password.addEventListener('input',()=>{
    var passBox = document.querySelector('.passBox');
    var passText = document.querySelector('.passText');
    var passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if(password.value.match(passPattern)){
        passBox.classList.add('valid');
        passBox.classList.remove('invalid');
        passText.innerHTML = "Your Password in Valid";
    }else{
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.innerHTML = "Your password must be at least 6 characters as well should contain at least one uppercase , one lowercase, and one number.";
    }
});