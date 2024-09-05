// multerConfig.js
import multer from "multer";

const storage = multer.memoryStorage(); // using memory storage to get the files in memory
const upload = multer({ storage });

const uploadDesignFiles = upload.fields([
  { name: "architectImage", maxCount: 1 },
  { name: "houseImage", maxCount: 1 },
  { name: "allImages" },
  { name: "file", maxCount: 1 },
]);

export default uploadDesignFiles;
