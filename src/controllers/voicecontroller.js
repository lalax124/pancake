const states = require("../data/states.json");

const { transcribeAudio } = require("../services/voice");

const {
    askHeritageAI
} = require("../services/aiservice");


async function voiceChat(req, res) {

    try {

        // Check audio
        if (!req.file) {
            return res.status(400).json({
                error: "Audio file is required"
            });
        }

        const { state, language, history } = req.body;

        // Check state
        if (!state) {
            return res.status(400).json({
                error: "State is required"
            });
        }

        const stateData = states[state.toLowerCase()];

        if (!stateData) {
            return res.status(404).json({
                error: "State not found"
            });
        }


        // STEP 1
        // Convert voice → text

        const transcript = await transcribeAudio(
            req.file.path,
            language
        );


        // STEP 2
        // Send text → Heritage AI

        const answer = await askHeritageAI(
            stateData,
            transcript,
            history ? JSON.parse(history) : [],
            language || "en"
        );


        // STEP 3
        // Send everything back

        res.json({

            state: stateData.name,

            transcript: transcript,

            answer: answer,

            language: language || "auto"

        });

    } catch (error) {

        console.error("VOICE ERROR:", error);

        res.status(500).json({
            error: "Voice AI failed",
            details: error.message
        });
    }
}


module.exports = {
    voiceChat
};