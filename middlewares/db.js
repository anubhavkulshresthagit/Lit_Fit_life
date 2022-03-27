
const mongoose = require('mongoose') 

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Database Connected')
  } catch (err) {
    console.log(err)
  }
}
module.exports = connectDB