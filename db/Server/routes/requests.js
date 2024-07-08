const express = require("express");
const router = express.Router();
const db = require("../db");

// GET: Return a list of requests
router.get("/", async (req, res, next) => {
  try {
    const [results] = await db.query("SELECT * FROM requests");
    res.json(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
