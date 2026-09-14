const states = require("../data/states.json");

const {
    askHeritageAI,
    compareHeritage,
    createHeritageJourney
} = require("../services/aiservice");


async function chat(req, res) {

    try {

        const {
            state,
            question,
            history,
            language
        } = req.body;


        if (!state || !question) {

            return res.status(400).json({
                error: "State and question are required"
            });

        }


        const stateData = states[state.toLowerCase()];


        if (!stateData) {

            return res.status(404).json({
                error: "State not found"
            });

        }


        const answer = await askHeritageAI(
            stateData,
            question,
            history || [],
            language || "en"
        );


        res.json({

            state: stateData.name,

            question: question,

            answer: answer

        });


    } catch (error) {

        console.error("AI ERROR:", error);

        res.status(500).json({
            error: "AI service failed"
        });

    }
}


async function explain(req, res) {
    try {
        const { state, topic } = req.body;

        if (!state || !topic) {
            return res.status(400).json({
                error: "State and topic are required"
            });
        }

        const stateData = states[state.toLowerCase()];

        if (!stateData) {
            return res.status(404).json({
                error: "State not found"
            });
        }

        const answer = await askHeritageAI(
            stateData,
            `Explain ${topic} in simple terms.`
        );

        res.json({
            state: stateData.name,
            topic: topic,
            answer: answer
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "AI service failed"
        });
    }
}


async function compare(req, res) {
    try {
        const { state1, state2 } = req.body;

        if (!state1 || !state2) {
            return res.status(400).json({
                error: "Two states are required"
            });
        }

        const state1Data = states[state1.toLowerCase()];
        const state2Data = states[state2.toLowerCase()];

        if (!state1Data || !state2Data) {
            return res.status(404).json({
                error: "One or both states not found"
            });
        }

        const answer = await compareHeritage(
            state1Data,
            state2Data
        );

        res.json({
            state1: state1Data.name,
            state2: state2Data.name,
            comparison: answer
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "AI comparison failed"
        });
    }
}


async function journey(req, res) {
    try {
        const { state, interests } = req.body;

        if (!state || !interests) {
            return res.status(400).json({
                error: "State and interests are required"
            });
        }

        const stateData = states[state.toLowerCase()];

        if (!stateData) {
            return res.status(404).json({
                error: "State not found"
            });
        }

        const answer = await createHeritageJourney(
            stateData,
            interests
        );

        res.json({
            state: stateData.name,
            interests: interests,
            journey: answer
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Journey creation failed"
        });
    }
}
function suggestions(req, res) {

    const { state } = req.params;

    const stateData = states[state.toLowerCase()];

    if (!stateData) {

        return res.status(404).json({
            error: "State not found"
        });

    }

    res.json({

        state: stateData.name,

        suggestions: [
            `What is ${stateData.name} famous for?`,
            "How does the climate influence traditional clothing?",
            "What are the most important traditional foods?",
            "What traditional arts and crafts are found here?",
            "Tell me about the architecture.",
            "What music and dances are traditionally associated with this state?",
            "Tell me about its traditional beliefs and festivals."
        ]

    });
}


module.exports = {
    chat,
    explain,
    compare,
    journey,
    suggestions
};