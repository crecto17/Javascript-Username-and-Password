// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    // Add an event listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Get input values
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation flags
        let isValid = true;

        // Validate username
        if (username.length < 5) {
            message.innerHTML = "Username must be at least 5 characters long.";
            message.className = "error";
            isValid = false;
        }

        // Validate password
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            message.innerHTML = 
                "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.";
            message.className = "error";
            isValid = false;
        }

        // If valid, display success message
        if (isValid) {
            message.innerHTML = "Login successful!";
            message.className = "success";
        }
    });
});
