'use strict';

// 등장 시간 (밀리초)
(() => {
  const CONFIG = {
    imageDelay: 250,
    imageDuration: 900,
    titleDelayAfterImage: 100,
    titleDuration: 550,
    listDelayAfterTitle: 100,
    rowInterval: 100,
    rowDuration: 450,
    buttonDelayAfterList: 150,
    buttonDuration: 450
  };

  function initFloor() {
    const page = document.getElementById('floor-page');
    if (!page) return;
    const visual = document.getElementById('visual-image');
    const overlay = document.getElementById('visual-overlay');
    const list = document.getElementById('floors');
    const rows = Array.from(page.querySelectorAll('.floor-row'));
    const enter = document.getElementById('enter');
    if (!visual || !overlay || !list || !enter) return;

    // 이미지 경로는 CSS 파일이 아니라 현재 HTML(floor/index.html) 기준.
    const imageUrl = new URL('../img/branch.png', document.baseURI).href;
    const photo = new Image();
    photo.onload = () => {
      visual.style.backgroundImage = `url("${imageUrl}")`;
      visual.classList.add('has-image');
    };
    photo.onerror = () => {
      // 이미지가 없을 때는 ORBIS 로고 대체 배경을 보여줌.
      visual.classList.add('image-unavailable');
    };
    photo.src = imageUrl;

    const elements = [visual, overlay, ...rows, enter];
    const finish = () => {
      page.classList.add('complete');
      list.classList.add('ready');
      elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        typeof Element.prototype.animate !== 'function') {
      finish();
      return;
    }

    const animate = (el, from, to, duration) => {
      const animation = el.animate([from, to], {
        duration,
        easing: 'cubic-bezier(.2,.7,.2,1)',
        fill: 'forwards'
      });
      animation.onfinish = () => {
        el.style.opacity = String(to.opacity);
        el.style.transform = to.transform;
        animation.cancel();
      };
    };

    // JS가 로드되지 않아도 본문이 보이도록 CSS의 기본값은 표시 상태.
    elements.forEach(el => { el.style.opacity = '0'; });
    visual.style.transform = 'scale(1.035)';
    overlay.style.transform = 'translateY(10px)';
    rows.forEach(el => { el.style.transform = 'translateY(12px)'; });
    enter.style.transform = 'translateY(8px)';

    const imageEnd = CONFIG.imageDelay + CONFIG.imageDuration;
    const titleStart = imageEnd + CONFIG.titleDelayAfterImage;
    const listStart = titleStart + CONFIG.titleDuration + CONFIG.listDelayAfterTitle;

    setTimeout(() => animate(visual, {opacity:0,transform:'scale(1.035)'}, {opacity:1,transform:'scale(1)'}, CONFIG.imageDuration), CONFIG.imageDelay);
    setTimeout(() => animate(overlay, {opacity:0,transform:'translateY(10px)'}, {opacity:1,transform:'translateY(0)'}, CONFIG.titleDuration), titleStart);
    rows.forEach((row, i) => {
      setTimeout(() => animate(row, {opacity:0,transform:'translateY(12px)'}, {opacity:1,transform:'translateY(0)'}, CONFIG.rowDuration), listStart + i * CONFIG.rowInterval);
    });
    const listEnd = listStart + Math.max(0, rows.length - 1) * CONFIG.rowInterval + CONFIG.rowDuration;
    setTimeout(() => {
      list.classList.add('ready');
      animate(enter, {opacity:0,transform:'translateY(8px)'}, {opacity:1,transform:'translateY(0)'}, CONFIG.buttonDuration);
    }, listEnd + CONFIG.buttonDelayAfterList);
    setTimeout(finish, listEnd + CONFIG.buttonDelayAfterList + CONFIG.buttonDuration + 60);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloor, {once:true});
  } else {
    initFloor();
  }
})();
