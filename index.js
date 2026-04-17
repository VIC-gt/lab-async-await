// Function to display posts
function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  // Clear previous posts
  ul.innerHTML = "";

  // Loop through posts
  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Add content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append elements
    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

// Async function to fetch data
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Convert to JSON
    const posts = await response.json();

    // Display posts
    displayPosts(posts);

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Call the function
fetchPosts();