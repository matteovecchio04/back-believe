const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const dbRoutes = require("./routes/dbRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api", dbRoutes);

app.get("/", (req, res) => {
    res.send("Server attivo");
});

const PORT = process.env.PORT || 3360;

app.listen(PORT, () => {
    console.log("Server avviato su porta " + PORT);
});