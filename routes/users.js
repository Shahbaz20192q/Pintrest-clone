const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/pin")
const plm = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  password: String,
  contect: Number,
  profileImage: String,
  boards: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});


userSchema.plugin(plm);
module.exports = mongoose.model("user", userSchema);