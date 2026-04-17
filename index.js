// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Async fetch function
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  displayPosts(posts);

  return posts; // ✅ REQUIRED
}

// ✅ VERY IMPORTANT: wait for DOM before running
document.addEventListener("DOMContentLoaded", fetchPosts);

// ✅ EXPORT FOR TESTING
if (typeof module !== "undefined") {
  module.exports = { fetchPosts, displayPosts };
}