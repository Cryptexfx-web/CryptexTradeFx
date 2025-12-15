const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/users", auth("admin"), async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
