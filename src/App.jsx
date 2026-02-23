import contributors from './contributors.json'
import ContributorCard from './ContributorCard'
import './App.css'

const PIPELINE_STEPS = [
  'Fork Repo',
  'Edit JSON',
  'Open PR',
  'CI Validates',
  'Maintainer Merges',
  'Live on Wall',
]

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <span className="header-logo">⬛</span>
        <span className="header-title">DevOps<span>Wall</span></span>
        <span className="header-badge">LIVE</span>
      </header>

      <section className="hero">
        <span className="hero-eyebrow">CI/CD in action</span>
        <h1>The <em>Contributor</em> Wall</h1>
        <p>
          Every card below was added via a Pull Request.
          Fork the repo, drop your name in the JSON, and watch the pipeline do the rest.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">{contributors.length}</span>
            <span className="stat-label">Contributors</span>
          </div>
          <div className="stat">
            <span className="stat-value">PR</span>
            <span className="stat-label">Driven</span>
          </div>
          <div className="stat">
            <span className="stat-value">CI</span>
            <span className="stat-label">Validated</span>
          </div>
        </div>
      </section>

      <main className="main">
        <div className="contribute-banner">
          <span className="icon">⚡</span>
          <div>
            <h3>Want to appear here?</h3>
            <p>
              Fork this repo → open <code>src/contributors.json</code> → add your entry → open a Pull Request.
              GitHub Actions validates your JSON automatically. Once merged, your card is live instantly.
            </p>
          </div>
        </div>

        <div className="pipeline-section">
          <div className="pipeline-label">// pipeline</div>
          <div className="pipeline-strip">
            {PIPELINE_STEPS.map((step, i) => (
              <div className="pipeline-step" key={step}>
                <span className="step-num">{i + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="grid-header">
          <h2>contributors — {contributors.length}</h2>
          <div className="grid-header-line" />
        </div>

        <div className="contributors-grid">
          {contributors.length === 0 ? (
            <div className="empty-state">
              <p>// no contributors yet — be the first, open a PR</p>
            </div>
          ) : (
            contributors.map((c, i) => (
              <ContributorCard key={c.github ?? c.name ?? i} contributor={c} />
            ))
          )}
        </div>
      </main>

      <footer className="footer">
        <p>
          devops-wall &nbsp;·&nbsp; powered by{' '}
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>
          {' '}+ React &nbsp;·&nbsp; data in <code>src/contributors.json</code>
        </p>
      </footer>
    </div>
  )
}
