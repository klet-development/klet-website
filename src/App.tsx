import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-links">
          <a href="#xp" className="nav-link">XP</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </div>
        <button className="menu-btn" aria-label="Menu">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </button>
      </nav>

      <main className="main">
        <div className="content">
          <h1 className="name">KAMERON ARGIS</h1>
          <div className="title-section">
            <span className="role">FREELANCE</span>
            <span className="separator">-</span>
            <span className="role">DEVELOPER</span>
          </div>
          <div className="coordinates">
            <span>43.6047° N,</span>
            <span className="space">1.4442° E</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
