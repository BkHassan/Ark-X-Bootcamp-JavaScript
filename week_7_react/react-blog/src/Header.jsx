import React from "react";

// Header Component
const Header = ({ title, links, isLoggedIn, onLoginLogout, backgroundColor = "bg-gray-800" }) => {
  return (
    <nav
      className={`flex justify-between items-center h-16 px-4 flex-row-reverse p-10 ${backgroundColor}`}
    >
      <div className="">
        <ul className="flex space-x-4 m-4 font-medium">
          {links.map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                className="text-lg text-white hover:text-red-500"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <span className="text-5xl font-bold hover:text-gray-200 p-4 text-red-500 font-serif">
        {title}
      </span>
      <button
        className="bg-transparent border border-white rounded px-4 py-2 hover:bg-gray-700 hover:text-red-500 font-medium"
        onClick={onLoginLogout}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

// App Component
function App() {
  const links = [
    { text: "log in", href: "/" },
    // { text: "About", href: "/about" },
  ];

  return (
    <div className="App">
      <Header title=" Blog" links={links} />
    </div>
  );
}

export default App;
