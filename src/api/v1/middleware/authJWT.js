import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    if(!token){
        return res.status(403).json({message:"No token provided"})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({
              message: "Unauthorized!"
            });
          }
        req.user_id = decoded.id;
        next();
    });
}

const verifyTokenAdmin = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    if(!token){
        return res.status(403).json({message:"No token provided"})
    }
    else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                  message: "Unauthorized!"
                });
              }
            else{
                if(decoded.role_id == 1){
                    req.user_id = decoded.id;
                    next();
                }
                else{
                    return res.status(401).send({message: "You dont have access!"});
                }
            }
        });
    }
}

const authData = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'] || req.headers['authorization'];
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        return decoded.user_id;

      } catch(err) {
          return err;
      }
}

const authDataAdmin = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'] || req.headers['authorization'];
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        return ({user_id : decoded.user_id, role_id : decoded.role_id});

      } catch(err) {
          return err;
      }
}


const authJWT = {
    verifyToken : verifyToken,
    authData : authData,
    authDataAdmin : authDataAdmin,
    verifyTokenAdmin : verifyTokenAdmin
}
export default authJWT;