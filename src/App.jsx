import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VocabMinus1 from './pages/VocabMinus1'
import VocabUnit4 from './pages/VocabUnit4'

function App() {
  return (
    <Router basename="/games">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vocab-1" element={<VocabMinus1 />} />
        <Route path="/vocab-unit-4" element={<VocabUnit4 />} />
      </Routes>
    </Router>
  )
}

export default App

