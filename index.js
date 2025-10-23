// small interaction: FAQ accordion and keyboard-friendly carousel focus
document.querySelectorAll('.faq-item').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // simple toggle content insertion (for clone demo only)
    if(!expanded){
      const p = document.createElement('div');
      p.className = 'faq-content';
      p.style.padding='12px 20px';
      p.style.background='#131313';
      p.style.color='#ddd';
      p.textContent = 'Answer text — Netflix offers a wide variety...';
      btn.after(p);
      btn.setAttribute('aria-expanded','true');
    } else {
      const next = btn.nextElementSibling;
      if(next && next.classList.contains('faq-content')) next.remove();
      btn.setAttribute('aria-expanded','false');
    }
  });
});

// basic keyboard scroll for carousel
const carousel = document.getElementById('carousel');
if(carousel){
  carousel.addEventListener('keydown', e=>{
    if(e.key === 'ArrowRight') carousel.scrollBy({left:200,behavior:'smooth'});
    if(e.key === 'ArrowLeft') carousel.scrollBy({left:-200,behavior:'smooth'});
  });
}
