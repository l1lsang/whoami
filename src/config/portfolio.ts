export type NavigationItem = {
  label: string
  href: string
  sectionId: string
}

export const portfolioConfig = {
  name: '장경민',
  role: 'Frontend Developer',
  email: 'jkm0831123@gmail.com',
  githubUrl: 'https://github.com/l1lsang',
  resumePath: '/resume-jang-gyeongmin.pdf',
  resumeFilename: '장경민_이력서.pdf',
  navigation: [
    { label: 'About', href: '/#about', sectionId: 'about' },
    { label: 'Projects', href: '/#projects', sectionId: 'projects' },
    { label: 'Contact', href: '/#contact', sectionId: 'contact' },
  ] satisfies NavigationItem[],
  seo: {
    title: '장경민 | Frontend Developer',
    description:
      '사용자의 경험을 고민하고 아이디어를 실제 서비스로 구현하는 프론트엔드 개발자 장경민의 포트폴리오. React, TypeScript, React Native로 만든 Spotit과 귀차나를 소개합니다.',
  },
} as const
