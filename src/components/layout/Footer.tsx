import { profile } from '../../data/profile'

// 마지막 화면: 이름이 화면 폭 가득 돌아옵니다.
export function Footer() {
  return (
    <footer className="site-footer">
      <ul className="footer-links">
        <li>
          <a href={`mailto:${profile.email}`}>이메일</a>
        </li>
        <li>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={profile.resumePath} download={profile.resumeFilename}>
            이력서
          </a>
        </li>
      </ul>
      <p className="footer-name">{profile.name}</p>
    </footer>
  )
}
