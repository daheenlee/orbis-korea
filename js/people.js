(()=>{try{document.documentElement.classList.add("js");

/* ▼ 인물 데이터. 사진은 아래 세 칸에 경로만 넣으면 돼요.
   bust: 반신 일러스트 / ph: 요원증 증명사진 / gal: 하단 일러스트 목록 (비워 두면 기본 도형) */
const M=[{"id": "seo-ihyeon", "n": "서이현", "e": "Lee-hyun Seo", "age": "21세", "g": "여", "nick": "서이", "h": "168cm", "body": "군더더기 없이 단단한 균형형", "mbti": "ISTJ", "day": "타투이스트 (직접 운영하는 타투샵)", "ac": "#c8323c", "team": "대응팀 1", "role": "선임 현장요원", "unit": "균열 대응팀 1팀 전방 제압", "no": "ORB-1-001", "tag": "1팀 · 전방 제압", "feat": ["턱선 길이 검은 머리, 앞머리는 뒤로 넘김", "날카로운 눈매와 짙은 피곤함", "오른쪽 쇄골 아래 흉터", "손등·손가락 마디의 오래된 흉터", "팔뚝 안쪽 꽃 타투 (소매를 올리면 보임)"], "say": "서이라고 불러요. 낮엔 타투샵에서 손님 받고, 손님 없으면 헤드셋 끼고 멍때려요. 칭찬은 3초 어버버하다가 고맙다고 하는 편이에요. 책임은 제가 져요. 혼자서도 괜찮… 아니, 괜찮다고 할게요.", "kw": ["도도함", "책임감", "혼자 짊어짐", "락", "고양이 그림"], "bust": "../img/YEHYUN_BS1.png", "ph": "../img/LEEHYUN.png", "gal": []},
{"id": "kang-taehee", "n": "강태희", "e": "Tae-hee Kang", "age": "22세", "g": "남", "nick": "별명 생기는거싫어함", "h": "183cm", "body": "슬림하고 탄탄한 잔근육형", "mbti": "INTP", "day": "홈 프로텍터", "ac": "#3f7fbf", "team": "대응팀 2", "role": "현장요원", "unit": "균열 대응팀 2팀 탐지·공간", "no": "ORB-2-014", "tag": "2팀 · 탐지·공간", "feat": ["짧고 숱이 보통인 흑발", "왼쪽 눈 아래 작은 눈물점", "오른쪽 볼에 작은 밴드", "외출할 땐 늘 캡모자", "근무 중 소음 차단 이어피스"], "say": "안녕하세요. 근무 중엔 매뉴얼대로 움직이는 게 편합니다. 업무는 업무대로, 감정이 들어가는 순간 피곤해지는거 아시죠,", "kw": ["무표정", "과묵", "직장인 스위치", "불닭볶음면","야구"], "bust": "../img/TAHEE_BS2.png", "ph": "../img/TYAHEE.png", "gal": []},
{"id": "choi-hyun", "n": "최현", "e": "Hyun Choi", "age": "32세", "g": "남", "nick": "-", "h": "189cm", "body": "어깨가 넓고 탄탄한 체형", "mbti": "ENFP", "day": "미정", "ac": "#c8323c", "team": "대응팀 1", "role": "1팀 팀장", "unit": "균열 대응팀 1팀", "no": "ORB-1-000", "tag": "1팀 · 팀장", "feat": ["밝은 갈색 머리, 앞머리가 이마 위로 내려옴", "따뜻한 갈색 눈, 눈꼬리가 살짝 내려감", "웃을 때 생기는 웃음 주름", "왼쪽 귀 뒤 희미한 흉터 (자세히 봐야 보임)"], "say": "최현! 1팀 팀장이에요. 밥은 제가 살게요, 먼저 먹어요. 다친 데요? 별거 아니에요, 진짜로요. 선배가 먼저 가는 거예요, 이건 양보 안 해요.", "kw": ["쾌남", "푸근함", "손해 보는 선택", "따뜻함"], "bust": "../img/HYUN.png", "ph": "../img/HYUN.png", "gal": []},
{"id": "na-kyungtae", "n": "나경태", "e": "Kyung-tae Na", "age": "52세", "g": "남", "nick": "-", "h": "미정", "body": "미정", "mbti": "INFJ", "day": "행정 출신 (비각성자)", "ac": "#c9a227", "team": "지부장", "role": "지부장", "unit": "오르비스 지부 총괄", "no": "ORB-0-001", "tag": "지부 총괄", "feat": ["온화한 인상", "말수가 적음", "각성자가 아닌 비각성자"], "say": "오르비스 지부장입니다. 결론은 회의가 끝난 뒤에 말씀드리지요. 지켜보는 것도 일입니다.", "kw": ["온화함", "침묵", "지켜봄"], "bust": "", "ph": "", "gal": []},
{"id": "oh-harin", "n": "오하린", "e": "Ha-rin Oh", "age": "38세", "g": "여", "nick": "-", "h": "미정", "body": "미정", "mbti": "ISTJ", "day": "미정", "ac": "#c8323c", "team": "대응팀장", "role": "대응팀장", "unit": "균열 대응팀 총괄", "no": "ORB-1-002", "tag": "대응팀 · 지휘", "feat": ["건조하고 실무적인 인상", "현역 때의 과부하 후유증", "팀원 이름과 상태를 전부 외움"], "say": "대응팀장 오하린입니다. 팀원 이름과 상태는 전부 외우고 있어요. 숨기는 건 소용없습니다.", "kw": ["건조함", "실무적", "빙결"], "bust": "../img/HARIN.png", "ph": "../img/HARIN.png", "gal": []},
{"id": "yoon-seheon", "n": "윤세헌", "e": "Se-heon Yoon", "age": "31세", "g": "남", "nick": "-", "h": "미정", "body": "미정", "mbti": "ESTJ", "day": "미정", "ac": "#4b66b5", "team": "감사과", "role": "등급심사팀장", "unit": "감사과 등급심사팀", "no": "ORB-4-003", "tag": "감사과 · 등급심사", "feat": ["커피에 설탕 세 스푼", "독설과 비꼼이 기본", "거짓 감지 능력"], "say": "감사과 윤세헌. 호의라고 말씀하셔도 비아냥처럼 들리실 겁니다, 습관이라서요. 거짓말은 하지 마세요. 어차피 압니다.", "kw": ["독설", "원칙주의", "거짓 감지"], "bust": "../img/JH.png", "ph": "../img/JH.png", "gal": []},
{"id": "han-seoyoon", "n": "한서윤", "e": "Seo-yoon Han", "age": "24세", "g": "남", "nick": "-", "h": "미정", "body": "미정", "mbti": "ISFJ", "day": "미정", "ac": "#d9a02b", "team": "대응팀 3", "role": "막내", "unit": "균열 대응팀 3팀 방호·지원", "no": "ORB-3-021", "tag": "3팀 · 방호·지원", "feat": ["항상 웃는 인상", "화나면 말투가 더 정중해짐", "방벽 능력"], "say": "안녕하세요, 막내 한서윤입니다! 간식 필요하시면 말씀해 주세요. 그리고… 다친 사람이 생기면, 그땐 제가 많이 정중해질 거예요.", "kw": ["착함", "분위기 메이커", "방벽"], "bust": "", "ph": "", "gal": []},
{"id": "cha-yuna", "n": "차유나", "e": "Yu-na Cha", "age": "30세", "g": "여", "nick": "-", "h": "미정", "body": "미정", "mbti": "ENFJ", "day": "미정", "ac": "#1d9a96", "team": "의료 지원과", "role": "의료 지원과 실장", "unit": "의료 지원과", "no": "ORB-5-002", "tag": "의료 · 치유", "feat": ["양갈래 머리", "나이보다 어려 보이는 동안", "환자가 숨기면 싸늘해짐"], "say": "의료 지원과 차유나예요! 신입 아니고 실장이에요, 다들 처음엔 놀라요. 아픈 건 아프다고 말해 줘야 고칠 수 있어요. 숨기면… 약 안 드립니다.", "kw": ["양갈래", "밝음", "치유"], "bust": "../img/YUNA.png", "ph": "../img/YUNA.png", "gal": []}
];
/* ▼ 자기소개칸 추가 항목: hi=인사말, like=좋아하는 것, dis=싫어하는 것, hab=말버릇·습관 (자유롭게 수정) */
const X={
"seo-ihyeon":{hi:"…안녕.",like:"락 음악, 고양이, 낮잠, 멍때리기, 닭가슴살",dis:"책임감 없는 것, 대충하는 것, 기분파",hab:"안 괜찮은데 괜찮다고 말함"},
"kang-taehee":{hi:"안녕하세요.",like:"불닭볶음면, 혼자있는시간, 야구",dis:"시선, 회식, 사람 많은 곳",hab:"아이스 아메리카노"},
"choi-hyun":{hi:"안녕! 밥은 먹었어?",like:"밥 사 주기, 후배 챙기기, 웃음",dis:"누가 다치는 것",hab:"다쳐도 웃으며 넘김"},
"na-kyungtae":{hi:"안녕하십니까.",like:"조용한 회의, 따뜻한 차",dis:"서두르는 결론",hab:"먼저 결론을 내지 않음"},
"oh-harin":{hi:"안녕하세요, 오하린입니다.",like:"정리된 보고서",dis:"상태를 숨기는 것",hab:"팀원 이름을 전부 외움"},
"yoon-seheon":{hi:"…안녕하십니까.",like:"설탕 세 스푼 커피",dis:"거짓말, 등급 조작",hab:"호의도 비아냥처럼 말함"},
"han-seoyoon":{hi:"안녕하세요! 막내예요!",like:"간식 나눠 주기",dis:"누가 다치는 것",hab:"화나면 말투가 더 정중해짐"},
"cha-yuna":{hi:"안녕하세요~ 실장이에요!",like:"환자가 낫는 것, 수다",dis:"상태를 숨기는 사람",hab:"숨기면 약을 안 줌"}};
M.forEach(m=>Object.assign(m,X[m.id]));
const SIG=["M4 40 C 14 6, 26 6, 30 28 S 44 48, 52 22 C 56 10, 62 40, 74 34 S 96 20, 104 36 C 112 46, 128 30, 146 26",
"M4 34 L 22 8 L 28 44 L 44 12 C 52 26, 60 46, 76 28 S 100 14, 110 34 L 146 30",
"M6 30 C 20 4, 34 52, 48 22 S 70 8, 84 36 C 94 52, 110 12, 124 30 S 140 40, 148 20"];
const $=s=>document.querySelector(s);
let cur=0,tw=null,profileMode="night";
/* 낮 프로필 사진: 등록되지 않은 인물은 기존 사진으로 표시. 추후 아래 경로만 수정 */
const DAY={
 "seo-ihyeon":{bust:"../img/YEHEYON_NOON.png",ph:"../img/YEHEYON_NOON.png"},
 "kang-taehee":{bust:"../img/TAHEE_NOON.png",ph:"../img/TAHEE_NOON.png"}
};
function setProfileMode(mode){
 profileMode=mode;
 const root=$("#pf");root.dataset.profileMode=mode;
 root.querySelectorAll(".pf-mode-switch button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.mode===mode)));
 render(cur);
}
function bars(s){let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))>>>0;let o="";for(let i=0;i<46;i++){h=(h*1103515245+12345)>>>0;o+=`<i style="height:${40+(h%60)}%;width:${1+(h>>8)%3}px"></i>`}return o}
const SIL='<svg viewBox="0 0 100 120"><circle cx="50" cy="38" r="22"/><path d="M6 120c0-32 20-48 44-48s44 16 44 48z"/></svg>';
function render(i,anim=true){
 cur=i;const base=M[i];const m=profileMode==="day"?{...base,...(DAY[base.id]||{})}:base;const r=$("#pf");
 r.classList.remove("on");void r.offsetWidth;
 r.style.setProperty("--ac",m.ac);
 $(".nav").innerHTML=M.map((x,k)=>`<button data-i="${k}" aria-current="${k==i}">${x.n}</button>`).join("");
 $("#bust").innerHTML=(m.bust?`<img src="${m.bust}" alt="${m.n} 반신 일러스트">`:`<div class="sil">${SIL}</div>`)+`<div class="scan"></div><span class="tag">${profileMode==="day"?"DAY · 일상":m.tag}</span>`;
 $("#intro").innerHTML=`<h2 class="nm">${m.n}</h2><p class="en">${m.e}</p><dl>${[["이름",m.n],["영문명",m.e],["나이",m.age],["성별",m.g],["별명",m.nick],["신장",m.h],["체형",m.body],["MBTI",m.mbti],["낮 생활",m.day]].map(([a,b])=>`<dt>${a}</dt><dd>${b}</dd>`).join("")}</dl><h3>FEATURES · 특징</h3><ul class="feat">${m.feat.map(f=>`<li>${f}</li>`).join("")}</ul><h3>SELF INTRODUCTION · 자기소개</h3><p class="hi">${m.hi}</p><p class="say"><span id="tx"></span><span class="cur"></span></p><dl class="lk"><dt>좋아해요</dt><dd>${m.like}</dd><dt>싫어해요</dt><dd>${m.dis}</dd><dt>말버릇</dt><dd>${m.hab}</dd></dl><h3>KEYWORDS</h3><div class="kw">${m.kw.map(k=>`<span>${k}</span>`).join("")}</div>`;
 $("#id").innerHTML=`<div class="top"><b>${profileMode==="day"?"ORBIS · DAY":"ORBIS"}</b><span>${profileMode==="day"?"일상 프로필":m.team}</span></div><div class="body"><div class="ph">${m.ph?`<img src="${m.ph}" alt="${m.n} 증명사진">`:SIL.replace("<svg",'<svg class="sl"')}</div><ul><li><span>성명</span><span>${m.n}</span></li><li><span>소속</span><span>${m.unit}</span></li><li><span>직책</span><span>${m.role}</span></li><li><span>사번</span><span>${m.no}</span></li><li><span>등급</span><span class="blur" title="제2조 · 본인과 센터만 열람">비공개</span></li></ul></div><div class="sig"><svg viewBox="0 0 150 56"><path d="${SIG[i%3]}"/></svg></div><div class="bar">${bars(m.no)}</div><div class="foot">${profileMode==="day"?"ORBIS · DAYTIME PROFILE":"한국지부 오르비스 지부 · 야간 근무"}</div>`;
 const SH=['<circle cx="50" cy="50" r="26"/>','<path d="M50 22 78 76H22z"/>','<rect x="24" y="24" width="52" height="52" rx="6"/>','<path d="M50 20 80 50 50 80 20 50z"/>'];
 $("#gal").innerHTML=`<h3>ILLUSTRATIONS</h3><div class="gr">${m.gal.length?m.gal.map(s=>`<figure><img src="${s}" alt="${m.n} 일러스트" loading="lazy"></figure>`).join(""):SH.map(p=>`<figure class="empty"><svg viewBox="0 0 100 100" width="46%" fill="currentColor" opacity=".35">${p}</svg></figure>`).join("")}</div>`;
 document.title=m.n+(profileMode==="day"?" · 낮 프로필":" · 밤 프로필")+" · 오르비스 지부";
 history.replaceState(null,"","?id="+m.id);
 r.classList.add("on");$("#id").classList.remove("go");void $("#id").offsetWidth;$("#id").classList.add("go");
 type(m.say);
}
function type(t){clearInterval(tw);const el=$("#tx");if(!el)return;if(matchMedia("(prefers-reduced-motion:reduce)").matches){el.textContent=t;return}
 let k=0;setTimeout(()=>{tw=setInterval(()=>{el.textContent=t.slice(0,++k);if(k>=t.length)clearInterval(tw)},28)},900)}
document.addEventListener("click",e=>{
 const toggle=e.target.closest(".pf-mode-switch button");if(toggle){setProfileMode(toggle.dataset.mode);return;}
  const b=e.target.closest(".pf .nav button");if(b)return render(+b.dataset.i);
 const f=e.target.closest(".gal figure:not(.empty) img");if(f){$("#lb img").src=f.src;$("#lb").classList.add("on")}
 if(e.target.closest("#lb"))$("#lb").classList.remove("on")});
document.addEventListener("keydown",e=>{if(e.key==="Escape")$("#lb").classList.remove("on")});
const L=$(".lan");
$(".cardwrap").addEventListener("pointermove",e=>{const r=L.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;L.style.transform=`rotateY(${x*12}deg) rotateX(${-y*10}deg)`});
$(".cardwrap").addEventListener("pointerleave",()=>L.style.transform="");
const q=new URLSearchParams(location.search).get("id");render(Math.max(0,M.findIndex(x=>x.id===q)));

}catch(err){document.documentElement.classList.remove("js");console.error("profile.js",err)}})();
