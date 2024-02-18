import express from 'express';
import mognoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
mognoose.connect(process.env.MONGO).then(()=>{
    console.log('conected to mongo db');
}).catch((err)=>{
    console.log(err);
});
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});