/* ORBIS Creature Dossier – interactions are fictional archive UI, not live data. */
(() => {
  'use strict';

  const specimens = {
    humanoid: {
      index: '01 / 03',
      title: '인간형 관측 개체',
      summary: '신체의 기본 윤곽이 인간과 유사한 개체. 외형만으로 사고 능력, 의사소통 가능성 또는 적대성을 판정할 수 없습니다.',
      morph: 'HUMANOID',
      hostility: '개체별 판단',
      origin: '미확인'
    },
    beast: {
      index: '02 / 03',
      title: '야수형 관측 개체',
      summary: '사족보행이나 포식동물과 닮은 움직임이 관찰되는 개체. 외형과 공격 성향은 연관성이 확정되지 않았습니다.',
      morph: 'BEAST-LIKE',
      hostility: '개체별 판단',
      origin: '미확인'
    },
    unknown: {
      index: '03 / 03',
      title: '미분류 관측 개체',
      summary: '알려진 생물의 신체 구조와 비교하기 어려운 개체. 관측 자료가 부족해 임시로 미분류 항목에 보관합니다.',
      morph: 'UNCLASSIFIED',
      hostility: '판정 보류',
      origin: '미확인'
    }
  };

  const steps = [
    '이상 징후를 확인하고 관제 기록을 생성합니다. 현장 접근 전 주변 민간인과 환경의 안전을 우선 검토합니다.',
    '형태·위치·이동 양상을 관측해 개체 존재를 확인합니다. 촬영이나 감응 기록은 개체의 의도를 단정하는 근거가 아닙니다.',
    '실제 행동, 주변 피해, 접촉 위험 등을 검토합니다. 형태만으로 적대성이나 처리 방식을 확정하지 않습니다.',
    '평가 결과에 따라 관찰·격리·구조·제압 등을 선택합니다. 대응 이후에는 현장 기록을 보존하고 후속 조사에 인계합니다.'
  ];

  const specimenButtons = Array.from(document.querySelectorAll('[data-specimen]'));
  const dossierDetail = document.getElementById('cr-dossier-detail');
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  specimenButtons.forEach((button) => button.addEventListener('click', () => {
    const data = specimens[button.dataset.specimen];
    if (!data) return;
    specimenButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-selected', active);
      item.setAttribute('aria-pressed', String(active));
    });
    setText('cr-detail-index', data.index);
    setText('cr-detail-title', data.title);
    setText('cr-detail-summary', data.summary);
    setText('cr-detail-morph', data.morph);
    setText('cr-detail-hostility', data.hostility);
    setText('cr-detail-origin', data.origin);
    if (dossierDetail) dossierDetail.dataset.specimen = button.dataset.specimen;
  }));

  const stepButtons = Array.from(document.querySelectorAll('[data-step]'));
  stepButtons.forEach((button) => button.addEventListener('click', () => {
    const index = Number(button.dataset.step);
    if (!Number.isInteger(index) || !steps[index]) return;
    stepButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    setText('cr-step-detail-counter', `STEP ${String(index + 1).padStart(2, '0')}`);
    setText('cr-step-detail-text', steps[index]);
  }));

  const menuButton = document.getElementById('cr-mobile-menu');
  const menuPanel = document.getElementById('cr-mobile-panel');
  if (menuButton && menuPanel) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
      menuPanel.hidden = !open;
    });
    menuPanel.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menuPanel.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', '메뉴 열기');
    }));
  }

  // Content is accessible without scrolling animations; motion is progressive enhancement.
  const revealItems = document.querySelectorAll('.cr-section-heading, .cr-definition, .cr-specimen, .cr-step');
  const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (motionAllowed && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.add('cr-is-visible');
        observer.unobserve(target);
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -10px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  }
})();
