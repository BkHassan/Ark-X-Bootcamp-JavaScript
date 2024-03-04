const mongoose = require("mongoose");
// const { stringify } = require("querystring");

// schema
const postSchema = mongoose.Schema({
  author: { type: String, require: true },
  title: { type: String, require: true },
  content: { type: String, require: true },
  date: { type: Number, require: true },
  category: { type: String, require: true },
});

const Post = mongoose.model("Post", postSchema);

async function createPost(post) {
  try {
    await Post.create(post);
  } catch (err) {
    console.log(" post didn't created");
  }
}

async function getAllPosts() {
  const post = await Post.find();
  return post;
}

async function updatepost(id, modifiedpost) {
  try {
    await Post.findByIdUpdate(
      id,
      modifiedpost,
      { new: true },
      function (err, modifiedpost) {
        if (err) {
          console.log(err);
        } else {
          console.log('post updted:  ', modifiedpost);
      }
  });
  } catch (err) {
    console.log(" post didn't updated");
  }
}

module.exports = {
  updatepost,
  getAllPosts,
  createPost,
};
