const btn = document.getElementById('theme');

btn.addEventListener('click', toggleTheme);

function toggleTheme() {
   document.body.classList.toggle('theme2');
}