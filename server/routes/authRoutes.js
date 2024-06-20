const router = require('express').Router();

const {
  postLogin,
  postSignup,
  getLogout
} = require("../controllers/authController");
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.post("/login", postLogin);
router.post("/signup", postSignup);
router.get("/logout", isAuthenticated, getLogout);


module.exports = router;