var password = document.getElementById("sign-up-password");
var confirm_password = document.getElementById("confirm-sign-up-password");

function validatePassword(){
    if (password.value != confirm_password.value){
        confirm_password.setCustomValidity("Passwords Don't Match!");
    } else {
        confirm_password.setCustomValidity("");
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
