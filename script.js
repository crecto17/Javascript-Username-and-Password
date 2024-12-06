// script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Sample valid username and password
    const validUsername = "admin";
    const validPassword = "12345";

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.textContent = "";

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
});

