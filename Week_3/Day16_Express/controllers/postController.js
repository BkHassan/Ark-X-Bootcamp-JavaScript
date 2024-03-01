const { getAllPosts, createPost } = require("../modules/post");


async function create_post(req, res) {
  let post = req.body;
  await createPost(post);
  res.status(200).json(post);
}


async function getpost(req, res) {
  let posts = await getAllPosts();
  res.json(posts);
}


module.exports = {
  getpost,
  create_post,
};
