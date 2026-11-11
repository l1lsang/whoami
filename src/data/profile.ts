import type { FormationId } from '../types/shapes'

export const profile = {
  name: '장경민',
  role: 'Frontend Developer',
  email: 'jkm0831123@gmail.com',
  githubUrl: 'https://github.com/l1lsang',
  resumePath: '/resume-jang-gyeongmin.pdf',
  resumeFilename: '장경민_이력서_2026.pdf',
}

export type NavItem = {
  label: string
  href: string
  steps: FormationId[] // 이 단계들이 화면 가운데 있을 때 메뉴가 활성화됩니다
}

export const navigation: NavItem[] = [
  { label: '소개', href: '#about', steps: ['about'] },
  { label: '프로젝트', href: '#projects', steps: ['hansung', 'spotit', 'gwichana', 'dream', 'economy'] },
  { label: '기술', href: '#skills', steps: ['skills'] },
]
