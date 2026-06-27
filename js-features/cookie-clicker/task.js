const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');

let clicks = 0;
let isBig = true;
let lastClickTime = null;

cookie.onclick = function () {
  clicks++;
  counter.textContent = clicks;

  cookie.width = isBig ? 180 : 200;
  isBig = !isBig;

  const now = new Date();

  if (lastClickTime !== null) {
    const diff = now - lastClickTime;
    const cps = 1000 / diff;
    speed.textContent = cps.toFixed(2);
  }

  lastClickTime = now;
};
