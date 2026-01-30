import { registerUser } from "../firebase/auth.js";
import { createUserDoc } from "../firebase/firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');
    const generalError = document.getElementById('generalError');

    // UI Helpers (Toggle Password, Strength) from original file logic moved here
    // Re-attach listeners for UI only functionality
    
    // Toggle Password Visibility
    window.togglePassword = (inputId, iconId) => {
        const passwordInput = document.getElementById(inputId);
        const toggleIcon = document.getElementById(iconId);
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    };

    // Password Strength
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strengthBar = document.getElementById('strengthBar');
        const strengthText = document.getElementById('strengthText');
        
        let strength = 0;
        
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++;
        
        strengthBar.className = 'strength-bar';
        
        if (password.length === 0) {
            strengthText.textContent = '';
            strengthBar.style.width = '0';
        } else if (strength <= 1) {
            strengthBar.classList.add('weak');
            strengthText.textContent = 'Weak password';
            strengthText.style.color = '#ff4757';
        } else if (strength <= 2) {
            strengthBar.classList.add('medium');
            strengthText.textContent = 'Medium password';
            strengthText.style.color = '#ffa502';
        } else {
            strengthBar.classList.add('strong');
            strengthText.textContent = 'Strong password';
            strengthText.style.color = 'var(--neon-green)';
        }
    });

    // Form Submission
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clear errors
        document.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('show'));
        if (generalError) {
            generalError.textContent = '';
            generalError.classList.remove('show');
        }

        // Basic Validation
        let isValid = true;

        if (passwordInput.value !== confirmPasswordInput.value) {
            document.getElementById('confirmError').classList.add('show');
            isValid = false;
        }

        if (passwordInput.value.length < 6) {
            // Usually handled by UI, but double check
            isValid = false;
        }

        if (!isValid) return;

        // Start Loading
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');

        try {
            // 1. Create User in Auth
            const userCredential = await registerUser(emailInput.value, passwordInput.value);
            const user = userCredential.user;

            // 2. Create User Document in Firestore
            await createUserDoc(user.uid, {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                username: usernameInput.value,
                email: emailInput.value
            });

            // 3. Success -> Redirect (handled by auth-guard or manual)
            // Show popup first
            document.getElementById('successPopup').classList.add('show');
            
            // Redirect after delay
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 2000);

        } catch (error) {
            console.error("Signup error:", error);
            let message = "Registration failed.";
            if (error.code === 'auth/email-already-in-use') {
                message = "Email is already in use.";
            } else if (error.code === 'auth/weak-password') {
                message = "Password is too weak.";
            }
            
            if (generalError) {
                generalError.textContent = message;
                generalError.classList.add('show');
            } else {
                alert(message);
            }
            
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });
});
