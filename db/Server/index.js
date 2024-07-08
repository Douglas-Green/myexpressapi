const express = require("express");
const app = express();
const port = 8080;
const logRequests = require("./middleware/logRequests");

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(logRequests);

// Import routes
const characterRoutes = require("./routes/characters");
const requestRoutes = require("./routes/requests");

// Use routes
app.use("/characters", characterRoutes);
app.use("/requests", requestRoutes);

// Custom error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
