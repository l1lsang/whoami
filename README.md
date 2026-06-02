# Who am I

웹 개발자와 임베디드 개발자를 함께 지향하는 원페이지 포트폴리오 웹사이트입니다.

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## 구조

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    AboutSection.tsx
    ContactSection.tsx
    Footer.tsx
    Header.tsx
    HeroGraphic.tsx
    HeroSection.tsx
    LearningSection.tsx
    ProjectsSection.tsx
    SectionHeader.tsx
    SkillsSection.tsx
  data/
    portfolio.ts
vercel.json
```

## 수정 위치

- 자기소개, 연락처, GitHub, Blog, 프로젝트 링크: `src/data/portfolio.ts`
- 섹션 레이아웃: `src/components/*Section.tsx`
- 전역 폰트와 기본 스타일: `src/index.css`
- Vercel 빌드 설정: `vercel.json`

`src/data/portfolio.ts` 안의 TODO 주석을 실제 링크와 이메일로 교체하면 됩니다.
