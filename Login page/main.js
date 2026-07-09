// main.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    const emailInput = document.querySelector("#input-email");
    const passInput = document.querySelector("#input-pass");
    const rememberMe = document.querySelector("#remember-me");
    const forgotPassword = document.querySelector("#forgot-password");

    // Autofill saved email if "Remember Me" was used before
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMe.checked = true;
    }

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passInput.value.trim();

        // Basic validation
        if (email === "" || password === "") {
            alert("⚠️ Please enter both email and password.");
            return;
        }

        // Save email if "Remember Me" is checked
        if (rememberMe.checked) {
            localStorage.setItem("savedEmail", email);
        } else {
            localStorage.removeItem("savedEmail");
        }

        // Simulate login (replace with backend API call)
        alert(`✅ Logged in successfully as ${email}`);
    });

    // Forgot password link
    forgotPassword.addEventListener("click", (e) => {
        e.preventDefault();
        alert("🔑 Password reset link will be sent to your email.");
        // Example: window.location.href = "/reset-password";
    });

    // Social login buttons (already have hrefs in HTML)
    // You can add tracking or custom behavior here if needed
});
