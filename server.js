require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

/* =========================
   🔑 CORS CONFIG (CRITICAL)
   ========================= */
app.use(
  cors({
    origin: "*", // allow requests from Netlify
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* 🔑 HANDLE PREFLIGHT REQUESTS */
app.options("*", cors());

/* =========================
   MIDDLEWARE
   ========================= */
app.use(express.json());

/* =========================
   ROUTES
   ========================= */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

/* =========================
   DEFAULT ROUTE (OPTIONAL)
   ========================= */
app.get("/", (req, res) => {
  res.send("BinoTech Backend is running");
});

/* =========================
   SERVER START
   ========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
