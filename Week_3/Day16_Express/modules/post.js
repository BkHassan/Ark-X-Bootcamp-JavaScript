const fs = require("fs");
const data = require("D:/dev/Bootcamp ark x/Week_3/Day16_Express/posts.json");

function getAllPosts() {
  return data.posts;
}

function createPost(str) {
  data.posts.push(str);
  fs.writeFileSync("D:/dev/Bootcamp ark x/Week_3/Day16_Express/posts.json", JSON.stringify(data));
}

module.exports = {
  getAllPosts,
  createPost,
};
