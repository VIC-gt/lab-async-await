// Write your code here! const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch using async/await
async function fetchPosts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Display posts
async function displayPosts() {
  const posts = await fetchPosts();

  if (!posts) return;

  const container = document.getElementById("posts");

  // clear before adding (important for tests)
  container.innerHTML = "";

  posts.forEach(post => {
    const postDiv = document.createElement("div");

    postDiv.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    container.appendChild(postDiv);
  });
}

// Run automatically
displayPosts();

// export for testing (IMPORTANT)
module.exports = {
  fetchPosts,
  displayPosts
};
// Select container where posts will be displayed
const postContainer = document.getElementById("posts");

// Async function to fetch and display posts
async function getPosts() {
  try {
    // Fetch data from external API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Convert response to JSON
    const data = await response.json();

    // Loop through posts and display them
    data.forEach((post) => {
      // Create elements
      const postDiv = document.createElement("div");
      const title = document.createElement("h3");
      const body = document.createElement("p");

      // Assign content
      title.textContent = post.title;
      body.textContent = post.body;

      // Build structure
      postDiv.appendChild(title);
      postDiv.appendChild(body);

      // Add to page
      postContainer.appendChild(postDiv);
    });

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Call function
getPosts();
