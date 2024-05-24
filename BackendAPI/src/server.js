import app from './app.js';
import { port } from './Config/config.js';
import pg from "pg"
import { initializeFirebaseAdmin } from './Config/firebaseAdmin.js'; 

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    initializeFirebaseAdmin();
    main()
        .then(() => console.log("Connected to Postgres!"))
        .catch(err => console.log("Error connecting to postgres!", err))
});

export const pool = new pg.Pool({
    host:process.env.POSTGRES_HOST,
    port:process.env.POSTGRES_PORT,
    user:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DB,
});

async function main(){
    const client = await pool.connect();
    try{
        
    }catch(err){
        console.log(err)
    }finally{
        client.release();
    }
}



