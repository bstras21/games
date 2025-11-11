import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VocabMinus1 from './pages/VocabMinus1'

function App() {
  return (
    <Router basename="/games">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vocab-1" element={<VocabMinus1 />} />
      </Routes>
    </Router>
  )
}

export default App

