document.addEventListener('DOMContentLoaded', function() {
    const usernameElement = document.getElementById('username');

    // Get username from local storage
    const username = localStorage.getItem('username');

    if (username) {
        usernameElement.textContent = username;
    } else {
        // Redirect to login page if username is not found
        window.location.href = '/login';
    }
});