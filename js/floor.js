'use strict';
// 밀리초(ms). 이 객체의 숫자만 변경해 등장 시점을 조절할 수 있습니다.
const CONFIG = {
  imageDelay: 800,
  imageDuration: 1600,
  titleDelayAfterImage: 150,
  titleDuration: 650,
  listDelayAfterTitle: 200,
  rowInterval: 150,
  rowDuration: 600,
  buttonDelayAfterList: 250,
  buttonDuration: 600
};

(() => {
  const page = document.getElementById('floor-page');
  const visual = document.getElementById('visual-image');
  const overlay = document.querySelector('.visual-overlay');
  const list = document.getElementById('floors');
  const rows = [...document.querySelectorAll('.floor-row')];
  const enter = document.getElementById('enter');
  const skip = document.getElementById('skip');
  const timers = [];
  let finished = false;
  const later = (fn, delay) => timers.push(window.setTimeout(() => { if (!finished) fn(); }, delay));
  const finish = () => {
    if (finished) return;
    finished = true;
    timers.forEach(clearTimeout);
    [visual, overlay, enter, ...rows].forEach(el => { el.getAnimations().forEach(a => a.cancel()); el.style.opacity = '1'; el.style.transform = 'none'; });
    page.classList.add('complete');
    list.classList.add('ready');
    skip.hidden = true;
  };
  skip.addEventListener('click', finish);

  // 이미지가 없거나 로딩에 실패하면 CSS로 준비된 로고 대체 화면을 사용합니다.
  const photo = new Image();
  photo.onload = () => { visual.style.backgroundImage = 'url("../img/branch.jpg")'; visual.classList.add('has-image'); };
  photo.onerror = () => {};
  photo.src = '../img/branch.jpg';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { finish(); return; }
  const animate = (el, from, to, duration) => {
    const a = el.animate([from, to], {duration, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'});
    a.onfinish = () => { if (!finished) { el.style.opacity = String(to.opacity); el.style.transform = to.transform; a.cancel(); } };
  };
  const imageEnd = CONFIG.imageDelay + CONFIG.imageDuration;
  const titleStart = imageEnd + CONFIG.titleDelayAfterImage;
  const listStart = titleStart + CONFIG.titleDuration + CONFIG.listDelayAfterTitle;
  later(() => animate(visual,{opacity:0,transform:'scale(1.05)'},{opacity:1,transform:'scale(1)'},CONFIG.imageDuration),CONFIG.imageDelay);
  later(() => animate(overlay,{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'},CONFIG.titleDuration),titleStart);
  rows.forEach((row, i) => later(() => animate(row,{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'},CONFIG.rowDuration),listStart + i*CONFIG.rowInterval));
  const listEnd = listStart + (rows.length-1)*CONFIG.rowInterval + CONFIG.rowDuration;
  later(() => { list.classList.add('ready'); animate(enter,{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'},CONFIG.buttonDuration); },listEnd+CONFIG.buttonDelayAfterList);
  later(finish,listEnd+CONFIG.buttonDelayAfterList+CONFIG.buttonDuration+30);
})();
