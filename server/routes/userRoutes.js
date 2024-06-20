const { isAuthenticated } = require('../middlewares/authMiddleware');
const { getUserData, postUpdateProfile} = require("../controllers/userController")

const router = require('express').Router();

router.get("/get-user-data", isAuthenticated, getUserData);
router.post("/update-profile", isAuthenticated, postUpdateProfile);

module.exports = router;