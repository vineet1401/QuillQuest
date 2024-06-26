const { isAuthenticated } = require("../middlewares/authMiddleware");
const router = require("express").Router();
const { uploadCoverPhoto } = require("../utils/multer");

const blogController = require("../controllers/blogController");


router.post("/postBlog", isAuthenticated, uploadCoverPhoto.single("coverPhoto"), blogController.postOrUpdateBlog);

router.post("/likeBlog", isAuthenticated, blogController.likeBlog);

router.get("/fetchAllBlog", blogController.fetchAllBlog);



module.exports = router;