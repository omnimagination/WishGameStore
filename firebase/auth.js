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
export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Log out the current user
 * @returns {Promise<void>}
 */
export const logoutUser = () => {
    return signOut(auth);
};

/**
 * Listen for authentication state changes
 * @param {function} callback 
 */
export const authStateListener = (callback) => {
    return onAuthStateChanged(auth, callback);
};
