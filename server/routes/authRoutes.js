const router = require('express').Router();

const authController = require("../controllers/authController");
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);
router.get("/logout", isAuthenticated, authController.getLogout);


module.exports = router;