const card = document.getElementById('card-ims');
const overlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('modalClose');

card.addEventListener('click', () => {
   overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
   overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
   if (e.target === overlay) {
      overlay.classList.remove('active');
   }
});