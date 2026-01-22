import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Career from './pages/Career'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'

const THEME_STORAGE_KEY = 'theme'
const VALID_THEMES = ['wave', 'dragon', 'lotus']

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'wave'
    }

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (VALID_THEMES.includes(stored)) {
      return stored
    }

    // Map system preference: light -> lotus, dark -> wave
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'lotus'
      : 'wave'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app">
        <Navigation theme={theme} onSetTheme={setTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/thoughts/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
