import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import ErrorHandler from './middleware/error.js'; // Assuming ErrorHandler is in the 'utils' directory
import fileUpload from 'express-fileupload';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" })); // Corrected the option name
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

if (process.env.NODE_ENV !== 'production') {
    config({
        path: 'config/.env'
    });
}

app.use(ErrorHandler);

export default app;
