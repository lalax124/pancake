const express = require("express");
const multer = require("multer");

const {
    voiceChat
} = require("../controllers/voicecontroller");


const router = express.Router();


// Temporary uploaded audio files
const upload = multer({
    dest: "/tmp/heritage-uploads/"
});


// Voice conversation
router.post(
    "/chat",
    upload.single("audio"),
    voiceChat
);


module.exports = router;