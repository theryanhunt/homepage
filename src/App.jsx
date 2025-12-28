import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Career from './pages/Career'
import Journal from './pages/Journal'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:id" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
