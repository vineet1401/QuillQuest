const { isAuthenticated } = require('../middlewares/authMiddleware');
const userController = require("../controllers/userController");
const { uploadProfile } = require('../utils/multer');

const router = require('express').Router();

router.get("/get-user-data", isAuthenticated, userController.getUserData);
router.post("/update-profile", isAuthenticated, uploadProfile.single('imageUrl'), userController.postUpdateProfile);

module.exports = router;