# 장경민 | Frontend Developer — Reassemble

13개의 SVG 조각이 스크롤에 따라 **자화상 → 격자 → 프로젝트별 모양 → 궤도 → "Hi"** 로 다시 조립되는 포트폴리오입니다.
콘텐츠는 `../Who am I` 포트폴리오를 기준으로 옮겨 왔습니다.

## 실행

```bash
npm install
npm run dev     # 개발 서버
npm run build   # 타입 검사 + 프로덕션 빌드 (dist/)
npm run lint
```

## 도형 시스템

| 파일 | 역할 |
| --- | --- |
| `src/types/shapes.ts` | 조각 이름(`PIECE_IDS`)과 포메이션 이름(`FORMATION_IDS`). 배열 순서가 곧 쌓이는 순서입니다. |
| `src/components/shapes/pieces.tsx` | 13개 조각의 SVG 모양. 모두 (0, 0)을 중심으로 그립니다. |
| `src/components/shapes/formations.ts` | 600×600 스테이지 위에서 각 조각이 놓이는 자리(x, y, 회전, 배율, 색). |
| `src/components/shapes/ShapeStage.tsx` | 조각을 그리고, 마우스로 끌었다 놓으면 제자리로 튕겨 돌아가게 합니다. |
| `src/components/shapes/StickyStage.tsx` | 데스크톱: 오른쪽에 고정된 스테이지 + 캡션 + "다시 조립" 버튼. |
| `src/components/shapes/InlineStage.tsx` | 모바일: 섹션마다 들어가는 스테이지. 탭하면 흩어졌다 다시 모입니다. |
| `src/hooks/useActiveStep.ts` | 화면 가운데를 지나는 `[data-step]` 섹션을 찾아 포메이션을 바꿉니다. |

조각의 이동은 CSS `transition`으로 처리합니다. `transform`을 항상 `translate → rotate → scale` 순서로 만들기 때문에
브라우저가 두 포메이션 사이를 알아서 보간합니다 (`src/utils/stage.ts`의 `toTransform`).

### 포메이션 추가하기

1. `FORMATION_IDS`에 이름을 추가합니다.
2. `formations.ts`에 13개 조각의 자리를 모두 적습니다. 숨기고 싶은 조각은 `o: 0`.
3. 해당 섹션 요소에 `data-step="새이름"`을 붙입니다.

## 콘텐츠 수정

- 이름·이메일·GitHub·이력서: `src/data/profile.ts`
- 프로젝트: `src/data/projects.ts` (프로젝트 `id`가 곧 포메이션 이름)
- 소개 편지: `src/data/about.ts`
- 기술 스택: `src/data/skills.ts`
- 스타일: `src/styles/global.css`(색 토큰·스테이지), `src/styles/site.css`(레이아웃·섹션)

## 디자인 원칙

- 바탕은 돌색 하나, 글자는 잉크 하나. 화면의 다른 색은 모두 도형과 프로젝트 스크린샷에서 옵니다.
- 서체는 Pretendard 하나, 크기는 다섯 단계(15 / 18 / 22 / 40 / 104px)와 기술 섹션의 거대한 단어뿐입니다.
- 구분은 선 대신 면으로 합니다(바탕보다 한 단계 어두운 면). 모서리는 모두 직각입니다.
- 라벨·번호·모노스페이스·그림자·그라디언트는 쓰지 않습니다.

## 디테일

- 오른쪽 스테이지는 진한 잉크 면이고, 그 안에서는 잉크색 조각이 밝게 뒤집힙니다(`.stage-panel`의 색 변수).
- 연락처 섹션에 도착하면 페이지는 어두워지고 스테이지는 반대로 밝아집니다.
- 프로젝트 목록에 마우스를 올리면 스테이지가 그 프로젝트의 모양으로 미리 바뀝니다.
- `prefers-reduced-motion`을 켜면 조각이 날아다니지 않고 색과 투명도만 바뀝니다.
- 터치에서는 스크롤을 막지 않도록 드래그 대신 탭으로 재조립합니다.
