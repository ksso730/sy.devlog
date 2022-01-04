import jwt from 'jsonwebtoken';
import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({msg: "Unauthorized! "})
    }
    
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(400).json({msg: "Unauthorized! "})
    }
};

export default auth;