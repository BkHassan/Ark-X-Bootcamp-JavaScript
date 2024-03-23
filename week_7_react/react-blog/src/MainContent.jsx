import React from "react";

function MainContent({ posts, backgroundColor = "bg-gray-100" }) {
  // Handle empty posts array
  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-700">No posts available yet.</p>;
  }

  return (
    <div className={`p-7 text-center ${backgroundColor}`}>
      <h1>Publish your passions, your way</h1>
      <h3>Create a unique and beautiful blog easily.</h3>
      <button className="bg-red-500 rounded-sm p-2 m-4 text-white font-medium">
        Create your blog
      </button>
      <ul className="flex gap-3 list-none mt-10 ">
        {" "}
        {/* Wrap posts in an unordered list */}
        {posts.map((post) => (
          <li key={post.title} className="mb-4 shadow rounded-lg p-4 bg-white">
            {" "}
            {/* Add Tailwind classes */}
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>{" "}
            {/* Add Tailwind classes */}
            <p className="text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainContent;
