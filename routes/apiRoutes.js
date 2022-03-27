const express =require('express') 
const router = express.Router()
const {uploadImage,getImages,wallData, addPost, fetchPosts,upvote,sendmsg} = require('../controllers/apiController.js')
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
let upload = multer({ storage, fileFilter });

router.post('/upload',upload.single('photo'), uploadImage);
router.get('/images/:id', getImages);
router.get('/walldata', wallData);

router.get('/upvote/:id', upvote);

router.post('/add_post', addPost)
router.get('/fetch_posts', fetchPosts)
router.post('/sendmsg', sendmsg)


module.exports = router