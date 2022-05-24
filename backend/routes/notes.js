const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchUser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// Route1 : fetch all the notes using: GET "/api/auth/fetchallnotes" . login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json([notes]);
  } catch (error) {}
});

// Route2 : Add a new note using: POST "/api/auth/addnote" . login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a description").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // if there are errors return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {}
  }
);

module.exports = router;
