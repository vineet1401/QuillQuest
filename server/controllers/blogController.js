const BlogModel = require("../models/blog.model");
const UserModel = require("../models/user.model");


exports.postOrUpdateBlog = async (req, res) => {
  const userId = req.user;
  const coverPhoto = req.file.filename;
  console.log(coverPhoto);
  try {
    const data = await BlogModel.create(
      {
        ...req.body, coverPhoto, author: userId, "content.image": coverPhoto,
      }
    )
    console.log(data)
    if (data) {
      await UserModel.findOneAndUpdate(
        { _id: userId },
        { $push: { blogs: data._id } },
        { new: true }
      );
      return res.status(200).send({ success: true, message: "Blog Publish successfull" })

    }
    else return res.status(400).send({ success: false, message: "Please try again" })

  } catch (error) {
    console.log("error in blogController -> postBlog: " + error)
    return res.status(500).send({ success: false, message: "Please try again" });
  }
}

exports.fetchAllBlog = async(req, res) => {
  try {
    const blogs = await BlogModel.find().sort({ datetime: -1 });
    console.log(blogs )
    if (!blogs) {
      return res.status(400).send({ success: false, message: "No blog found" })
    }
    return res.status(200).send({ success: true, message: "Blog fetched successfully", data: blogs })
  }catch (error) {
    console.log("error in blogController -> fetchAllBlog: " + error)
    return res.status(500).send({ success: false, message: "Please try again" })
  }
}

exports.likeBlog = async (req, res) => {
  const { blogId } = req.params
  const userId = req.body;


  try {
    const isLikedBefore = BlogModel.findOne({ $in })
    const like = await UserModel.findOneAndUpdate(
      {
        _id: blogId,
      },
      {
        $push: { likes: userId }
      },
      {
        new: true
      }
    )
    if (!subscribe) {
      return res.status(400).send({ success: false, message: "Unsubscribe unsccesfull" })
    }
    return res.status(200).send({ success: true, message: "Unsubscribe Successfull" })
    return
  } catch (error) {
    console.log("erron in userController -> unubscribeUser", error)
    return res.status(500).send({ success: false, message: "Please try again" })
  }
}