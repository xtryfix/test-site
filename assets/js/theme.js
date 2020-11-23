let page = document.querySelector('.page');
let btn = document.querySelector('.theme');

if ('dark-theme' === localStorage.getItem('theme')) {
  page.classList.toggle('dark-theme');
}

btn.onclick = function() {
  if (page.classList.toggle('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme');
  }
};
