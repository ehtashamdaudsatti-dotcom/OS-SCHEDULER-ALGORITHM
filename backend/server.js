const express = require("express");
const cors = require("cors");
require("dotenv").config();

const schedulerRoutes = require("./routes/schedulerRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CPU Scheduling Backend API is Running 🚀"
  });
});

// API Routes
app.use("/api", schedulerRoutes);

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

// Export app for Vercel
module.exports = app;

// Local Development
if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}