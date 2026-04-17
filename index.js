// index.js - Random Social Media Lab

// Async function to fetch posts and display them
async function fetchAndDisplayPosts() {
  try {
    // Fetch posts from JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    // Display the posts
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  
  // Clear existing content
  postList.innerHTML = '';
  
  // Loop through posts and create elements
  posts.forEach(post => {
    // Create li element
    const li = document.createElement('li');
    
    // Create h1 for title
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    
    // Create p for body
    const p = document.createElement('p');
    p.textContent = post.body;
    
    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
    
    // Append li to ul#post-list
    postList.appendChild(li);
  });
}

// Wait for DOM to load, then fetch and display posts
document.addEventListener('DOMContentLoaded', fetchAndDisplayPosts);