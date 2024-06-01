const $loading = document.querySelector('.loading');
const $loading2 = document.querySelector('.loading2');
const $wrap = document.getElementById('wrap');

window.addEventListener('load', () => {
  window.setTimeout(() => {
    $loading.classList.add('hide');
    $loading2.classList.add('hide');
  }, 4000);
});
