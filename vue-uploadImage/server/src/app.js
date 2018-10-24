const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Images = require('./Images')
var multer = require('multer');
const app = express();
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config({ path: '.env' });
mongoose.connect("mongodb://127.0.0.1/vueupload", { useNewUrlParser: true })


var storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    cb(req.flash('error', 'Only image files are allowed!'), false);
    // return cb(new Error('Only image files are allowed!'), false);

  }
  cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'zuber',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//INDEX 
app.get('/index', (req, res) => {
  Images.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
    }
  });
})

//CREATE 
app.post('/index', upload.single('image'), (req, res) => {
  cloudinary.uploader.upload(req.file.path, function (result) {
    req.body.image = result.secure_url;
    Images.create(req.body.image, function (err, image) {
      if (err) {
        console.log(err);
      }
      res.send(image)
      
    });
  });
})

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`server started on port ${port}`));