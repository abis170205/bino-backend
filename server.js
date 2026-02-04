require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

/* 🔑 CORS — MUST BE FIRST */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

/* 🔑 HANDLE PREFLIGHT — CRITICAL */
app.options("*", cors());

/* BODY PARSER */
app.use(express.json());

/* ROUTES */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

/* HEALTH CHECK */
app.get("/", (req, res) => {
  res.send("BinoTech Backend is running");
});

/* START SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
