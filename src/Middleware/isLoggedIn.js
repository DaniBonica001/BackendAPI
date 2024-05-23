import { getAuth } from "firebase/auth";

const isLoggedIn = (req,res,next) => {
    const token = req.headers.authorization;
    if (!token){
        return res.status(401).json({error: "Unauthorized"});
    }

    getAuth()
        .verifyIdToken(token)
        .then((decodedToken)=>{
            req.user = decodedToken;
            next();
        })
        .catch((error) => {
            console.error("Error verifying token: ", error);
            return res.status(401).json({error: "Unauthorized"});
        });
};

export default isLoggedIn;