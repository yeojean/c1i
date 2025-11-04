// Entry 7 JS — loaded check + 안전 가드
document.addEventListener('DOMContentLoaded', () => {
  console.log('Entry7 JS loaded');

  const photo = document.getElementById('photo');
  if (!photo) {
    console.warn('photo element not found');
    return;
  }

  // 접근성 및 토글 정의
  photo.tabIndex = 0;
  function toggleOverlay() {
    photo.classList.toggle('is-open');
  }

  // 마우스/터치/키보드 모두 지원
  photo.addEventListener('click', toggleOverlay);
  photo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleOverlay();
    }
  });
});

