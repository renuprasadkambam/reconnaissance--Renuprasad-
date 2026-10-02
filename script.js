document.querySelectorAll('.source-card').forEach(card=>{
  card.addEventListener('click',()=>document.getElementById(card.dataset.target)?.scrollIntoView({behavior:'smooth',block:'start'}));
});
const links=[...document.querySelectorAll('.sidebar nav a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));
    }
  });
},{rootMargin:'-25% 0px -65% 0px'});
sections.forEach(s=>observer.observe(s));
