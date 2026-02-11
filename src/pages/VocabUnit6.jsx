import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, RotateCcw, X } from 'lucide-react'

const vocabularyData = [
  { term: 'Urbanization', definition: 'The process of people moving from rural to cities, or simply growth of cities.' },
  { term: 'Site', definition: 'The characteristics directly around a place such as the shape and features of the land, climate, availability of water, soil quality, and other natural resources. Also known as absolute location.' },
  { term: 'Situation', definition: 'The location of a place in comparison to other places around it. Also known as relative location.' },
  { term: 'Influences on Urbanization', definition: 'Transportation, communication, population growth and migration, economic development, and government policies.' },
  { term: 'Urban Sprawl', definition: 'Unrestricted growth in urban areas of housing, commercial development, and roads over large areas of land.' },
  { term: 'Suburbanization', definition: 'Movement of upper/middle class people from urban areas to surrounding areas.' },
  { term: 'Boomburbs', definition: 'Growing suburban cities that are the formation of new metropolitan areas.' },
  { term: 'Exurbs', definition: 'Wealthy residential districts beyond the suburbs.' },
  { term: 'Edge Cities', definition: 'An economic center on the outskirts of a city. Usually a lot of office and retail space is available.' },
  { term: 'Core-Periphery Model', definition: 'A model that demonstrates the relationship between countries in the core (more developed), periphery (less developed), and semi periphery (developing).' },
  { term: 'Core Countries', definition: 'Industrialized capitalist or imperialist countries that basically control the global markets.' },
  { term: 'Semi Periphery Countries', definition: 'Industrializing countries that are mostly capitalist and fall between the core countries and periphery countries.' },
  { term: 'Periphery Countries', definition: 'Lesser developed countries that usually have a small share of global wealth.' },
  { term: 'Multinational Corporations', definition: 'A business that operates or has offices in two or more countries.' },
  { term: 'Global Cities', definition: 'Centers of the financial world, banking, stock industry, multinational headquarters, and international organizations.' },
  { term: 'World Cities', definition: 'A city that doesn\'t just influence the region it\'s a part of, but influences cities around the world.' },
  { term: 'Primate City', definition: 'The lead city in terms of size and influence in a country.' },
  { term: 'Rank-Size Rule', definition: 'A statistical relationship between the largest city and the next largest cities based on population.' },
  { term: 'Gravity Model', definition: 'This is used to predict the amount of interaction and probability of mobility between two places.' },
  { term: 'Central Place Theory', definition: 'A theory that tries to explain the number, size, and range of market services in a commercial system or human settlements in a residential system.' },
  { term: 'Threshold', definition: 'The minimum amount of income or population necessary for a service to exist and be profitable.' },
  { term: 'Range', definition: 'Distance people will travel for service or goods. Eventually the inconvenience or cost will outweigh the benefits.' },
  { term: 'Bid Rent Model', definition: 'The closer the land is to the central business district the more expensive the land will be. The further land is from the central business district the cheaper it is.' },
  { term: 'Burgess Concentric Model', definition: 'An urban land-use theory by Ernest Burgess depicting a city as a series of five concentric rings growing outward from a central business district (CBD).' },
  { term: 'Hoyt Sector Model', definition: 'Cities develop in wedge-shaped sectors or zones radiating outward from a Central Business District (CBD) along transportation corridors, rather than in strict concentric circles.' },
  { term: 'Multiple Nuclei Model', definition: 'Model with multiple centers where people interact.' },
  { term: 'Galactic City Model', definition: 'Focuses on cities that are no longer in the phase of manufacturing on a large scale.' },
  { term: 'Latin America City Model', definition: 'Describes urban structure by blending radial sectors and concentric rings, reflecting colonial history and rapid urbanization.' },
  { term: 'East Asia City Model', definition: 'Describes land-use patterns in large Southeast Asian cities.' },
  { term: 'Sub-Sahara City Model', definition: 'Illustrates urban structures with three CBD types—colonial, traditional, and market.' },
  { term: 'Gentrification', definition: 'The process of poor urban areas being developed by wealthier individuals that are moving in.' },
  { term: 'Infrastructure', definition: 'The set of facilities and systems that serve a country, city, or other areas, and include the services and facilities necessary for its economy, households, and firms to function.' },
  { term: 'Sustainability', definition: 'A goal that focuses on creating a safe environment between humans and earth, so that we may co-exist.' },
  { term: 'Greenbelt', definition: 'Land that is set aside for green spaces, so cities do not develop past and continuously expand further and further.' },
  { term: 'Smart Growth Policies', definition: 'The idea that urban areas will continue to expand, so we must do it in a well intentioned, organized, and sustainable way.' },
  { term: 'Mixed Use Development', definition: 'A blend of zones to see different homes, and businesses.' },
  { term: 'Placelessness', definition: 'Not feeling connected to any particular place. This is the loss of characteristics that make a place feel unique.' },
  { term: 'Blockbusting', definition: 'A single ethnic group is convinced to sell their homes at a low price once they hear another ethnic group is moving into the neighborhood.' },
  { term: 'Redlining', definition: 'Banks refuse loans to people who want to purchase homes in certain urban areas.' },
  { term: 'White Flight', definition: 'Historically, this is a movement of white residents out of the city in response to black residents moving into the city.' },
  { term: 'Ghetto', definition: 'Areas that are occupied by a specific ethnic group and are plagued with poverty.' },
  { term: 'Brownfields', definition: 'A former industrial or commercial site where future uses are affected by real or perceived environmental contamination.' }
]

function VocabUnit6() {
  const [selectedDefinition, setSelectedDefinition] = useState(null)
  const [matches, setMatches] = useState(new Set())
  const [shuffledTerms, setShuffledTerms] = useState([])
  const [shuffledDefinitions, setShuffledDefinitions] = useState([])
  const [popupTermIndices, setPopupTermIndices] = useState([])
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [wrongDefIndex, setWrongDefIndex] = useState(null)
  const [correctDefIndex, setCorrectDefIndex] = useState(null)
  const [tooltipData, setTooltipData] = useState(null)

  useEffect(() => {
    const terms = [...vocabularyData].sort((a, b) => a.term.localeCompare(b.term))
    const definitions = [...vocabularyData].sort(() => Math.random() - 0.5)
    setShuffledTerms(terms)
    setShuffledDefinitions(definitions)
  }, [])

  useEffect(() => {
    if (selectedDefinition !== null) {
      const unmatchedIndices = shuffledTerms
        .map((_, index) => index)
        .filter(index => !matches.has(`term-${index}`))
      const randomized = [...unmatchedIndices].sort(() => Math.random() - 0.5)
      setPopupTermIndices(randomized)
    }
  }, [selectedDefinition, shuffledTerms, matches])

  const handleDefinitionClick = (index) => {
    if (matches.has(`def-${index}`)) return
    if (selectedDefinition === index) setSelectedDefinition(null)
    else setSelectedDefinition(index)
  }

  const checkMatch = (defIndex, termIndex) => {
    setAttempts(prev => prev + 1)
    const definition = shuffledDefinitions[defIndex]
    const term = shuffledTerms[termIndex]
    if (term.term === definition.term) {
      setCorrectDefIndex(termIndex)
      setTimeout(() => {
        setMatches(prev => new Set([...prev, `def-${defIndex}`, `term-${termIndex}`]))
        setScore(prev => prev + 1)
        setSelectedDefinition(null)
        setCorrectDefIndex(null)
      }, 500)
    } else {
      setWrongDefIndex(termIndex)
      setTimeout(() => setWrongDefIndex(null), 1500)
    }
  }

  const resetGame = () => {
    const terms = [...vocabularyData].sort((a, b) => a.term.localeCompare(b.term))
    const definitions = [...vocabularyData].sort(() => Math.random() - 0.5)
    setShuffledTerms(terms)
    setShuffledDefinitions(definitions)
    setMatches(new Set())
    setSelectedDefinition(null)
    setScore(0)
    setAttempts(0)
    setWrongDefIndex(null)
    setCorrectDefIndex(null)
    setTooltipData(null)
  }

  const isTermMatched = (index) => matches.has(`term-${index}`)
  const isDefinitionMatched = (defIndex) => matches.has(`def-${defIndex}`)

  const findCorrespondingMatch = (type, index) => {
    const item = type === 'term' ? shuffledTerms[index] : shuffledDefinitions[index]
    const vocabItem = vocabularyData.find(v => v.term === item.term)
    if (!vocabItem) return null
    if (type === 'term') {
      const defIndex = shuffledDefinitions.findIndex(d => d.term === vocabItem.term)
      if (defIndex === -1) return null
      return { type: 'definition', index: defIndex, text: vocabItem.definition }
    } else {
      const termIndex = shuffledTerms.findIndex(t => t.term === vocabItem.term)
      if (termIndex === -1) return null
      return { type: 'term', index: termIndex, text: vocabItem.term }
    }
  }

  const handleMatchedItemClick = (type, index, event) => {
    event.stopPropagation()
    const corresponding = findCorrespondingMatch(type, index)
    if (corresponding) {
      setTooltipData(corresponding)
      setTimeout(() => setTooltipData(null), 3000)
    }
  }

  const allMatched = matches.size === vocabularyData.length * 2

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-black to-orange-900 p-4 md:p-8 text-white">
      <header className="mb-6 md:mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-neon-orange transition-colors duration-200 mb-4 text-lg group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Games
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-neon-orange drop-shadow-[0_0_6px_rgba(255,102,0,0.4)]">
              Vocab Unit 6
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm md:text-base">
              <span className="text-neon-orange">Score: </span>
              <span className="font-bold">{score}/{vocabularyData.length}</span>
            </div>
            <button onClick={resetGame} className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-neon-orange rounded-lg hover:bg-neon-orange/20 transition-colors text-sm md:text-base">
              <RotateCcw size={18} />
              Reset
            </button>
          </div>
        </div>
      </header>

      {allMatched ? (
        <main className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-neon-orange/30 max-w-4xl mx-auto shadow-[0_0_20px_rgba(0,0,0,0.5)] text-center">
          <CheckCircle2 size={64} className="mx-auto mb-4 text-neon-orange" />
          <h2 className="text-3xl font-bold text-neon-orange mb-4">Congratulations!</h2>
          <p className="text-gray-200 text-lg mb-6">You matched all {vocabularyData.length} vocabulary terms!</p>
          <p className="text-gray-300 text-sm mb-6">Attempts: {attempts}</p>
          <button onClick={resetGame} className="px-6 py-3 bg-neon-orange/20 border border-neon-orange rounded-lg hover:bg-neon-orange/30 transition-colors font-semibold">
            Play Again
          </button>
        </main>
      ) : (
        <main className="max-w-7xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-gray-200 font-open-sans text-lg">Click a definition and then its matching term</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-neon-orange shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <h2 className="text-xl font-bold text-neon-orange mb-4 text-center">Definitions</h2>
              <div className="space-y-2 md:space-y-3">
                {shuffledDefinitions.map((item, index) => {
                  const matched = isDefinitionMatched(index)
                  const selected = selectedDefinition === index
                  return (
                    <button
                      key={index}
                      onClick={(e) => matched ? handleMatchedItemClick('definition', index, e) : handleDefinitionClick(index)}
                      className={`w-full py-2.5 px-4 rounded-lg border text-left transition-all duration-200 ${
                        matched
                          ? 'bg-gradient-to-r from-green-400 via-green-300 to-green-400 border-green-300 text-black cursor-pointer opacity-80 shadow-[0_0_20px_rgba(0,255,0,0.8),0_0_10px_rgba(0,255,0,0.6)]'
                          : selected
                          ? 'bg-black/80 border border-neon-orange text-white shadow-[0_0_15px_rgba(255,102,0,0.6)]'
                          : 'bg-black/65 border border-neon-orange/50 text-white hover:bg-black/75 hover:border-neon-orange active:bg-black/85'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs md:text-sm leading-relaxed flex-1 font-open-sans">{item.definition}</span>
                        {matched && <CheckCircle2 size={16} className="text-black flex-shrink-0 mt-0.5" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </main>
      )}

      {selectedDefinition !== null && !isDefinitionMatched(selectedDefinition) && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedDefinition(null)}>
          <div className="bg-black/90 backdrop-blur-md rounded-none md:rounded-3xl border border-neon-orange shadow-[0_0_30px_rgba(255,102,0,0.5)] w-full h-full md:max-w-2xl md:w-auto md:max-h-[80vh] md:h-auto flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 md:p-6 pb-4 sticky top-0 bg-black/90 backdrop-blur-md z-10 border-b rounded-t-3xl border-neon-orange/30">
              <h3 className="text-lg md:text-xl font-bold text-neon-orange">
                Select term for: <span className="text-white font-open-sans">{shuffledDefinitions[selectedDefinition]?.definition}</span>
              </h3>
              <button onClick={() => setSelectedDefinition(null)} className="text-gray-400 hover:text-white transition-colors p-1">
                <X size={24} />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 px-4 md:px-6 pb-4 md:pb-6">
              <div className="space-y-2 pt-4">
                {popupTermIndices.map((originalIndex) => {
                  const item = shuffledTerms[originalIndex]
                  const matched = isTermMatched(originalIndex)
                  if (matched) return null
                  const isWrong = wrongDefIndex === originalIndex
                  const isCorrect = correctDefIndex === originalIndex
                  return (
                    <button
                      key={originalIndex}
                      onClick={() => checkMatch(selectedDefinition, originalIndex)}
                      disabled={isCorrect}
                      className={`w-full py-3 px-4 rounded-lg border text-left transition-all duration-500 ${
                        isCorrect
                          ? 'bg-gradient-to-r from-green-400 via-green-300 to-green-400 border-green-300 text-black shadow-[0_0_30px_rgba(0,255,0,1),0_0_15px_rgba(0,255,0,0.8)]'
                          : isWrong
                          ? 'bg-gradient-to-r from-red-500 via-red-400 to-red-500 border-red-400 text-white shadow-[0_0_30px_rgba(255,0,0,1),0_0_15px_rgba(255,0,0,0.8)] animate-pulse'
                          : 'bg-black/65 border-neon-orange/50 text-white hover:bg-black/75 hover:border-neon-orange active:bg-black/85'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm leading-relaxed flex-1 font-open-sans">{item.term}</span>
                        {isCorrect && <CheckCircle2 size={18} className="text-black flex-shrink-0 mt-0.5" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {tooltipData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setTooltipData(null)}>
          <div className="bg-black/90 backdrop-blur-md rounded-2xl p-6 border-2 border-neon-orange shadow-[0_0_40px_rgba(255,102,0,0.8),0_0_20px_rgba(255,102,0,0.6)] max-w-md mx-4 animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="text-neon-orange font-bold text-lg mb-2">{tooltipData.type === 'term' ? 'Term:' : 'Definition:'}</div>
              <div className="text-white text-base md:text-lg font-open-sans">{tooltipData.text}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VocabUnit6
