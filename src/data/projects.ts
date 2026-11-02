import type { FormationId } from '../types/shapes'

export type ProjectId = Extract<FormationId, 'hansung' | 'spotit' | 'gwichana' | 'dream' | 'economy'>

export type Screenshot = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export type Project = {
  id: ProjectId // 오른쪽 스테이지의 포메이션 이름과 같습니다
  title: string
  subtitle: string
  kind: string // 목록에 들어가는 짧은 분류
  status: string
  featured?: boolean
  summary: string
  description: string
  background: string
  features: string[]
  techStack: string[]
  role: string
  githubUrl?: string
  demoUrl?: string
  screenshots?: Screenshot[]
  problems?: { problem: string; solution: string }[]
}

export const projects: Project[] = [
  {
    id: 'hansung',
    title: '한성대학교 공간 예약 시스템',
    subtitle: '대학 강의실과 스터디 공간을 찾고 예약하는 플랫폼',
    kind: '풀스택 웹',
    status: '개발 중',
    featured: true,
    summary:
      '교내 공간 탐색부터 예약 관리까지. React 화면과 Spring Boot API, PostgreSQL 데이터베이스를 연결하고 클라우드에 배포하는 풀스택 프로젝트입니다.',
    description:
      '대학의 강의실과 스터디 공간을 조회하고, 날짜와 시간을 선택해 예약할 수 있는 공간 예약 플랫폼입니다. React·TypeScript 프론트엔드와 Spring Boot REST API를 분리하고 PostgreSQL로 사용자·공간·예약 데이터를 관리합니다. Docker 개발 환경부터 Vercel·AWS EC2 배포까지 서비스 전체를 직접 구축하며 현재 가장 집중해서 개발하고 있습니다.',
    background:
      '교내 공간을 편리하게 찾고 예약하려면 화면뿐 아니라 사용자 인증, 공간과 예약 데이터 관리, 서버와 배포 환경이 함께 동작해야 합니다. 단순한 예약 화면에서 출발해 각 계층의 책임을 나누고 실제로 사용할 수 있는 서비스를 만들고자 했습니다.',
    features: [
      '공간 목록 및 상세 조회, 예약 가능한 공간 검색',
      '날짜·시간 기반 공간 예약',
      '사용자 인증 및 사용자별 예약 관리',
      '공간별 예약 상태 및 관리자 공간 관리',
      'Spring Boot REST API 기반 프론트엔드·백엔드 분리',
      'PostgreSQL 기반 사용자·공간·예약 데이터 관리',
      'Docker 기반 백엔드·데이터베이스 개발 환경',
      'Vercel 프론트엔드 및 AWS EC2 백엔드 배포, 도메인·HTTPS·CORS 설정',
    ],
    techStack: ['React', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL', 'Docker', 'AWS EC2', 'Vercel'],
    role: '서비스 기획, 예약 흐름 설계, React 프론트엔드, Spring Boot API, PostgreSQL 설계, Docker 환경 구성, AWS EC2와 Vercel 배포',
    githubUrl: 'https://github.com/l1lsang/hansung-place-system',
    problems: [
      {
        problem:
          '초기 프론트엔드 중심 구조에서 인증, 공간 관리, 예약 처리를 확장하려면 화면과 서버의 역할을 명확히 나눌 필요가 있었습니다.',
        solution:
          'Spring Boot REST API 서버를 독립적으로 구축하고 React 프론트엔드와 연결해 화면, 비즈니스 로직, 데이터 계층의 책임을 분리했습니다.',
      },
      {
        problem: '사용자, 공간, 예약 시간과 상태 사이의 관계를 일관되게 관리할 수 있는 데이터 구조가 필요했습니다.',
        solution:
          'NoSQL 기반 프로토타입에서 PostgreSQL 기반 구조로 발전시키며 사용자·공간·예약 데이터의 관계를 정의하고 관리하도록 설계했습니다.',
      },
      {
        problem:
          '로컬에서 동작하는 서비스를 실제 사용자가 접근할 수 있도록 배포하고, 환경 차이와 API 통신 문제를 해결해야 했습니다.',
        solution:
          'Docker로 백엔드와 PostgreSQL 개발 환경을 구성하고 프론트엔드는 Vercel, 백엔드는 AWS EC2에 배포했습니다. 도메인, HTTPS, CORS 설정으로 서비스 간 통신을 연결했습니다.',
      },
    ],
  },
  {
    id: 'spotit',
    title: 'Spotit',
    subtitle: '방문한 장소를 지도 위에 기록하는 SNS',
    kind: '웹과 모바일',
    status: 'MVP 배포',
    summary:
      '흩어져 있던 장소의 기억을 하나의 지도로. 방문한 곳을 사진과 함께 기록하고, 다른 사람의 발자취에서 새로운 장소를 발견합니다.',
    description:
      '사용자가 방문한 장소를 지도 위에 사진과 함께 기록하고, 다른 사용자의 실제 방문 기록을 통해 새로운 장소를 발견할 수 있도록 만든 지도 기반 SNS입니다. React·TypeScript와 Expo·React Native로 웹과 모바일의 사용자 경험을 구현했습니다.',
    background:
      '기존 SNS의 장소 기록은 피드 중심으로 흩어져 있어, 어디에서 무엇을 했는지 직관적으로 확인하기 어려웠습니다. 기록의 중심을 피드에서 위치로 옮겨, 장소와 기억을 함께 탐색할 수 있는 경험을 설계했습니다.',
    features: [
      'React·TypeScript 기반 웹 UI, Expo·React Native 기반 모바일 UI',
      '지도 기반 장소 탐색 및 장소 검색',
      '사진과 함께 장소 기록 작성 및 피드 조회',
      'Firebase Authentication 사용자 인증',
      'Firestore·Storage를 활용한 데이터 및 이미지 관리',
      'Google Maps Platform 연동',
      'Vercel 웹 배포 및 MVP 구축',
    ],
    techStack: ['React', 'TypeScript', 'React Native', 'Expo', 'Firebase', 'Google Maps Platform'],
    role: '서비스 기획, UI/UX 설계, 웹과 모바일 프론트엔드 개발, Firebase 연동, 웹 배포',
    githubUrl: 'https://github.com/l1lsang/spotit',
    demoUrl: 'https://spotit-one.vercel.app/',
    screenshots: [
      {
        src: '/projects/spotit-map.jpg',
        alt: 'Spotit 모바일 지도 화면: 장소 검색, 지도 핀과 실시간 리뷰',
        caption: '지도 · 장소 탐색',
        width: 720,
        height: 1279,
      },
      {
        src: '/projects/spotit-group.jpg',
        alt: 'Spotit 모바일 그룹 화면: 관심사별 그룹 탐색, 초대코드 가입과 그룹 만들기',
        caption: '그룹 · 취향 공유',
        width: 720,
        height: 1279,
      },
      {
        src: '/projects/spotit-chat.jpg',
        alt: 'Spotit 모바일 채팅 화면: 사용자 사이의 메시지와 이미지 전송',
        caption: '채팅 · 사용자 연결',
        width: 720,
        height: 1280,
      },
    ],
    problems: [
      {
        problem: '피드에 흩어진 기록만으로는 사용자가 어디에서 무엇을 했는지 한눈에 파악하기 어려웠습니다.',
        solution:
          '게시물을 지도와 연결하고, Google Maps Platform의 지도 렌더링과 장소 검색을 활용해 위치를 중심으로 기록을 탐색하는 흐름을 구현했습니다.',
      },
    ],
  },
  {
    id: 'gwichana',
    title: '귀차나',
    subtitle: '받은 정보를 할 일로 바꿔 주는 AI 생활 비서',
    kind: '모바일 앱',
    status: '개발 중',
    summary:
      '정리는 AI에게, 일상은 가볍게. 문자·이미지·링크를 필요한 행동으로 바꾸고, 할 일을 완료하는 순간까지 연결합니다.',
    description:
      '일상에서 들어오는 문자, 이미지, 링크를 AI가 분석해 일정·할 일·결제·신청 등의 행동 카드로 변환하고, 완료까지 관리할 수 있도록 만든 AI 생활 관리 서비스입니다.',
    background:
      '기존 캘린더와 플래너는 사용자가 정보를 직접 정리하고 입력해야 해 기록 습관이 없는 사람에게 부담이 됩니다. 받은 정보를 그대로 전달하면 AI가 필요한 행동을 판단하고 구조화하도록 설계해, 일정 관리에 필요한 입력 과정을 줄이고자 했습니다.',
    features: [
      'Expo·React Native·TypeScript 기반 모바일 UI',
      'Inbox → AI 분석 → Action Card → 완료 흐름',
      '이미지·텍스트·링크를 분석하는 입력 구조',
      '일정·할 일·보관에 맞춘 행동 카드 UI',
      'AI 챗봇을 통한 정보 정리와 작업 수정 인터페이스',
      '로그인·온보딩·권한 요청 흐름',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'AI API'],
    role: '모바일 UI 개발, 사용자 흐름 설계, AI 분석 입력 구조와 행동 카드 인터랙션 설계',
    screenshots: [
      {
        src: '/projects/gwichana.png',
        alt: '귀차나 Figma 시안: AI가 정리한 받은편지함과 공모전 신청 준비 상세 화면',
        caption: '받은편지함 → 신청 준비',
        width: 924,
        height: 960,
      },
    ],
    problems: [
      {
        problem: '정보를 직접 분류하고 입력해야 하는 일정 관리 방식은 기록 습관이 없는 사용자에게 지속적인 부담이 됩니다.',
        solution:
          '받은 정보를 그대로 Inbox에 넣고 AI 분석을 통해 행동 카드로 연결하는 흐름을 설계했습니다. 분석 결과에 따라 일정·할 일·보관 UI를 제공하고, 챗봇 인터페이스로 작업을 수정할 수 있도록 구성했습니다.',
      },
    ],
  },
  {
    id: 'dream',
    title: '드림 디펜더스',
    subtitle: '꿈속 세계를 지키는 카드 디펜스 게임',
    kind: 'Unity 게임',
    status: '완료',
    summary: '꿈속 세계를 지키기 위해 카드를 내고 적의 공격을 막아내는 Unity 기반 디펜스 게임입니다.',
    description:
      'Unity와 C#을 사용해 개발한 게임 프로젝트로, 적 생성, 방어 요소의 전투, 스테이지 진행, UI 등 게임 플레이에 필요한 핵심 시스템을 구현했습니다.',
    background:
      '직접 조작하고 즉시 반응을 확인할 수 있는 게임 경험을 만들며, 여러 게임 시스템이 하나의 플레이 흐름으로 연결되는 구조를 익히기 위해 시작했습니다.',
    features: [
      '적 생성 및 이동 시스템',
      '웨이브·스테이지 진행',
      '방어 오브젝트·캐릭터 배치',
      '공격 및 피격 처리',
      '체력과 점수 UI',
      '게임 시작·성공·실패 상태 관리와 씬 전환',
      '게임 밸런스 조정',
    ],
    techStack: ['Unity', 'C#', 'Unity UI', 'Git'],
    role: '게임 기획, Unity 기능 구현, 게임 로직 설계, UI 구성과 디버깅',
    githubUrl: 'https://github.com/TeamODD/Dream-Defenders2',
    screenshots: [
      {
        src: '/projects/dream-defenders.jpg',
        alt: '드림 디펜더스 플레이 화면: 성벽 앞 격자 전장, 오른쪽에서 다가오는 적과 하단의 카드 패',
        caption: '전투 화면',
        width: 1600,
        height: 1000,
      },
    ],
  },
  {
    id: 'economy',
    title: '디스코드 경제 게임봇',
    subtitle: '서버 안에서 이어지는 가상 경제 게임',
    kind: '디스코드 봇',
    status: '개발 중',
    summary: '낚시, 아이템 거래, 가상 주식과 경제 뉴스를 하나의 경제 시스템으로 연결한 디스코드 게임봇입니다.',
    description:
      '디스코드 서버 구성원이 명령어와 상호작용하며 가상의 화폐인 듀코인을 획득하고 소비할 수 있는 경제 게임봇입니다. 낚시, 아이템 판매, 가상 주식과 경제 이벤트를 통해 지속적인 게임 경험을 제공하는 것을 목표로 합니다. 듀코인은 현실의 금전적 가치가 없는 게임 내 가상 화폐입니다.',
    background:
      '별도 게임 클라이언트 없이도 사람들이 모인 디스코드 안에서 명령과 보상이 순환하는 지속적인 플레이 경험을 만들기 위해 시작했습니다.',
    features: [
      '사용자별 듀코인 지갑과 출석·활동 보상',
      '낚시 및 아이템 획득, 인벤토리와 아이템 판매',
      '가상 주식 시스템',
      '가상 경제 상황 변화와 경제 뉴스',
      '순위표와 관리자용 경제 설정',
      '데이터 저장 및 사용자별 기록 관리',
    ],
    techStack: ['Node.js', 'Discord.js', 'Firebase'],
    role: '게임 시스템 기획, 봇 명령어 개발, 가상 경제 로직 설계와 데이터 관리',
    githubUrl: 'https://github.com/l1lsang/ganade',
  },
]
