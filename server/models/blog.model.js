const mongoose = require('mongoose');


const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: new Date().toLocaleString(),
  },
  datetime: {
    type: String,
    default: new Date().getTime(),
  },
  category: {
    type: String,
    required: true
  },
  coverPhoto: {
    type: String,
    required: true
  },
  content: {
    image: {
      type: String,
      required: true
    },
    textContent: {
      type: String,
      required: true
    }
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
      commenterName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      commentDate: {
        type: Date,
        default: new Date().toLocaleDateString(),
      },
      commentDatetime: {
        type: String,
        default: new Date().getTime(),
      },
      commentText: {
        type: String,
      }
    }
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
})

const BlogModel = new mongoose.model("Blog", blogSchema)

module.exports = BlogModel;