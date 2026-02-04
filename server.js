require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

/* ✅ CORS (Node 22 compatible) */
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ✅ Body parser */
app.use(express.json());

/* ✅ Routes */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

/* ✅ Health check */
app.get("/", (req, res) => {
  res.send("BinoTech Backend is running");
});

/* ✅ Start server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
