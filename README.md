# ORBIS 대한민국지부 공식 포털

궤도질서관리기구 대한민국지부(가상 세계관) 정적 사이트입니다. GitHub Pages에 올리면 바로 공개됩니다.

본 사이트는 창작 세계관 기록이며 대한민국 실존 정부·공공기관과 무관합니다.

## 구성

- 세계관
- 연혁
- 조직도
- 규칙(복무규정)
- 구성원 소개
- 복장(제복 기준)

## GitHub Pages 배포

1. GitHub에서 새 저장소를 만듭니다. 예: `orbis-korea`
2. 이 폴더를 올립니다.

```bash
git add .
git commit -m "ORBIS 대한민국지부 공식 포털 초기 등록"
git branch -M main
git remote add origin https://github.com/계정이름/orbis-korea.git
git push -u origin main
```

3. 저장소 **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
   - Save

4. 수 분 후 주소

`https://계정이름.github.io/orbis-korea/`

프로젝트 사이트(저장소 이름이 루트가 아님)로 열어도 상대 경로라 메뉴가 동작합니다.

## 로컬 확인

`index.html`을 브라우저로 열어도 됩니다. 검색만 파일 프로토콜에서 제한될 수 있으면 간단히 서버를 켭니다.

```bash
npx --yes serve .
```
