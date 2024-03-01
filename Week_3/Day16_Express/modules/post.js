const mongoose = require("mongoose");
// const { stringify } = require("querystring");


// schema
const postSchema = mongoose.Schema({
  author: { type: String, require: true },
  title: { type: String, require: true },
  content: { type: String, require: true },
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

module.exports = {
  getAllPosts,
  createPost,
};
