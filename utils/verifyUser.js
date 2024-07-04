import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'

export const verifyToken =(req,res,next) =>{
    
    const token = req.headers.cookie
    .split('; ')
    .find(row => row.startsWith('access_token='))
    ?.split('=')[1];

    // console.log(req.cookie);
    // console.log("****************");
    // console.log(req);
    // console.log("****************");
    //  const token = "123"
     //getAccessTokenFromCookie(req.cookie)

    // const token = req.cookie;

    if (!token) {
        return next(errorHandler(401,"Unauthorized"));    
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err)
        {
            return next(errorHandler(401,"Unauthorized"));
        }
        req.user = user;
        next();
    })


}
