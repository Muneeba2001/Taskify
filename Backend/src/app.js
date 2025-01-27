import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDb from './db/connect.js';
import appRouter from './routes/route.js';

const appData= express();
const port = process.env.PORT;

appData.use(express.json())
appData.use(cors());
appData.use(cookieParser());
connectDb();
appData.use(appRouter)

appData.listen(port, () => {
    console.log('Server is running on port');
});