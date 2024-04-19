import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import cors from'cors';
import ErrorHandler from './middleware/error.js'; // Assuming ErrorHandler is in the 'utils' directory
import route from './Routes/routes.js';
import connectDatabase from './db/database.js';

const app = express();
connectDatabase()
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use(cookieParser());
app.use("/",express.static("./uploads"));
if (process.env.NODE_ENV !== 'prod') {
    config({
        path: '.env'
    });
}

app.use(route);
app.use(ErrorHandler);

export default app;
