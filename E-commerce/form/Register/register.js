document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate if passwords 
    if (password !== confirmPassword) {
        document.getElementById('password-error').textContent = 'Passwords do not match!';
        return;
    } else {
        document.getElementById('password-error').textContent = '';
    }

    // Check if email
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        showMessage('error', 'Email already exists! Please choose a different one.');
        return;
    }

    // user object
    const newUser = { email, password };

    // local storage store data
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('register-form').reset();

    showMessage('success', 'Registration successful! Redirecting to login page...');
        window.location.href = '../Login/login.html';
});

function showMessage(type, message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
}

document.getElementById('toggle-login').addEventListener('click', function () {
    window.location.href = '../Login/login.html';
});