(function () {
  const path = location.pathname.replace(/\\/g, "/");
  const depth = path.split("/").filter(Boolean).length;
  const inSub = /\/(org|world|history|rules|people|uniform)(\/|$)/.test(path);
  const base = inSub ? "../" : "";

  const pages = [
    ["index.html", "홈"],
    ["world/index.html", "세계관"],
    ["history/index.html", "연혁"],
    ["org/index.html", "조직도"],
    ["rules/index.html", "규칙"],
    ["people/index.html", "구성원 소개"],
    ["uniform/index.html", "복장"]
  ];

  function currentHref(href) {
    if (href === "index.html") {
      return !inSub && /(index\.html)?$/.test(path.split("/").pop() || "");
    }
    return path.indexOf("/" + href.replace("/index.html", "")) !== -1 || path.endsWith("/" + href);
  }

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <a class="skip" href="#content">본문 바로가기</a>
      <div class="topbar">
        <div class="topbar-inner">
          <div class="top-links">
            <span class="badge-fict">가상세계관 공식기록</span>
            <span>궤도질서관리기구 대한민국지부</span>
          </div>
          <div class="top-links">
            <a href="${base}index.html">한국어</a>
            <a href="${base}sitemap.html">사이트맵</a>
          </div>
        </div>
      </div>
      <div class="site-header">
        <div class="header-inner">
          <a class="brand" href="${base}index.html">
            <img src="${base}img/emblem.svg" alt="ORBIS 대한민국지부 휘장">
            <span class="brand-text">
              <strong>ORBIS 대한민국지부</strong>
              <span>궤도질서관리기구 · Republic of Korea Branch</span>
            </span>
          </a>
          <div class="header-tools">
            <form class="search-box" id="search-form" role="search">
              <label class="sr-only" for="q" style="position:absolute;left:-999px">검색어</label>
              <input id="q" name="q" type="search" placeholder="메뉴·규정 검색">
              <button type="submit">검색</button>
            </form>
            <button class="menu-toggle" type="button" id="menu-toggle" aria-expanded="false">메뉴</button>
          </div>
        </div>
      </div>
      <nav class="gnb" id="gnb" aria-label="주 메뉴">
        <div class="gnb-inner">
          ${pages.map(([href, label]) => {
            const url = href === "index.html" ? base + "index.html" : base + href;
            const cur = currentHref(href) ? ' aria-current="page"' : "";
            return `<a href="${url}"${cur}>${label}</a>`;
          }).join("")}
        </div>
      </nav>
    `;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-links">
          <a href="${base}rules/index.html">복무규정</a>
          <a href="${base}org/index.html">조직도</a>
          <a href="${base}sitemap.html">사이트맵</a>
        </div>
        <address>
          (가상) 서울특별시 종로구 사직로 1, 궤도질서관리청사 7층 · 대표전화 02-000-ORBS · 팩스 02-000-0000<br>
          기관명: 궤도질서관리기구 대한민국지부(ORBIS ROK Branch) · 지부장 한서윤
        </address>
        <div>© ORBIS Republic of Korea Branch. All rights reserved.</div>
        <p class="warn">본 사이트는 창작 세계관의 공식 기록 페이지이며, 대한민국 실존 정부·공공기관과 무관합니다.</p>
      </div>
    `;
  }

  const toggle = document.getElementById("menu-toggle");
  const gnb = document.getElementById("gnb");
  if (toggle && gnb) {
    toggle.addEventListener("click", function () {
      const open = gnb.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const form = document.getElementById("search-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const q = (document.getElementById("q").value || "").trim();
      location.href = base + "sitemap.html?q=" + encodeURIComponent(q);
    });
  }
})();
