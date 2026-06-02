export type SkillCategory = {
  title: string
  items: string[]
}

export type Project = {
  name: string
  description: string
  techStack: string[]
  features: string[]
  githubUrl?: string
  demoUrl?: string
}

export type LearningItem = {
  title: string
  description: string
}

export type ContactLink = {
  label: string
  href: string
  description: string
}

export const profile = {
  headline: '웹으로 데이터를 보여주고, 임베디드로 현실을 움직이는 개발자',
  subheadline:
    '안녕하세요. 웹 서비스와 임베디드 시스템을 함께 공부하며, 현실의 데이터를 사용자 경험으로 연결하는 개발자를 목표로 성장하고 있습니다.',
  githubUrl: 'https://github.com/your-github-id', // TODO: 실제 GitHub 주소로 수정하세요.
  emailUrl: 'mailto:your-email@example.com', // TODO: 실제 이메일 주소로 수정하세요.
  blogUrl: 'https://your-blog.example.com', // TODO: 실제 블로그 주소로 수정하세요.
}

export const aboutParagraphs = [
  '컴퓨터공학과 학생으로서 웹 개발과 임베디드 개발을 함께 공부하고 있습니다.',
  'React와 Firebase로 사용자에게 보이는 웹 서비스를 만들고, C/C++와 ESP32로 센서와 하드웨어가 동작하는 환경을 이해해가고 있습니다.',
  '목표는 화면 안의 데이터와 현실 세계의 장치를 자연스럽게 연결하는 개발자가 되는 것입니다.',
  '아직 완성된 결과물보다 배워가는 과정이 많지만, 프로젝트를 하나씩 쌓으며 문제를 구조화하고 끝까지 구현하는 힘을 기르고 있습니다.',
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Cloud',
    items: ['Node.js', 'Firebase', 'Firestore', 'Cloud Functions', 'Vercel'],
  },
  {
    title: 'Embedded',
    items: ['C', 'C++', 'Arduino', 'ESP32', 'Sensor Control'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'PowerShell'],
  },
]

export const projects: Project[] = [
  {
    name: 'Spotit',
    description: '지도 기반 장소 기록 SNS',
    techStack: ['React', 'Firebase', 'Vercel'],
    features: [
      '지도 기반 장소 기록',
      '사진과 글 업로드',
      '사용자별 기록 관리',
      'SEO 메타태그 적용',
    ],
    githubUrl: '', // TODO: 실제 GitHub 저장소 링크를 추가하세요.
    demoUrl: '', // TODO: 실제 배포 링크를 추가하세요.
  },
  {
    name: 'LawHero',
    description: '법률 상담 모바일 앱',
    techStack: ['Expo', 'React Native', 'Firebase', 'Cloud Functions'],
    features: ['Firebase Auth', '채팅 시스템', '푸시 알림', '본인인증 연동'],
    githubUrl: '', // TODO: 실제 GitHub 저장소 링크를 추가하세요.
    demoUrl: '', // TODO: 실제 데모 또는 소개 링크를 추가하세요.
  },
  {
    name: 'IoT Sensor Dashboard',
    description: '센서 데이터를 실시간으로 보여주는 웹 대시보드',
    techStack: ['ESP32', 'Firebase', 'React'],
    features: [
      '온습도 센서 데이터 수집',
      'Firebase 실시간 저장',
      '웹 대시보드 시각화',
      '차트 기반 데이터 확인',
    ],
    githubUrl: '', // TODO: 실제 GitHub 저장소 링크를 추가하세요.
    demoUrl: '', // TODO: 실제 배포 링크를 추가하세요.
  },
]

export const learningItems: LearningItem[] = [
  {
    title: 'Firebase Functions v2',
    description: '서버리스 함수 구조와 배포 흐름을 정리하고 있습니다.',
  },
  {
    title: 'Expo 앱 배포',
    description: '모바일 앱 빌드, 인증서, 스토어 배포 과정을 학습 중입니다.',
  },
  {
    title: 'Selenium 크롤링',
    description: '동적 웹 페이지에서 데이터를 수집하는 자동화 흐름을 실습합니다.',
  },
  {
    title: 'C/C++ 자료구조',
    description: '포인터, 메모리, 리스트와 트리 구조를 코드로 익히고 있습니다.',
  },
  {
    title: 'Arduino / ESP32',
    description: '센서 입력, 통신, 제어 로직을 작은 장치에서 구현합니다.',
  },
  {
    title: '실시간 데이터 시각화',
    description: '센서 데이터를 웹 화면에서 읽기 쉽게 보여주는 방식을 실험합니다.',
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'GitHub',
    href: profile.githubUrl,
    description: '코드와 프로젝트 기록을 확인할 수 있습니다.',
  },
  {
    label: 'Email',
    href: profile.emailUrl,
    description: '협업과 연락을 위한 메일 주소입니다.',
  },
  {
    label: 'Blog',
    href: profile.blogUrl,
    description: '학습 기록을 정리할 블로그 자리입니다.',
  },
]
