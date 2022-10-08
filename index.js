import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from "mysql2";
import dotenv from 'dotenv';
//--------- custom modules ------------
import users from './Routers/UsersRouter.js';

//----------------------------
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN.split(',')
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


// ----------- connection End -------------

app.use('/user', users);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})