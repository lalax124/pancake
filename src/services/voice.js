const fs = require("fs");
const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

async function transcribeAudio(filePath, language) {
    try {
        const transcription = await groq.audio.transcriptions.create({
            file: fs.createReadStream(filePath),

            model: "whisper-large-v3-turbo",

            language: language || undefined,

            response_format: "json",

            temperature: 0
        });

        return transcription.text;

    } finally {
        // Delete temporary audio file
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
}

module.exports = {
    transcribeAudio
};