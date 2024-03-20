const projects_btn = document.getElementById("projects-btn");
const tech_btn = document.getElementById("tech-btn");
const projects = document.getElementById("projects");
const technologies = document.getElementById("technologies");
const nav_tech = document.getElementById("techOnly");
const nav_pjs = document.getElementById("pr");
const moon = document.getElementById("moon");
const toggleSwitch = document.querySelector("#toggleSwitch");
const lightTheme = document.querySelector("#lightTheme");
const darkTheme = document.querySelector("#darkTheme");
let counter = 0;
// darkTheme.disabled = true;
// localStorage.setItem("theme", "light");
// if (localStorage.getItem("theme") === "dark") {
//   moon.classList.add("fa-sun");
//   moon.classList.remove("fa-moon");
//   // toggleSwitch.checked = true;
//   lightTheme.disabled = true;
//   darkTheme.disabled = false;
// } else {
//   moon.classList.remove("fa-sun");
//   moon.classList.add("fa-moon");
//   lightTheme.disabled = false;
//   darkTheme.disabled = true;
// }

moon.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(localStorage.getItem("theme"));
  if (localStorage.getItem("theme") === "dark") {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    localStorage.setItem("theme", "light");
  } else {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    localStorage.setItem("theme", "dark");
  }
});

nav_tech.addEventListener("click", () => {
  projects_btn.classList.remove("active");
  tech_btn.classList.add("active");
  projects.classList.add("hidden");
  technologies.classList.remove("hidden");
  // technologies.classList.add("flex");
});
nav_pjs.addEventListener("click", () => {
  projects_btn.classList.add("active");
  tech_btn.classList.remove("active");
  projects.classList.remove("hidden");
  technologies.classList.add("hidden");
  // technologies.classList.add("flex");
});

projects_btn.addEventListener("click", () => {
  projects_btn.classList.add("active");
  tech_btn.classList.remove("active");
  projects.classList.remove("hidden");
  technologies.classList.add("hidden");
});

tech_btn.addEventListener("click", () => {
  projects_btn.classList.remove("active");
  tech_btn.classList.add("active");
  projects.classList.add("hidden");
  technologies.classList.remove("hidden");
  // technologies.classList.add("flex");
});

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    lightTheme.disabled = true;
    darkTheme.disabled = false;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightTheme.disabled = false;
    darkTheme.disabled = true;
  }
}

// toggleSwitch.addEventListener("change", switchTheme, false);

// Set the initial theme based on local storage
// if (localStorage.getItem("theme") === "dark") {
//   moon.classList.add("fa-sun");
//   moon.classList.remove("fa-moon");
//   // toggleSwitch.checked = true;
//   lightTheme.disabled = true;
//   darkTheme.disabled = false;
// } else {
//   moon.classList.remove("fa-sun");
//   moon.classList.add("fa-moon");
//   lightTheme.disabled = false;
//   darkTheme.disabled = true;
// }
