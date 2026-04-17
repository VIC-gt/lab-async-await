// Display posts on the page
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  // Clear existing content
  postList.innerHTML = "";

  // Loop through posts
  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li");
    const title = document.createElement("h1");
    const body = document.createElement("p");

    // Add text content
    title.textContent = post.title;
    body.textContent = post.body;

    // Append elements
    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

// Fetch posts using async/await
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Check if response is OK
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const posts = await response.json();

    // Display posts
    displayPosts(posts);

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Call the function
fetchPosts();