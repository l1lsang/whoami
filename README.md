# 장경민 | Unity & Web Developer Portfolio

Unity 게임 개발과 웹 서비스 개발을 “사용자 경험을 구현하는 개발”이라는 하나의 흐름으로 보여주는 반응형 포트폴리오입니다.

## 실행

```bash
npm install
npm run dev
```

프로덕션 빌드와 미리보기:

```bash
npm run build
npm run preview
```

코드 검사:

```bash
npm run lint
```

## 콘텐츠 수정 위치

- 이름, 이메일, GitHub, 이력서, 내비게이션: `src/config/portfolio.ts`
- 4개 프로젝트 내용과 링크, 이미지 경로: `src/data/projects.ts`
- 기술 역량: `src/data/skills.ts`
- 개발 과정: `src/data/process.ts`

GitHub의 `USERNAME`과 임시 이메일을 실제 정보로 교체하세요. 이력서는 `public/resume.pdf`에 추가한 뒤 `resumePath`를 `/resume.pdf`로 변경하면 다운로드 버튼이 표시됩니다.

## 프로젝트 이미지

실제 이미지가 없으면 프로젝트별 CSS/UI 플레이스홀더가 표시됩니다. 이미지를 `public/projects/`에 추가한 뒤 `src/data/projects.ts`의 `image` 값을 `/projects/파일명.webp`처럼 설정하면 자동으로 교체됩니다.

## 주요 구조

```text
src/
├─ components/
│  ├─ layout/
│  ├─ projects/
│  ├─ sections/
│  └─ ui/
├─ config/portfolio.ts
├─ data/
│  ├─ process.ts
│  ├─ projects.ts
│  └─ skills.ts
├─ lib/navigation.ts
└─ pages/
   ├─ HomePage.tsx
   ├─ NotFoundPage.tsx
   └─ ProjectDetailPage.tsx
```

Vercel에서는 `vercel.json`의 SPA rewrite를 통해 `/projects/:slug` 직접 접근을 지원합니다.
