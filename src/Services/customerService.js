import { admin } from "../Config/firebaseAdmin.js";
import { pool } from "../server.js";
import axios from "axios";

export async function login(credentials) {
    const { email, password } = credentials;
    try {
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`, {
            email,
            password,
            returnSecureToken: true,
        });

        const { idToken } = response.data;

        return { message: "User logged in successfully", idToken };
    } catch (error) {
        throw { status: 401, message: `Error logging in user: ${error.message}` };
    }
}

export async function register(userData) {
    const { name, email, password, phoneNumber, profile_picture, isAdmin } = userData;
    try {
        const userCredential = await admin.auth().createUser({
            email,
            password,
            emailVerified: false
        });

        if (isAdmin) {
            await admin.auth().setCustomUserClaims(userCredential.uid, { admin: true });
        }
        console.log(userCredential)
        await pool.query(
            'INSERT INTO customer(id, name, phone, profile_image) VALUES ($1, $2, $3, $4)',
            [userCredential.uid, name, phoneNumber, profile_picture]
        );

        return `User ${userCredential.email} created successfully!`;
    } catch (error) {
        throw { status: 400, message: `Error registering user: ${error.message}` };
    }
}

export async function resetPassword(data) {
    const { email } = data;
    try {
        const response = await admin.auth().generatePasswordResetLink(email);
        return { message: "Password reset link sent successfully", link: response };
    } catch (error) {
        throw { status: 400, message: `Error sending password reset link: ${error.message}` };
    }
}

export async function getProfile(userUid) {
    const uid = userUid;
    try {
        const result = await pool.query('SELECT * FROM customer WHERE id = $1', [uid]);
        if (result.rows.length === 0) {
            throw { status: 404, message: "User not found" };
        }
        return result.rows[0];
    } catch (error) {
        throw { status: 400, message: `Error fetching user profile: ${error.message}` };
    }
}

export async function updateProfile(userUid, profileData) {
    const uid = userUid;
    const { name, email, password, phone, profile_image } = profileData;
    try {
        await admin.auth().updateUser(uid,{
            email: email,
            password: password
        })
        const result = await pool.query(
            'UPDATE customer SET name = $1, phone = $2, profile_image = $3 WHERE id = $4 RETURNING *',
            [name, phone, profile_image, uid]
        );

        if (result.rows.length === 0) {
            throw { status: 404, message: "User not found" };
        }
        return result.rows[0];
    } catch (error) {
        throw { status: 400, message: `Error updating profile: ${error.message}` };
    }
}