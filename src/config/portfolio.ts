export type NavigationItem = {
  label: string
  href: string
  sectionId: string
}

export const portfolioConfig = {
  name: '장경민',
  role: 'Full-Stack Developer',
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
    title: '장경민 | Full-Stack Developer',
    description:
      '사용자 화면부터 서버, 데이터베이스, 배포까지 연결하는 풀스택 개발자 장경민의 포트폴리오. React, Spring Boot, PostgreSQL, Docker, AWS로 구축하는 한성대학교 공간 예약 시스템을 소개합니다.',
  },
} as const
