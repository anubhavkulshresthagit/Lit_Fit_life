let User = require('../models/User.js');
const path = require('path')
const Post = require('../models/Post')

exports.uploadImage = (req,res) =>{
    const name = req.body.name;
    const description = req.body.description;
    const date=req.body.date;
    const photo = req.file.filename;
    const weight=req.body.weight;
    const height=req.body.height;
    const age=req.body.age
    const newUserData = {
        name,photo,description,date,weight,height,age
    }

    const newUser = new User(newUserData);

    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
}
exports.getImages = (req,res) =>{
    const id = req.params.id
    User.find({_id: id}, function(err, docs) {
        if (!err) { 
            res.sendFile(path.resolve('images',`${docs[0].photo}`))
        }
        else {
            res.status(404).send("Image Not Found");
        }
    });
}
exports.wallData = async (req,res) =>{
    try{
        const userData = await User.find({})
        res.send(userData)
    } catch (err){
        res.status(404).send("No Wall Data Found")
    }
    
}

exports.upvote = async(req,res) =>{
    try{
        const id = req.params.id
        let upd = await User.findOneAndUpdate({_id: id}, { $inc: {'upVotes': 1 } });
        res.status(200).send("Updated")
    } catch(err){
        res.status(404).send("Not Found")
    }
}
exports.addPost = async (req,res) =>{
    
    const { title, content } = req.body
    Post.create(
      {
        title,
        content,
      },
      (err, post) => {
        if (err) {
          return res.status(400).json({ message: 'Invalid post data' })
        }
        return res.status(201).json({ message: 'Post Added Successfuly' })
      }
    )
  }
  exports.fetchPosts = async (req,res) =>{
      
    try {
      const posts = await Post.find({}).sort({ createdAt: -1 })
      // console.log(posts)
      return res.status(201).send(posts)
    } catch (err) {
      return res.status(404).json({ message: 'No Post Found' })
    }
  }

  exports.sendmsg = async (req,res) =>{
  const accountSid = process.env.accountSid;
  const authToken = process.env.authToken;
  const client = require('twilio')(accountSid, authToken);
  const {phone,message}= req.body;
  client.messages
  .create({
     body: message,
     from: '+15187206078',
     to: phone
   })
  .then(message =>{
    console.log(message)
    res.status(200).send("Message sent")
  } );
  }