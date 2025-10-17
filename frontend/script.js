// 🟦 Existing Post Button Alert
document.getElementById('post-btn').addEventListener('click', () => {
  // Open the modal instead of alert
  document.getElementById('modal').style.display = 'flex';
});

// 🟦 Close Modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// Close modal on background click
window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal');
  if (e.target === modal) modal.style.display = 'none';
});

// 🟦 Post Form Submission
const postForm = document.getElementById('post-form');
const postsContainer = document.getElementById('posts-container');

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('post-title').value.trim();
  const content = document.getElementById('post-content').value.trim();
  const author = document.getElementById('post-author').value.trim();
  const category = document.getElementById('post-category').value;
  const date = new Date().toLocaleString();

  if (title && content && author && category) {
    // Create post card
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');
    postCard.setAttribute('data-category', category);

    postCard.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
      <div class="post-meta">
        <span class="author">👤 ${author}</span>
        <span class="timestamp">🕒 ${date}</span>
      </div>
      <div class="post-footer">
        <button class="like-btn">🤍 Like</button>
        <span class="category-tag">#${category}</span>
      </div>
    `;

    // Add post to the top
    postsContainer.prepend(postCard);

    // Reset form + close modal
    postForm.reset();
    document.getElementById('modal').style.display = 'none';

    // Re-attach like functionality for new post
    addLikeButtonListeners();
  }
});

// 🟦 Like Button Functionality (preserve + improve)
function addLikeButtonListeners() {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.textContent = btn.textContent.includes('❤️')
        ? '🤍 Like'
        : '❤️ Liked';
    });
  });
}
addLikeButtonListeners();

// 🟦 Search Functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.toLowerCase();
  const posts = document.querySelectorAll('.post-card');

  posts.forEach((post) => {
    const title = post.querySelector('h3').textContent.toLowerCase();
    const author = post.querySelector('.author').textContent.toLowerCase();
    if (title.includes(searchTerm) || author.includes(searchTerm)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
});

// 🟦 Category Filter
const filterCategory = document.getElementById('filter-category');
filterCategory.addEventListener('change', () => {
  const selected = filterCategory.value;
  const posts = document.querySelectorAll('.post-card');

  posts.forEach((post) => {
    if (selected === 'all' || post.getAttribute('data-category') === selected) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
});

// 🟩 Smooth Modal Animation on Load
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
});
