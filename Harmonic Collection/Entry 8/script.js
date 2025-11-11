// 별 배경
(() => {
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d', { alpha: true });
  let w=0, h=0, stars=[];
  function resize(){
    w = innerWidth; h = innerHeight;
    canvas.width = w; canvas.height = h;
    const count = Math.floor(w*h*0.00018);
    stars = Array.from({length:count},()=>({
      x:Math.random()*w, y:Math.random()*h, r:Math.random()*1.5+0.3, s:Math.random()*0.7+0.2
    }));
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle="#fff";
    stars.forEach(st=>{
      ctx.globalAlpha = 0.6 + Math.sin(Date.now()*0.002*st.s)*0.4;
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI*2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  addEventListener('resize', resize);
  resize(); draw();
})();

// 라이트박스
(() => {
  const box=document.getElementById('lightbox');
  const img=box.querySelector('img');
  const closeBtn=box.querySelector('.close');
  const open=src=>{if(!src)return;img.src=src;box.classList.add('open');};
  const close=()=>{box.classList.remove('open');img.src='';};
  document.querySelectorAll('.cat-sticker').forEach(b=>{
    b.addEventListener('click',()=>{
      if(b.dataset.dragging==='1'){b.dataset.dragging='0';return;}
      const src=b.getAttribute('data-img');if(src)open(src);
    });
  });
  closeBtn.addEventListener('click',close);
  box.addEventListener('click',e=>{if(e.target===box)close();});
  addEventListener('keydown',e=>{if(e.key==='Escape')close();});
})();

// 스티커 드래그
(() => {
  const area=document.querySelector('.stickers-area');
  document.querySelectorAll('.draggable').forEach(el=>{
    let offX=0,offY=0,drag=false;
    const down=(x,y)=>{drag=true;const r=el.getBoundingClientRect();offX=x-r.left;offY=y-r.top;};
    const move=(x,y)=>{
      if(!drag)return;
      const a=area.getBoundingClientRect();
      let nx=x-a.left-offX, ny=y-a.top-offY;
      nx=Math.max(0,Math.min(a.width-el.offsetWidth,nx));
      ny=Math.max(0,Math.min(a.height-el.offsetHeight,ny));
      el.style.left=nx+'px'; el.style.top=ny+'px'; el.dataset.dragging='1';
    };
    const up=()=>{drag=false;setTimeout(()=>el.dataset.dragging='0',0);};
    el.addEventListener('mousedown',e=>{down(e.clientX,e.clientY);});
    window.addEventListener('mousemove',e=>move(e.clientX,e.clientY));
    window.addEventListener('mouseup',up);
    el.addEventListener('touchstart',e=>{const t=e.touches[0];if(t)down(t.clientX,t.clientY);});
    window.addEventListener('touchmove',e=>{const t=e.touches[0];if(t)move(t.clientX,t.clientY);});
    window.addEventListener('touchend',up);
  });
})();
