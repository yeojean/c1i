/* 별 배경 */
(()=>{
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d',{alpha:true});
  const DPR = Math.max(1, Math.min(2, window.devicePixelRatio||1));
  let W=0,H=0,stars=[];
  function resize(){
    W = canvas.width  = Math.floor(innerWidth  * DPR);
    H = canvas.height = Math.floor(innerHeight * DPR);
    canvas.style.width  = innerWidth+'px';
    canvas.style.height = innerHeight+'px';
    build();
  }
  function build(){
    const n = Math.floor((W*H)/(14000*DPR));
    stars = Array.from({length:n},()=>({
      x:Math.random()*W, y:Math.random()*H, r:Math.random()*1.8+.3,
      a:Math.random()*Math.PI*2, s:Math.random()*0.3+0.05
    }));
  }
  function tick(){
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#fff';
    for(const s of stars){
      s.a += s.s*0.02;
      const tw = (Math.sin(s.a)+1)/2;
      ctx.globalAlpha = .3 + tw*.7;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r*DPR,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  addEventListener('resize', resize);
  resize(); tick();
})();

/* 스티커: hero 영역 안에서만 드래그 + 2개만 라이트박스 */
(()=>{
  const container = document.querySelector('.hero');
  const stickers  = container.querySelectorAll('.sticker');
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('.lightbox-img');
  const lbClose = lb.querySelector('.close');

  let drag=null, bounds=null;

  stickers.forEach(el=>{
    el.addEventListener('pointerdown', (e)=>{
      bounds = container.getBoundingClientRect();
      el.setPointerCapture(e.pointerId);
      drag = {
        el,
        startX: e.clientX, startY: e.clientY,
        ox: e.clientX - (bounds.left + el.offsetLeft),
        oy: e.clientY - (bounds.top  + el.offsetTop)
      };
    });

    el.addEventListener('pointermove', (e)=>{
      if(!drag || drag.el!==el) return;
      let x = e.clientX - bounds.left - drag.ox;
      let y = e.clientY - bounds.top  - drag.oy;
      // 컨테이너 내부로 제한
      x = Math.max(0, Math.min(x, bounds.width  - el.offsetWidth));
      y = Math.max(0, Math.min(y, bounds.height - el.offsetHeight));
      el.style.left = x + 'px';
      el.style.top  = y + 'px';
    });

    el.addEventListener('pointerup', (e)=>{
      if(!drag || drag.el!==el) return;
      const moved = Math.hypot(e.clientX-drag.startX, e.clientY-drag.startY);
      const url = el.dataset.photo || '';
      drag=null;
      if(moved < 6 && url){
        lbImg.src = url;
        lb.classList.add('open');
        lb.setAttribute('aria-hidden','false');
      }
    });
  });

  lbClose.addEventListener('click', ()=>{
    lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); lbImg.src='';
  });
  lb.addEventListener('click', (e)=>{
    if(e.target===lb){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); lbImg.src=''; }
  });
  addEventListener('keydown', (e)=>{
    if(e.key==='Escape' && lb.classList.contains('open')){
      lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); lbImg.src='';
    }
  });
})();

/* 접시 텍스트 -> 하얀 메모 모달 */
(()=>{
  const trigger = document.getElementById('plateText');
  const modal   = document.getElementById('noteModal');
  const copy    = document.getElementById('noteCopy');
  const close   = modal.querySelector('.note-close');

  const text = trigger.textContent.trim();

  trigger.addEventListener('click', ()=>{
    copy.textContent = text;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  });

  close.addEventListener('click', ()=>{
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  });

  modal.addEventListener('click', (e)=>{
    if(e.target===modal){
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden','true');
    }
  });

  addEventListener('keydown', (e)=>{
    if(e.key==='Escape' && modal.classList.contains('open')){
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden','true');
    }
  });
})();

