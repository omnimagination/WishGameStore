import { auth } from "../firebase/firebase-config.js";
import { getUserDoc, updateUserDoc } from "../firebase/firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const profileForm = document.getElementById('profileForm');
    const saveBtn = document.getElementById('saveBtn');
    const successMsg = document.getElementById('successMsg');

    // Load Data
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            emailInput.value = user.email;
            
            const userData = await getUserDoc(user.uid);
            if (userData) {
                usernameInput.value = userData.username || "";
                firstNameInput.value = userData.firstName || "";
                lastNameInput.value = userData.lastName || "";
            }
        }
    });

    // Handle Update
    profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const user = auth.currentUser;
        if (!user) return;

        saveBtn.disabled = true;
        saveBtn.textContent = "Saving...";
        successMsg.style.display = 'none';

        try {
            await updateUserDoc(user.uid, {
                username: usernameInput.value,
                firstName: firstNameInput.value,
                lastName: lastNameInput.value
            });

            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);
        } catch (error) {
            console.error("Update failed", error);
            alert("Failed to update profile.");
        } finally {
            saveBtn.disabled = false;
            saveBtn.textContent = "Save Changes";
        }
    });
});
