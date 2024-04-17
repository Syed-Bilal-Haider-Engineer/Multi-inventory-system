import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()} "-" + ${Math.round.apply(Math.random() * 1e9)}`;
      const fileName = file.originalname.split('.')[0];
      cb(null, `${fileName}"-"${uniqueSuffix}.png`);
    },
  });
const upload = multer({ storage: storage });
export default upload;