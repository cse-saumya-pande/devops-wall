const GithubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
      -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
      2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
      0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
      .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82
      .44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95
      .29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38
      A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

export default function ContributorCard({ contributor, index }) {
  const { name, github, role, bio } = contributor

  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const avatarUrl = github ? `https://github.com/${github}.png?size=128` : null
  const num = String(index + 1).padStart(2, '0')

  return (
    <article className="card">
      <span className="card-index">#{num}</span>

      <div className="card-top">
        <div className="card-avatar">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={`${name}'s avatar`}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.textContent = initials
              }}
            />
          ) : (
            initials
          )}
        </div>
        <div className="card-meta">
          <div className="card-name">{name}</div>
          {github ? (
            <a
              className="card-handle"
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              @{github}
            </a>
          ) : (
            <span className="card-handle">no github linked</span>
          )}
        </div>
      </div>

      {(role || bio) && <div className="card-divider" />}

      {(role || bio) && (
        <div className="card-bottom">
          {role && (
            <span className={`card-role${index === 0 ? ' creator' : ''}`}>
              {role}
            </span>
          )}
          {bio && <p className="card-bio">{bio}</p>}
        </div>
      )}
    </article>
  )
}
