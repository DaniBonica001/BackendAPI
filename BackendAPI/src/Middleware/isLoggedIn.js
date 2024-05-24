import { admin } from "../Config/firebaseAdmin.js";

const isLoggedIn = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token){
        return res.status(401).json({error: "Unauthorized"});
    }

    admin.auth()
        .verifyIdToken(token)
        .then((decodedToken)=>{
            req.user = decodedToken.uid;
            next();
        })
        .catch((error) => {
            console.error("Error verifying token: ", error);
            return res.status(401).json({error: "Unauthorized"});
        });
};

export default isLoggedIn;