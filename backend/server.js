const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const schedulerRoutes = require("./routes/schedulerRoutes");

// Default Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "CPU Scheduling API is Running..."
    });
});

// API Routes
app.use("/api", schedulerRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});