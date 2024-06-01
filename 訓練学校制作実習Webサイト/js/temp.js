const $header = document.getElementById('header_temp');
console.log($header);
$header.insertAdjacentHTML(
  'afterbegin',
  `<header>
  <div id="btn" class="vis"><img src="images/menuicon.png" /></div>
  <div id="logo">
    <a href="index.html"><img src="images/logo.png" /></a>
  </div>
</header>`
);
// ↑　ヘッダーのテンプレート　↑

const $nav_temp = document.getElementById('nav_temp');
console.log($nav_temp);
$nav_temp.insertAdjacentHTML(
  'afterbegin',
  `<nav class="off">
          <ul>
            <li><a href="index.html"><img src="images/icon01.png">&nbsp;TOP</a></li>
            <li><a href="lunch.html"><img src="images/icon02.png">&nbsp;LUNCH</a></li>
            <li><a href="drink.html"><img src="images/icon03.png">&nbsp;DRINK</a></li>
            <li><a href="sweet.html"><img src="images/icon04.png">&nbsp;SWEETS</a></li>
            <li><a href="access.html"><img src="images/icon05.png">&nbsp;ACCESS</a></li>
            <li><a href="reserve.html"><img src="images/icon06.png">&nbsp;RESERVE</a></li>
          </ul>
        </nav>`
);
// ↑　ナビのテンプレート　↑

const $btn = document.getElementById('btn');
const $nav = document.querySelector('nav');
$btn.addEventListener('click', () => {
  $nav.classList.add('on');
  $nav.classList.remove('off');
  $btn.classList.add('hid');
  $btn.classList.remove('vis');
});
const $main = document.querySelector('main');
$main.addEventListener('click', () => {
  $nav.classList.add('off');
  $nav.classList.remove('on');
  $btn.classList.add('vis');
  $btn.classList.remove('hid');
});
const $footer = document.getElementById('footer_temp');
$footer.addEventListener('click', () => {
  $nav.classList.add('off');
  $nav.classList.remove('on');
  $btn.classList.add('vis');
  $btn.classList.remove('hid');
});
// ↑　#btnのスクリプト　↑

// const $cc = document.getElementById('cc');
// ↑　時間差表示のスクリプト　↑

console.log($footer);
$footer.insertAdjacentHTML(
  'afterbegin',
  `<footer><p><small>&copy;2024 ForestCafe.All Rights Reserved.</small></p></footer>`
);
// ↑　フッターのテンプレート　↑
