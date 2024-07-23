document.addEventListener("DOMContentLoaded", function () {
    const resetForm = document.getElementById('reset-form');
    const loginEmailInput = document.getElementById('login-email');
    const loginPasswordInput = document.getElementById('login-password');
    const changePasswordInput = document.getElementById('change-password');
    const messageDiv = document.getElementById('message');

    resetForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const loginEmail = loginEmailInput.value.trim();
        const loginPassword = loginPasswordInput.value.trim();
        const newPassword = changePasswordInput.value.trim();

        let storedUsers = JSON.parse(localStorage.getItem('login')) || [];

        // Find user in stored localstorage
        const user = storedUsers.find(user => user.email === loginEmail && user.password === loginPassword);

        if (user) {
            user.password = newPassword;
            localStorage.setItem('users', JSON.stringify(storedUsers));
            window.location.href = '../Login/login.html';
            resetForm.reset();
        } else {
            messageDiv.innerHTML = `Invalid email or password. Please try again.`
        }
    });
});