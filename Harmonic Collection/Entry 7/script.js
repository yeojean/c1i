// 터치/모바일용 토글
const photo = document.getElementById('photo');
photo.setAttribute('tabindex', '0');

function toggleOverlay() {
  photo.classList.toggle('is-open');
}

photo.addEventListener('click', toggleOverlay);
photo.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleOverlay();
  }
});
