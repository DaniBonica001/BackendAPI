import app from './app.js';
import { port } from './Config/config.js';
import { initializeFirebase } from './config/firebaseAdmin.js';

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    initializeFirebase();
});
