import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function register(userData) {
    const { email, password } = userData;  

    try{
        const userCredential = await createUserWithEmailAndPassword(getAuth(),email,password);
        return userCredential.user;

    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode)
    }
    
}

export async function login(credentials) {
    const { email, password } = credentials;

    try{
        const userCredential = await signInWithEmailAndPassword(getAuth(),email,password);
        return userCredential.user.stsTokenManager.accessToken;

    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode)
    }
}

export async function getProfile() {
    return "user";
}
