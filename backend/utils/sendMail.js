import nodemailer from 'nodemailer';
import { config } from 'dotenv';
if (process.env.NODE_ENV !== 'prod') {
    config({
        path: '.env'
    })
}
const sendMail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            service: process.env.SMTP_SERVICE,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.SMTP_USER, 
            to: options.email,          
            subject: options.subject, 
            text: options.message    
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Failed to send email:', error);
    }
};

export default sendMail;
