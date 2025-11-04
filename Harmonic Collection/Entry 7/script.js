// 이미지 클릭 시 하얀 오버레이 열고 닫기 (모바일 호환)
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
