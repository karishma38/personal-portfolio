// ─── Main JS ─────────────────────────────────────────────────────────────
// Requires content/cases.js to be loaded first.

function openModal(id){
  const c=cases[id];
  const mets=c.metrics.map(m=>`<div class="mmet"><div class="mmn">${m.num}</div><div class="mml">${m.label}</div></div>`).join('');
  const tabH=c.tabs.map((t,i)=>`<button class="mtab${i===0?' act':''}" onclick="swTab(this,${i},'${id}')">${t}</button>`).join('');
  const keys=['story','process','artifacts','retro','research','brd','analysis','proposals'];
  const panH=c.tabs.map((t,i)=>{
    const content=c[keys[i]]||'<p style="color:var(--ink2);font-size:.88rem;font-weight:300">More coming soon.</p>';
    return `<div class="mpanel${i===0?' act':''}" id="p-${id}-${i}">${content}</div>`;
  }).join('');
  document.getElementById('mbox').innerHTML=`
    <div class="mhero ${c.bg}"><div class="cpat"></div>
      <button class="mcls" onclick="closeMo()">✕</button>
      <div class="mhc"><div class="mhtag">${c.tag}</div><div class="mhtit">${c.title}</div></div>
    </div>
    <div class="mbody">
      <div class="mmets">${mets}</div>
      <div class="mtabs">${tabH}</div>
      ${panH}
    </div>`;
  document.getElementById('mo').classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('mo').scrollTop=0;
}
function swTab(btn,i,id){
  btn.closest('.mbody').querySelectorAll('.mtab').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act');
  btn.closest('.mbody').querySelectorAll('.mpanel').forEach(p=>p.classList.remove('act'));
  document.getElementById(`p-${id}-${i}`).classList.add('act');
}
function closeMo(){document.getElementById('mo').classList.remove('open');document.body.style.overflow='';}
function closeMoOuter(e){if(e.target===document.getElementById('mo'))closeMo();}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMo();});
const obs=new IntersectionObserver(ee=>{ee.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});},{threshold:0.08});
document.querySelectorAll('.fu').forEach(el=>obs.observe(el));

function toggleMoreCases(){
  const m=document.getElementById('moreCases');
  const btn=document.getElementById('showMoreLabel');
  const arr=document.getElementById('showMoreArrow');
  const showing=m.style.display!=='none';
  m.style.display=showing?'none':'block';
  btn.textContent=showing?'Show 3 more':'Show less';
  arr.style.transform=showing?'':'rotate(180deg)';
}
// Scroll progress bar + ribbon show/hide + active nav
window.addEventListener('scroll',()=>{
  const st=window.scrollY;
  const dh=document.documentElement.scrollHeight-window.innerHeight;
  document.getElementById('scrollBar').style.width=(st/dh*100)+'%';

  // Show ribbon after hero
  const heroH=document.getElementById('hero').offsetHeight;


  // Highlight active nav section
  const sections=['hero','about','work','skills','thinking','contact'];
  let current='hero';
  sections.forEach(id=>{
    const el=document.getElementById(id);
    if(el&&st>=el.offsetTop-120)current=id;
  });
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('nav-current',a.getAttribute('href')==='#'+current);
  });
},{ passive:true });

// Mobile menu
function toggleMobileMenu(){
  const menu=document.getElementById('mobileMenu');
  const overlay=document.getElementById('mobileMenuOverlay');
  const btn=document.getElementById('hamburger');
  const open=menu.classList.toggle('open');
  overlay.classList.toggle('open',open);
  btn.classList.toggle('open',open);
  document.body.style.overflow=open?'hidden':'';
}
function closeMobileMenu(){
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('mobileMenuOverlay').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMobileMenu();});

// Dark mode toggle
(function(){
  const btn=document.getElementById('themeToggle');
  const html=document.documentElement;
  const saved=localStorage.getItem('theme');
  if(saved==='dark'){
    html.setAttribute('data-theme','dark');
  }
  btn.addEventListener('click',()=>{
    const isDark=html.getAttribute('data-theme')==='dark';
    html.setAttribute('data-theme',isDark?'light':'dark');
    localStorage.setItem('theme',isDark?'light':'dark');
  });
})();
