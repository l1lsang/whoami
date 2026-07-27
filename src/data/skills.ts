export type SkillGroupId = 'unity' | 'frontend' | 'backend' | 'tools'

export type SkillGroup = {
  id: SkillGroupId
  title: string
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'unity',
    title: 'Unity & Game Development',
    description: '입력과 상태 변화가 화면의 움직임과 피드백으로 이어지는 게임 플레이를 구현합니다.',
    items: [
      'Unity 기반 2D 게임 제작',
      'C# 게임 로직 구현',
      '캐릭터 및 오브젝트 상호작용',
      '적 생성과 전투 시스템',
      'UI 및 씬 관리',
      '게임 상태 관리',
      'Unity 오류 디버깅',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: '정보 구조와 상호작용을 사용자가 자연스럽게 이해할 수 있는 화면으로 옮깁니다.',
    items: [
      'React 컴포넌트 기반 UI 개발',
      'TypeScript를 활용한 타입 안정성 확보',
      '사용자 입력 및 상태 관리',
      '반응형 웹 구현',
      '지도 및 인터랙티브 UI 구성',
      'REST API와 외부 서비스 연동',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    description: '사용자별 데이터가 안전하고 일관되게 흐르도록 인증과 저장 구조를 설계합니다.',
    items: [
      'Firebase Authentication',
      'Firestore 데이터 구조 설계',
      'Firebase Storage',
      '사용자별 데이터 관리',
      '예약 및 중복 검증 로직',
      '디스코드 봇 데이터 관리',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Languages',
    description: '기획부터 구현, 버전 관리, 배포까지 제품을 완성하는 도구를 활용합니다.',
    items: ['Git', 'GitHub', 'Vercel', 'Visual Studio Code', 'Unity Editor', 'Figma', 'Python', 'C', 'C++'],
  },
]
