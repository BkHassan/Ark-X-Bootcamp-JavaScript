const fs = require("fs");
const data = require("../posts.json");

function getAllPosts() {
  return data.posts;
}

function createPost(str) {
  data.posts.push(str);
  fs.writeFileSync("../posts.json", JSON.stringify(data));
}

module.exports = {
  getAllPosts,
  createPost,
};
