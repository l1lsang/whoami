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
- 인터랙티브 서비스 미리보기: src/components/projects/ProductPreview.tsx
- 다운로드 PDF: public/resume-jang-gyeongmin.pdf (루트의 장경민 이력서.pdf와 동일)

Spotit의 지도와 귀차나의 행동 카드는 서비스의 주요 흐름을 설명하는 예시 UI입니다.
지도 핀을 선택하거나 행동 카드를 완료할 수 있으며 외부 서비스 데이터를 변경하지 않습니다.
귀차나의 저장소·배포 링크는 확인된 주소가 없어 비워 두었습니다.
기존 프로젝트의 상세 URL도 유지됩니다.

## 모션과 접근성

배경 파티클, 타이틀 등장, 스크롤 리빌, 진행 표시, 카드 기울기·스포트라이트,
지도 경로 애니메이션, 플로팅 카드 및 호버 효과를 사용합니다.
prefers-reduced-motion 설정을 따르며, 파티클은 화면 밖이나 숨겨진 탭에서 정지합니다.
키보드 포커스, 본문 바로가기, 이메일 복사 상태 알림을 제공합니다.

Vercel의 vercel.json SPA rewrite로 /projects/:slug 직접 접근을 지원합니다.
