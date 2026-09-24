# Project images

단일 프로젝트 이미지는 `src/data/projects.ts`의 `image` 필드에 공개 경로를 입력하세요.
여러 이미지 또는 Figma 시안은 `gallery` 필드를 사용합니다.

- `kind`: 모바일 화면은 `mobile`, 디자인 시안은 `design`
- `label`: 화면에 표시할 이미지 유형
- `images`: `src`, `alt`, `caption`, 원본 `width`와 `height` 배열

현재 Spotit은 `/스팟잇 (2).jpg`, `/스팟잇 (1).jpg`, `/스팟잇 (3).jpg`를 순서대로,
귀차나는 `/귀차나.png`를 사용합니다. 홈과 상세 페이지에서 같은 갤러리를 사용합니다.

권장 파일명:

- `dream-defenders.webp`
- `spotit.webp`
- `hansung-space-reservation.webp`
- `discord-economy-bot.webp`

갤러리 이미지는 원본 비율을 유지하므로 모바일 세로 화면과 Figma 시안 모두 사용할 수 있습니다.
