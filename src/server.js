const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stateRoutes = require("./routes/state");
const aiRoutes = require("./routes/ai");
const voiceRoutes = require("./routes/voiceroute");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
    res.json({
        message: "Indian Heritage API is running!"
    });
});

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/api/states", stateRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/voiceroute", voiceRoutes);

module.exports = app;

// Local development only. Vercel imports the app directly.
if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
