const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', ()=> nav.classList.toggle('open'));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('quoteForm');
form?.addEventListener('submit', (e)=>{
  // Basic client-side validation
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[type="email"]');
  if(!name.value.trim() || !email.value.trim()){
    e.preventDefault();
    alert('Please fill in your name and email so we can reach you.'); 
  }
});