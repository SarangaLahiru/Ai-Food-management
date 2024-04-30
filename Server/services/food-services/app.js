const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Multer configuration
const storage = multer.diskStorage({
    destination: path.join(__dirname, "uploads"),
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
}).single('file');

// Route to handle file upload
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error("File upload error:", err);
            return res.status(500).send("File upload failed");
        }
        res.send("File uploaded successfully");
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
