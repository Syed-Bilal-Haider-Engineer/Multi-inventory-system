import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import cors from'cors';
import ErrorHandler from './middleware/error.js'; // Assuming ErrorHandler is in the 'utils' directory
import route from './Routes/routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" })); // Corrected the option name
app.use(cookieParser());
app.use("/",express.static("uploads"));
if (process.env.NODE_ENV !== 'production') {
    config({
        path: 'config/.env'
    });
}

app.use(route);
app.use(ErrorHandler);

export default app;
