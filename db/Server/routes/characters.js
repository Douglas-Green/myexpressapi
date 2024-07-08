const express = require("express");
const router = express.Router();
const db = require("../db");

// GET: Return a list of characters
router.get("/", async (req, res, next) => {
  try {
    const [results] = await db.query("SELECT * FROM characters");
    res.json(results);
  } catch (err) {
    next(err);
  }
});

// POST: Insert a new character
router.post("/", async (req, res, next) => {
  try {
    const {name, description} = req.body;
    const [result] = await db.query(
      "INSERT INTO characters (name, description) VALUES (?, ?)",
      [name, description]
    );
    res.json({id: result.insertId, name, description});
  } catch (err) {
    next(err);
  }
});

// PUT: Update an existing character
router.put("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const {name, description} = req.body;
    await db.query(
      "UPDATE characters SET name = ?, description = ? WHERE id = ?",
      [name, description, id]
    );
    res.json({id, name, description});
  } catch (err) {
    next(err);
  }
});

// DELETE: Remove an existing character
router.delete("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    await db.query("DELETE FROM characters WHERE id = ?", [id]);
    res.json({message: "Character deleted"});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
