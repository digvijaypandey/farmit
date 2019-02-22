function register(){
    var password = document.getElementById('password').value
    var rePassword = document.getElementById('repassword').value
    if(password !== rePassword){
        alert(please)
        return true
    }
}