export type NavigationItem = {
  label: string
  href: string
  sectionId: string
}

export const portfolioConfig = {
  name: '장경민',
  role: 'Unity & Web Developer',
  email: 'jkm0831123@gmail.com',
  githubUrl: 'https://github.com/l1lsang',
  resumePath: '/resume-jang-gyeongmin.pdf',
  resumeFilename: '장경민_풀스택_개발자_이력서.pdf',
  navigation: [
    { label: 'Home', href: '/#home', sectionId: 'home' },
    { label: 'About', href: '/#about', sectionId: 'about' },
    { label: 'Projects', href: '/#projects', sectionId: 'projects' },
    { label: 'Skills', href: '/#skills', sectionId: 'skills' },
    { label: 'Contact', href: '/#contact', sectionId: 'contact' },
  ] satisfies NavigationItem[],
  seo: {
    title: '장경민 | Unity & Web Developer',
    description:
      'Unity 게임과 웹 서비스를 개발하며 사용자 경험을 실제 결과물로 구현하는 개발자 장경민의 포트폴리오입니다.',
  },
} as const
