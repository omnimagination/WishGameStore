import { authStateListener } from "../firebase/auth.js";

// Define protected and public routes
const protectedRoutes = ["dashboard.html", "profile.html"];
const authRoutes = ["signin.html", "signup.html", "login.html"]; // login.html kept for backward compatibility

// Function to handle redirection logic
const handleAuthGuard = (user) => {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    if (user) {
        // User is logged in
        if (authRoutes.includes(page)) {
            // Redirect logged-in users away from auth pages
            window.location.href = "dashboard.html";
        }
    } else {
        // User is NOT logged in
        if (protectedRoutes.includes(page)) {
            // Redirect unauthenticated users away from protected pages
            window.location.href = "signin.html";
        }
    }
};

// Initialize listener
authStateListener((user) => {
    handleAuthGuard(user);
});
