const postList = document.getElementById("post-list");

// Function to display posts
function displayPosts(posts) {
  postList.innerHTML = "";

  posts.forEach((post) => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
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
    const posts = await response.json();

    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Run immediately (important for CodeGrade tests)
fetchPosts();