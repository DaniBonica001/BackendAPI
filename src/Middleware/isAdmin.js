import { admin } from "../Config/firebaseAdmin.js";

const isAdmin = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token){
        return res.status(401).json({error: "Unauthorized"});
    }

    admin.auth()
        .verifyIdToken(token)
        .then((claims)=>{
            if (claims.admin === true){
                next()
            }
        })
        .catch((error) => {
            console.error("Error verifying claims: ", error);
            return res.status(401).json({error: "Unauthorized"});
        });
};

export default isAdmin;