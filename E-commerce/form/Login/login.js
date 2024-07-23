document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(u => u.email === loginEmail && u.password === loginPassword);
        const data = [];
        if (user) {
            showMessage('success', 'Login successful!');
            
            const logindata = { email: user.email, password: user.password };

            data.push(logindata);
            localStorage.setItem('login', JSON.stringify(data));
    
            window.location.href = '../../Home/home.html';
        } else {
            showMessage('error', 'Invalid email or password. Please try again.');
        }

        loginForm.reset();
    });

    function showMessage(type, message) {
        messageDiv.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
    }

    document.getElementById('forget-password').addEventListener('click', function () {
        window.location.href = '../forget/forget.html';
    });

    document.getElementById('toggle-register').addEventListener('click', function () {
        window.location.href = '../Register/register.html';
    });
});
