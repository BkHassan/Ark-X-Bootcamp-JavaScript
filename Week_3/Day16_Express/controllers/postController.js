const { getAllPosts, createPost } = require("../modules/post");

function getpost(req, res) {
  let posts = getAllPosts();
  res.json(posts);
}

function create_post(req, res) {
  let post = req.body;
  console.log(req.body);
  createPost(post);
  res.status(200).json(post);
}

module.exports = {
  getpost,
  create_post,
};
