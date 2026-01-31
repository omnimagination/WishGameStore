import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase-config.js";

/**
 * Sign up a new user
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<UserCredential>}
 */
export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Sign in an existing user
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<UserCredential>}
 */
export const loginUser = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Save user data to localStorage for profile image display
    localStorage.setItem('wishgamestore_user_email', user.email);
    if (user.displayName) {
        localStorage.setItem('wishgamestore_user_name', user.displayName);
    } else {
        // Use email prefix as name if displayName doesn't exist
        const nameFromEmail = user.email.split('@')[0];
        localStorage.setItem('wishgamestore_user_name', nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1));
    }
    if (user.photoURL) {
        localStorage.setItem('wishgamestore_user_photo', user.photoURL);
    }
    
    return userCredential;
};

/**
 * Log out the current user
 * @returns {Promise<void>}
 */
export const logoutUser = () => {
    // Clear localStorage when logging out
    localStorage.removeItem('wishgamestore_user_email');
    localStorage.removeItem('wishgamestore_user_name');
    localStorage.removeItem('wishgamestore_user_photo');
    
    return signOut(auth);
};

/**
 * Listen for authentication state changes
 * @param {function} callback 
 */
export const authStateListener = (callback) => {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in - update localStorage
            localStorage.setItem('wishgamestore_user_email', user.email);
            if (user.displayName) {
                localStorage.setItem('wishgamestore_user_name', user.displayName);
            } else {
                const nameFromEmail = user.email.split('@')[0];
                localStorage.setItem('wishgamestore_user_name', nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1));
            }
            if (user.photoURL) {
                localStorage.setItem('wishgamestore_user_photo', user.photoURL);
            }
        } else {
            // User is signed out - clear localStorage
            localStorage.removeItem('wishgamestore_user_email');
            localStorage.removeItem('wishgamestore_user_name');
            localStorage.removeItem('wishgamestore_user_photo');
        }
        
        // Call the original callback
        callback(user);
    });
};
