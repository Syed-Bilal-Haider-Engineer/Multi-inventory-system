import sgMail from '@sendgrid/mail';
import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'prod') {
    config({ path: '.env' });
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (options) => {
    const msg = {
        to: options.email, // Change to your recipient
        from: 'bilal.haider@dataqhealth.com', // Change to your verified sender
        subject: options.subject,
        text: options.message,
        html: `<p>${options.message}</p>`, // Use the actual message content
    };

    try {
        const response = await sgMail.send(msg);
        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email'); // Re-throw to handle in calling function
    }
};

export default sendMail;
