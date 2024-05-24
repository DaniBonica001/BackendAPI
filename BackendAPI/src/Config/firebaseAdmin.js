// src/Config/firebaseAdmin.js
import admin from 'firebase-admin';
import path from 'path';
import { readFileSync } from 'fs';
const serviceAccountPath = path.resolve('src/serviceAccount.json');

export const initializeFirebaseAdmin = () => {
  const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://springbootprojectauth-default-rtdb.firebaseio.com",
  });

  console.log('Firebase Admin initialized');
};

export { admin };
