document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('login-form');
    const forgetEmailInput = document.getElementById('forget-email');
    const changePasswordInput = document.getElementById('change-password');

    // localStorage
    let storedUsers = JSON.parse(localStorage.getItem('login')) || [];

    document.getElementById('reset-password').addEventListener('click', function () {
        const forgetEmail = forgetEmailInput.value.trim();
        const newPassword = changePasswordInput.value.trim();

        // Find user for localstorage
        const userToForget = storedUsers.find(user => user.email === forgetEmail);

        if (userToForget) {
            // upadete password
            userToForget.password = newPassword;
            localStorage.setItem('users', JSON.stringify(storedUsers));
            showMessage('info', 'Password reset successful.');
            loginForm.reset();
        } else {
            showMessage('error', 'User with that email does not exist.');
        }
    });

});
document.getElementById('reset-password').addEventListener('click', function () {
    window.location.href = '../Login/login.html';
});
