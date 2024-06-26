const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const multer = require("multer");


const MONGODB_URI = "mongodb://127.0.0.1:27017/QuillQuest"
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
const blogRoute = require("./routes/blogRoutes");




const app = express();

const corsOptions = {
    origin:'http://localhost:5173',
  }

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, '../client/dist')));


app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/blog", blogRoute)

app.get("/", function (req, res) {
  res.send("hello")
})
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
// });

mongoose
    .connect(MONGODB_URI)
    .then(() =>{
        app.listen(3000, ()=>{
            console.log('connect to database on the port', 3000)
        })
    })
    .catch((error)=>{
        console.log('unable to connect with DB');
        console.log(error);
    })