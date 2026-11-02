export const primarySkills = ['React', 'Spring Boot', 'PostgreSQL']

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: '프론트엔드', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { title: '백엔드', items: ['Spring Boot', 'Java', 'Node.js', 'REST API'] },
  { title: '데이터베이스', items: ['PostgreSQL', 'Firebase', 'Firestore'] },
  { title: '클라우드와 배포', items: ['AWS EC2', 'Docker', 'Vercel', 'Linux', 'Git', 'GitHub'] },
  { title: '모바일', items: ['React Native', 'Expo'] },
  { title: '언어', items: ['Java', 'TypeScript', 'JavaScript', 'C', 'C++', 'Python', 'C#'] },
  { title: '게임', items: ['Unity', 'Unreal Engine'] },
  { title: '디자인과 도구', items: ['Figma', 'VS Code', 'IntelliJ IDEA'] },
]
