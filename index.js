// Write your code here! 
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
