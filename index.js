// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  // Clear existing content
  postList.innerHTML = "";

  // Loop through posts
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

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const posts = await response.json();

    displayPosts(posts);

    return posts; // ✅ REQUIRED for tests

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Export for testing (VERY IMPORTANT)
if (typeof module !== "undefined") {
  module.exports = { fetchPosts, displayPosts };
}

// Run the function
fetchPosts();