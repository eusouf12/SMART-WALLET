
function validateLogin(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    var validEmail = "jr.101@gmail.com";
    var validPass = "123456#";

    if(email == validEmail && pass == validPass){
        window.location.href = 'wallet.html';
    }
    else{
        alert('Your Email or Password is wrong.');
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';

    }
}