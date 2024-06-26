const multer = require("multer");
const path = require("path")


const storageProfile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/profilePictures');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
})
const storageCoverPhoto = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/coverPhotos');
  },
  filename: function (req, file, cb) {
    // cb(null, Date.now() + '-' + file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
})

exports.uploadProfile = multer({ storage: storageProfile });
exports.uploadCoverPhoto = multer({ storage: storageCoverPhoto });
