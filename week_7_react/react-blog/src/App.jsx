import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./index.css";

const blogTitle = "Blog";

const links = [
  { text: "log in", href: "/" },
  // { text: "About", href: "/about" },
];
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial state: not logged in
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      description: "A beginner's guide to building user interfaces with React.",
    },
    {
      id: 2,
      title: "Top 10 React Tips and Tricks",
      description:
        "Boost your React development skills with these practical tips.",
    },
  ]);

  const handleAddPost = (newPost) => {
    setBlogPosts([...blogPosts, { ...newPost, id: generateId() }]);
  };

  const handleDeletePost = (postId) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== postId));
  };

  const handleUpdatePost = (postId, updatedPost) => {
    setBlogPosts(
      blogPosts.map((post) =>
        post.id === postId ? { ...post, ...updatedPost } : post
      )
    );
  };

  const generateId = () => {
    return Math.floor(Math.random() * 100000); // Just for demonstration, you might want to use a more robust method to generate IDs
  };

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <Header
        title={blogTitle}
        link={links}
        isLoggedIn={isLoggedIn}
        onLoginLogout={handleLoginLogout}
      />
      <MainContent
        posts={blogPosts}
        onAddPost={handleAddPost}
        onDeletePost={handleDeletePost}
        onUpdatePost={handleUpdatePost}
      />
      <Footer />
    </div>
  );
}

export default App;
