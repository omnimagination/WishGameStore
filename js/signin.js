import { loginUser } from "../firebase/auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signinForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('authErrorMessage');
    const togglePassword = document.getElementById('togglePassword');

    // Toggle password visibility
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const icon = togglePassword.querySelector('i');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }

    // Handle Form Submission
    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Reset state
        errorMsg.classList.remove('show');
        errorMsg.textContent = '';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        try {
            await loginUser(email, password);
            // Auth guard will handle redirect to dashboard
        } catch (error) {
            console.error("Login error:", error);
            
            let message = "Failed to sign in. Please check your credentials.";
            
            // Map Firebase error codes to user-friendly messages
            switch (error.code) {
                case 'auth/invalid-email':
                    message = "Invalid email address format.";
                    break;
                case 'auth/user-disabled':
                    message = "This user account has been disabled.";
                    break;
                case 'auth/user-not-found':
                    message = "No account found with this email.";
                    break;
                case 'auth/wrong-password':
                    message = "Incorrect password.";
                    break;
                case 'auth/invalid-credential':
                    message = "Invalid credentials. Please try again.";
                    break;
            }

            errorMsg.textContent = message;
            errorMsg.classList.add('show');
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });
});
