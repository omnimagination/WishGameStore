import { logoutUser } from "../firebase/auth.js";
import { getUserDoc } from "../firebase/firestore.js";
import { auth } from "../firebase/firebase-config.js";

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    const welcomeUsername = document.getElementById('welcomeUsername');
    const displayUsername = document.getElementById('displayUsername');
    const displayEmail = document.getElementById('displayEmail');
    const displayJoined = document.getElementById('displayJoined');

    // Fetch user data once auth is ready (handled by auth-guard mostly, but we need data here)
    // We can use onAuthStateChanged or just wait for the auth object if we are sure
    // But auth-guard already checks. We can rely on auth.currentUser being populated *eventually* 
    // or set up a listener.
    
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // Get Firestore data
            const userData = await getUserDoc(user.uid);
            
            if (userData) {
                const username = userData.username || "Gamer";
                welcomeUsername.textContent = username;
                displayUsername.textContent = username;
                displayEmail.textContent = user.email;
                
                if (userData.createdAt) {
                    const date = new Date(userData.createdAt);
                    displayJoined.textContent = date.toLocaleDateString();
                } else {
                    displayJoined.textContent = "N/A";
                }
            } else {
                // Fallback if no firestore doc
                welcomeUsername.textContent = user.displayName || "Gamer";
                displayUsername.textContent = user.displayName || "N/A";
                displayEmail.textContent = user.email;
            }
        }
    });

    logoutBtn.addEventListener('click', async () => {
        try {
            await logoutUser();
            window.location.href = "signin.html";
        } catch (error) {
            console.error("Logout failed", error);
            alert("Failed to logout. Try again.");
        }
    });
});
