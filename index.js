import  express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import testRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
// import cookieParser from "cookie-parser";
// import postRouter from './routes/post.route.js'
import dataRouter from './routes/data.route.js'

dotenv.config(); 

const app = express();
app.use(express.json()) 
mongoose.connect(process.env.MONGO)
.then(()=>{ 
    console.log("connected to database");
})
.catch((err)=>{
    console.log(err);
})
app.listen(8070,()=>{
    console.log("Server is running on port 8070");
}) 


app.use('/api/user',testRouter)
app.use('/api/auth',authRouter);
app.use('/api/data',dataRouter)







// app.use('/api/auth',authRouter) 
// app.use('/api/post',postRouter)
// app.use('/api/comment',commentRouter)



// app.use((err,req,res,next)=>{
//     const statusCode = err.statusCode ||500;
//     const message = err.message || 'Internal Server Error';
//     res.status(statusCode).json({
//         success:false,
//         statusCode,
//         message})
// })