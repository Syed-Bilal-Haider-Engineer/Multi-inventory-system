import multer from 'multer';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();
const uploadDir = path.join(__dirname, "./uploads");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.split('.')[0];
        cb(null, `${fileName}-${Date.now()}.png`);  // Corrected to remove the extra quote
    },
});

const upload = multer({ storage: storage });

export default upload;
