const { getAllPosts, createPost, updatepost } = require("../modules/post");


async function create_post(req, res) {
  let post = req.body;
  await createPost(post);
  res.status(200).json(post);
}


async function getpost(req, res) {
  let posts = await getAllPosts();
  res.json(posts);
}

async function update_post (req, res) {
  let modifiedpost = req.body;
  let id = req.params.id;
  await updatepost(id, modifiedpost);
  res.status(200).json(id, modifiedpost);
}

module.exports = {
  update_post,
  getpost,
  create_post,
};
