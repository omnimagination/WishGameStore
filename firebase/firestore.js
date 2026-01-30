import { 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "./firebase-config.js";

/**
 * Create a user document in Firestore
 * @param {string} uid 
 * @param {object} userData 
 * @returns {Promise<void>}
 */
export const createUserDoc = (uid, userData) => {
    const userRef = doc(db, "users", uid);
    return setDoc(userRef, {
        ...userData,
        createdAt: new Date().toISOString()
    });
};

/**
 * Get user data from Firestore
 * @param {string} uid 
 * @returns {Promise<object|null>}
 */
export const getUserDoc = async (uid) => {
    const userRef = doc(db, "users", uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
};

/**
 * Update user data in Firestore
 * @param {string} uid 
 * @param {object} data 
 * @returns {Promise<void>}
 */
export const updateUserDoc = (uid, data) => {
    const userRef = doc(db, "users", uid);
    return updateDoc(userRef, data);
};
