document.getElementById('post-btn').addEventListener('click', () => {
  alert('📝 Post creation feature coming soon!');
});

const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.textContent = '❤️ Liked';
  });
});
