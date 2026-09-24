export type ProjectAccent = 'unity' | 'web' | 'bot'

export type Project = {
  slug: string
  title: string
  subtitle: string
  category: string
  summary: string
  description: string
  background: string
  features: string[]
  techStack: string[]
  role: string
  status: string
  githubUrl: string
  demoUrl: string
  image: string
  accent: ProjectAccent
  challenges: string[]
  solutions: string[]
}

export const projects: Project[] = [
  {
    slug: 'dream-defenders',
    title: '드림 디펜더스',
    subtitle: '꿈속 세계를 지키는 Unity 디펜스 게임',
    category: 'Unity Game',
    summary: '꿈속 세계를 지키기 위해 적의 공격을 막아내는 Unity 기반 디펜스 게임입니다.',
    description:
      'Unity와 C#을 사용해 개발한 게임 프로젝트로, 적 생성, 캐릭터 또는 방어 요소의 전투, 스테이지 진행, UI 등 게임 플레이에 필요한 핵심 시스템을 구현했습니다.',
    background:
      '직접 조작하고 즉시 반응을 확인할 수 있는 게임 경험을 만들며, 여러 게임 시스템이 하나의 플레이 흐름으로 연결되는 구조를 익히기 위해 시작했습니다.',
    features: [
      '적 생성 및 이동 시스템',
      '웨이브 또는 스테이지 진행',
      '방어 오브젝트 또는 캐릭터 배치',
      '공격 및 피격 처리',
      '체력과 점수 UI',
      '게임 시작, 성공, 실패 상태 관리',
      'Unity 씬 전환',
      '게임 밸런스 조정',
    ],
    techStack: ['Unity', 'C#', 'Unity UI', 'Git'],
    role: '게임 기획, Unity 기능 구현, 게임 로직 설계, UI 구성 및 디버깅',
    status: 'Completed',
    githubUrl: 'https://github.com/TeamODD/Dream-Defenders2',
    demoUrl: '',
    image: '/드림 디펜저스.png',
    accent: 'unity',
    challenges: [],
    solutions: [],
  },
  {
    slug: 'spotit',
    title: '스팟잇',
    subtitle: '장소와 기억을 연결하는 지도 기반 기록 SNS',
    category: 'Web Service',
    summary: '오늘 방문한 장소를 지도 위에 사진과 글로 기록하고 공유하는 지도 기반 장소 기록 SNS입니다.',
    description:
      '사용자가 방문한 장소를 지도에서 선택하고 사진과 글을 남겨 자신의 하루와 장소를 기록할 수 있도록 기획한 서비스입니다. 단순한 장소 검색을 넘어 장소와 사용자의 기억을 연결하는 기록형 SNS를 목표로 합니다.',
    background:
      '지도에서 찾은 장소가 일회성 검색으로 끝나지 않고, 개인의 사진과 이야기로 축적되는 경험을 만들기 위해 기획했습니다.',
    features: [
      '지도 기반 장소 탐색',
      '장소별 사진과 글 기록',
      '사용자 게시물 작성',
      '이미지 업로드',
      'Firebase 기반 데이터 저장',
      '모바일 환경을 고려한 반응형 UI',
      '웹 서비스 배포',
      '향후 앱 확장을 고려한 구조',
    ],
    techStack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Firebase Storage', 'Vercel'],
    role: '서비스 기획, UI 설계, 프론트엔드 개발, Firebase 연동 및 배포',
    status: 'MVP',
    githubUrl: 'https://github.com/l1lsang/spotit',
    demoUrl: 'https://spotit-one.vercel.app/',
    image: '',
    accent: 'web',
    challenges: [],
    solutions: [],
  },
  {
    slug: 'hansung-space-reservation',
    title: '한성대학교 공간 예약 시스템',
    subtitle: '공간과 시간을 한눈에 확인하는 예약 서비스',
    category: 'Web Service',
    summary: '한성대학교 학생들이 교내 공간의 위치와 예약 가능 시간을 확인하고 예약할 수 있는 웹 서비스입니다.',
    description:
      '한성대학교 상상베이스 공간의 배치도를 기반으로 예약 가능한 공간을 시각적으로 확인하고, 원하는 시간을 선택해 예약할 수 있도록 설계했습니다. 복잡한 공간 정보를 빠르게 이해하고 중복 예약 없이 이용하도록 하는 것이 핵심입니다.',
    background:
      '텍스트 목록만으로는 이해하기 어려운 교내 공간 정보를 배치도와 예약 가능 시간으로 시각화해 탐색 부담을 줄이고자 했습니다.',
    features: [
      '공간 배치도 기반 인터페이스',
      '예약 가능한 공간 강조',
      '공간별 예약 가능 시간 확인',
      '최대 3시간 예약 제한',
      '중복 예약 검증',
      'Firebase Authentication',
      'Firestore 예약 데이터 관리',
      '반응형 웹',
      'Arduino 또는 ESP32 센서 연동 확장 계획',
    ],
    techStack: ['React', 'TypeScript', 'Firebase Authentication', 'Firestore', 'Vercel'],
    role: '서비스 기획, UX/UI 설계, 예약 로직 구현, 데이터 구조 설계 및 배포',
    status: 'In Progress',
    githubUrl: 'https://github.com/l1lsang/hsp',
    demoUrl: '',
    image: '',
    accent: 'web',
    challenges: [],
    solutions: [],
  },
  {
    slug: 'discord-economy-bot',
    title: '디스코드 경제 게임봇',
    subtitle: '서버 안에서 이어지는 가상 경제 게임',
    category: 'Discord Bot',
    summary: '낚시, 아이템 거래, 가상 주식과 경제 뉴스를 하나의 경제 시스템으로 연결한 디스코드 게임봇입니다.',
    description:
      '디스코드 서버 구성원이 명령어와 상호작용하며 가상의 화폐인 듀코인을 획득하고 소비할 수 있는 경제 게임봇입니다. 낚시, 아이템 판매, 가상 주식과 경제 이벤트를 통해 지속적인 게임 경험을 제공하는 것을 목표로 합니다. 듀코인은 현실의 금전적 가치가 없는 게임 내 가상 화폐입니다.',
    background:
      '별도 게임 클라이언트 없이도 사람들이 모인 디스코드 안에서 명령과 보상이 순환하는 지속적인 플레이 경험을 만들기 위해 시작했습니다.',
    features: [
      '사용자별 듀코인 지갑',
      '출석 또는 활동 보상',
      '낚시 및 아이템 획득',
      '인벤토리와 아이템 판매',
      '가상 주식 시스템',
      '가상 경제 상황 변화와 경제 뉴스',
      '순위표',
      '관리자용 경제 설정',
      '데이터 저장 및 사용자별 기록 관리',
    ],
    // 실제 구현 스택이 다르다면 아래 배열만 수정하세요.
    techStack: ['Python', 'discord.py'],
    role: '게임 시스템 기획, 봇 명령어 개발, 가상 경제 로직 설계 및 데이터 관리',
    status: 'In Progress',
    githubUrl: 'https://github.com/l1lsang/ganade',
    demoUrl: '',
    image: '',
    accent: 'bot',
    challenges: [],
    solutions: [],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
