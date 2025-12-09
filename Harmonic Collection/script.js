const feelingsText = document.getElementById("feelingsText");
const audio = document.getElementById("bgAudio");

function tryPlayAudio() {
  if (!audio) return;

  audio.play().catch(() => {
    // 브라우저가 자동재생 막으면 여기서 조용히 무시
  });
}

// 페이지 열릴 때 바로 재생 시도
window.addEventListener("load", () => {
  tryPlayAudio();
});

if (feelingsText) {
  let changed = false;

  feelingsText.addEventListener("click", () => {
    // 텍스트 바꾸기
    if (!changed) {
      feelingsText.innerHTML =
        "It feels good to feel things.<br>It makes me feel alive.";
      feelingsText.classList.add("feelings-text-paragraph");
      changed = true;
    }

    // 클릭을 사용자 상호작용으로 인식하니까 여기서도 재생 한 번 더 시도
    tryPlayAudio();
  });
}
