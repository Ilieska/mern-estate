import express from 'express';
import mognoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
mognoose.connect(process.env.MONGO).then(()=>{
    console.log('conected to mongo db');
}).catch((err)=>{
    console.log(err);
});
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use("/api/user" , userRouter);
app.use("/api/auth" , authRouter);