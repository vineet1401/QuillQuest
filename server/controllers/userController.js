const BlogModel = require("../models/blog.model");
const UserModel = require("../models/user.model");



exports.getUserData = async(req, res) => {
  const userId = req.user;
  try {
    const user = await UserModel.findOne({ _id: userId }).select("-password")
    if(user){
      return res.status(200).send({success: true, message:"Fetch User data successfully", data: user})
    }else{
      return res.status(400).send({success: false, message:"Please Try Again"})
    }
  } catch (error) {
    console.log("error in userController -> getUserData",error);
    return res.status(500).send({success: false, message:"Please Try Again"})
  }
}

exports.postUpdateProfile = async(req, res) => {
  const data = req.body;
  const image = req.file.filename;
  console.log(data)
  try {
    const updateUser = await UserModel.findOneAndUpdate(
      {
        _id : req.user
      },
      {...data, imageUrl : image  },
      {
        new: true
      }
    )
    if(updateUser){
      return res.status(200).send({success: true, message:"User Update successful", data: updateUser})
    }else{
      return res.status(400).send({success: false, message:"Userupdate Failed"})
    }
    
  } catch (error) {
    console.log("erron in userController -> postUpdateProfile", error)
    return res.status(500).send({success: false, message:"Please Try Again"})
  }
}

exports.subscribeUser = async(req, res) => {
  const userId = req.user;
  const { subscribeId } = req.params;
  
  try {
    const subscribe = await UserModel.findOneAndUpdate(
      {
        _id : subscribeId,
      },
      {
        $push : {subscribers : userId}
      },
      {
        new:true
      }
    )
    if(!subscribe){
      return res.status(400).send({success: false, message:"Subscribe unsccesfull"})
    }
    return res.status(200).send({success:true, message:"Subscribe Successfull"})
    return
  } catch (error) {
    console.log("erron in userController -> subscribeUser", error)
    return res.status(500).send({success:false, message:"Please try again"})
  }
}

exports.unsubscribeUser = async(req, res) => {
  const userId = req.user;
  const { unsubscribeId } = req.params;
  
  try {
    const subscribe = await UserModel.findOneAndUpdate(
      {
        _id : unsubscribeId,
      },
      {
        $pull : {subscribers : userId}
      },
      {
        new:true
      }
    )
    if(!subscribe){
      return res.status(400).send({success: false, message:"Unsubscribe unsccesfull"})
    }
    return res.status(200).send({success:true, message:"Unsubscribe Successfull"})
    return
  } catch (error) {
    console.log("erron in userController -> unubscribeUser", error)
    return res.status(500).send({success:false, message:"Please try again"})
  }
}

