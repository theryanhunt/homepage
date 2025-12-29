import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Career from './pages/Career'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Router basename="/homepage/">
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/thoughts/:id" element={<BlogPost />} />
            <Route path="/journal" element={<Navigate to="/" replace />} />
            <Route path="/journal/:id" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
