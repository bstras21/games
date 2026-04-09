import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VocabMinus1 from './pages/VocabMinus1'
import VocabUnit4 from './pages/VocabUnit4'
import VocabUnit5 from './pages/VocabUnit5'
import VocabUnit6 from './pages/VocabUnit6'
import VocabUnit7 from './pages/VocabUnit7'

function App() {
  return (
    <Router basename="/games">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vocab-1" element={<VocabMinus1 />} />
        <Route path="/vocab-unit-4" element={<VocabUnit4 />} />
        <Route path="/vocab-unit-5" element={<VocabUnit5 />} />
        <Route path="/vocab-unit-6" element={<VocabUnit6 />} />
        <Route path="/vocab-unit-7" element={<VocabUnit7 />} />
      </Routes>
    </Router>
  )
}

export default App

