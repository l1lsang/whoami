# 장경민 | Frontend Developer

이력서의 소개와 Spotit·귀차나 프로젝트를 담은 React + TypeScript 포트폴리오입니다.
Portfolio 폴더의 데스크톱(1440px)·모바일(390px) SVG를 기준으로 구성했습니다.

## 실행 및 확인

- npm install
- npm run dev
- npm run build
- npm run lint

## 콘텐츠 수정

- 기본 정보, 이메일, GitHub, 이력서: src/config/portfolio.ts
- 대표 프로젝트 2개와 추가 프로젝트 3개: src/data/projects.ts
- 기술 목록: src/data/skills.ts
- 스타일, 반응형 구성, 애니메이션: src/index.css
- 실제 프로젝트 이미지 갤러리: src/components/projects/ProjectGallery.tsx
- 다운로드 PDF: public/resume-jang-gyeongmin.pdf (루트의 장경민 이력서.pdf와 동일)

Spotit은 public의 모바일 스크린샷 3장을 지도·그룹·채팅 순서로 보여주고,
귀차나는 public/귀차나.png의 Figma 시안 전체를 표시합니다.
이미지를 누르면 확대 뷰어가 열립니다. 좌우 화살표로 이미지 이동, 확대 버튼으로 원본 크기 확인,
Escape로 닫기가 가능하며 모바일에서는 갤러리를 가로로 넘길 수 있습니다.
귀차나의 저장소·배포 링크는 확인된 주소가 없어 비워 두었습니다.
기존 프로젝트의 상세 URL도 유지됩니다.

## 모션과 접근성

배경 파티클, 타이틀 등장, 스크롤 리빌, 진행 표시, 카드 기울기·스포트라이트,
실제 화면 갤러리의 카드 배치와 호버 효과를 사용합니다.
prefers-reduced-motion 설정을 따르며, 파티클은 화면 밖이나 숨겨진 탭에서 정지합니다.
키보드 포커스, 본문 바로가기, 이메일 복사 상태 알림을 제공합니다.

Vercel의 vercel.json SPA rewrite로 /projects/:slug 직접 접근을 지원합니다.
