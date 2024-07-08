const db = require("../db");

const logRequests = async (req, res, next) => {
  try {
    await db.query(
      "INSERT INTO requests (endpoint, method, status) VALUES (?, ?, ?)",
      [req.originalUrl, req.method, res.statusCode]
    );
  } catch (err) {
    console.error("Failed to log request:", err);
  }
  next();
};

module.exports = logRequests;
