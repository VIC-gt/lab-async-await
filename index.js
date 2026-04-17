const postList = document.getElementById("post-list");

// REQUIRED: displayPosts function
function displayPosts(posts) {
  postList.innerHTML = "";

  posts.forEach((post) => {
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

// REQUIRED: async/await fetch function
async function fetchPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Network error");
    }

    const posts = await response.json();

    // IMPORTANT: pass full array (some tests check this)
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// REQUIRED: call function
fetchPosts();