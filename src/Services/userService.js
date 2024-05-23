import { admin } from "../Config/firebaseAdmin.js";

export async function register(userData) {
    const { email, password, phoneNumber ,isAdmin } = userData;  
    try{
        const userCredential = await admin.auth().createUser({
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            emailVerified: false
        })
        if(isAdmin){
            await admin.auth().setCustomUserClaims(userCredential.uid, {admin: true});
        }
        return `User ${userCredential.email} created successfully!`;

    }catch(error){
        throw {status: 400, message: `Error registering user: ${error.message}`}
    }
    
}

export async function login(credentials) {
    const { email, password } = credentials;
    
    try {
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key${process.env.FIREBASE_API_KEY}`, {
            email,
            password,
            returnSecureToken: true,
        });
        const {idToken}= response.data;
        
        // Return the access token
        return response.json({
            message: "User logged in successfully",
            idToken
        });
        
    } catch (error) {
        throw {status: 401, message: `Error logging in user: ${error.message}`}
    }
}
export async function getProfile() {
    return "user";
}
