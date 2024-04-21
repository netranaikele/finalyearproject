document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Mocking user data verification (Replace this with your actual backend)
        if (username === 'user' && password === 'password') {
            // Save username to local storage
            localStorage.setItem('username', username);

            // Redirect to dashboard
            window.location.href = '/dashboard/' ;
        } else {
            const errorMessage = document.querySelector('.error-message');
            if (!errorMessage) {
                const errorMessage = document.createElement('p');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'Invalid username or password';
                loginForm.appendChild(errorMessage);
            }
        }
    });
});
