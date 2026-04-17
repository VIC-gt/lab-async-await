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

// Async function
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // ✅ IMPORTANT: ensure DOM exists
  const postList = document.getElementById("post-list");
  if (!postList) return;

  displayPosts(posts);

  return posts; // ✅ THIS MAKES TEST WAIT PROPERLY
}

// ✅ DO NOT AUTO RUN (THIS IS THE KEY FIX)
// fetchPosts(); ❌ REMOVE THIS LINE

// ✅ EXPORT FOR TESTING
if (typeof module !== "undefined") {
  module.exports = { fetchPosts, displayPosts };
}