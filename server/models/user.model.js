const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

  fullName: {
    type: String,
    require: true,
  },
  userName: {
    unique: true,
    type: String,
    require: true,
  },
  about: {
    type: String,
    default:""
  },
  email: {
    require: true,
    type: String,
    unique: true,
  },
  imageUrl: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&s"
  },
  password: {
    require: true,
    type: String
  },
  role: {
    type: String,
    default: "Content Writer"
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
    }
  ],
  subscribers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]

},
  { timestamp: true }
)

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel; 