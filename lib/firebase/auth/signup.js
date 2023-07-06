import firebase_app from "../config";
import { 
    createUserWithEmailAndPassword, 
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

const auth = getAuth(firebase_app);

export async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function login(email, password) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function isSignedIn(email, password) {
    onAuthStateChanged((user) => {
        if (user) {
            return user
        } 
        return null
    })
}