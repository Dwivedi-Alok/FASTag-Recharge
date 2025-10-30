// 1. Import Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, setLogLevel } from 'firebase/firestore';

// 2. Get Canvas-provided Firebase config and App ID
export const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- Firebase Initialization ---
// Replace with your own Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAHyuThRlQ-rsJjxh8kebxLqQfA5hJDyJY",
  authDomain: "fastag-recharge-app.firebaseapp.com",
  projectId: "fastag-recharge-app",
  storageBucket: "fastag-recharge-app.firebasestorage.app",
  messagingSenderId: "276277359349",
  appId: "1:276277359349:web:157a4a5fffd0124d59cbbc",
  measurementId: "G-DJ783NYD25"
};

export const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

let app;
let auth;
let db;

// --- Firebase Initialization ---
if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY" && !app) {
    try {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        setLogLevel('Debug');
    } catch (error) {
        console.error("Firebase Init Error:", error);
    }
} else if (!firebaseConfig.apiKey || firebaseConfig.apiKey === "YOUR_API_KEY") {
    console.error("Firebase config is missing. Please replace the placeholder in src/services/firebase.js with your own Firebase configuration.");
}


// Export the initialized services
export { app, auth, db };
