const userEmail = document.getElementById('user-email');
const userPass = document.getElementById('user-pass');
const loginBtn = document.getElementById('login-btn')

loginBtn.addEventListener('click', function () {
  
    if (userEmail.value == 'faridalam62@gmail.com' && userPass.value == '123456789') {
    window.location = '/bank.html';
} else {
    alert('Invalid user')
}
})



