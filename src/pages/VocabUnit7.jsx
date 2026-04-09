import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, RotateCcw, X } from 'lucide-react'

const vocabularyData = [
  { term: 'Industrial Revolution', definition: 'Took place in the 1760s and lasted to about the 1840s. It included food supply increase and population growth, workers shifting from agriculture to industrial jobs, more people moving to cities, and investors seeking more raw materials and new markets (roughly 1760–1843).' },
  { term: 'The Tragedy of the Commons', definition: 'Society privatizes resources without thinking about the whole-world effect.' },
  { term: 'Primary Sector', definition: 'Extracting raw materials from the earth: mining, agriculture, fishing, logging, extraction.' },
  { term: 'Secondary Sector', definition: 'Processing items or manufacturing something: automotive, construction, manufacturing, food processing, crafts.' },
  { term: 'Tertiary Sector', definition: 'Activities centered on providing a service: hospitality, retail, healthcare, real estate, education.' },
  { term: 'Quaternary Sector', definition: 'Knowledge-based services or activities related to processing information: finance, insurance, and real estate (often grouped as FIRE).' },
  { term: 'Quinary Sector', definition: 'Activities characterized by decision makers, such as executives or those in government positions—high-level administration. Examples include nursing homes, fire services, police services, and child care.' },
  { term: 'Break of Bulk Point', definition: 'An economic center where a manufactured product is assembled and then separated into multiple shipments that are transported to various markets.' },
  { term: 'Bulk Gaining', definition: 'The inputs or raw materials are relatively light compared to the output becoming heavier.' },
  { term: 'Bulk Reducing', definition: 'As raw materials are brought in they are turned into products that weigh less or take up less space.' },
  { term: 'Least Cost Theory', definition: 'Industries will develop or situate themselves in an area that minimizes transportation costs for materials.' },
  { term: 'Agglomeration', definition: 'The clustering of certain things in a mass.' },
  { term: 'Gross Domestic Product', definition: 'The total value of goods produced and services provided in a country during a single year.' },
  { term: 'Gross National Income', definition: 'The value of goods produced and services provided by a country’s citizens both domestically and abroad.' },
  { term: 'Gross National Income Per Capita', definition: 'Gross national income divided by a country’s population—an estimated income per person.' },
  { term: 'Formal Structures of the Economy', definition: 'The state-regulated and taxed part of the economy: fixed wages or working hours, government oversight.' },
  { term: 'Informal Structures of the Economy', definition: 'Under-the-table or “black market” economic activity without fixed wages and not regulated by the government.' },
  { term: 'Income Distribution', definition: 'Focuses on uneven development and where wealth is located in a country.' },
  { term: 'Gender Inequality Index', definition: 'Focuses on gender inequality in healthcare, labor markets, and empowerment.' },
  { term: 'Human Development Index', definition: 'Examines three features of a country’s human development: life expectancy, knowledge/education, and quality of living.' },
  { term: 'Rostow\'s Stages of Economic Growth', definition: 'A model in five stages a society moves through to develop: Traditional Society, Preconditions for Takeoff, Takeoff, Drive to Maturity, and High Mass Consumption.' },
  { term: 'Traditional Society (Rostow Stage 1)', definition: 'Most people work in the primary economic sector, many in agriculture. Growth is restrained because few modern technologies are available.' },
  { term: 'Preconditions for Takeoff (Rostow Stage 2)', definition: 'Demand for raw materials encourages change. Agriculture strengthens and shifts toward commercial agriculture. Investment in trade and manufacturing improves.' },
  { term: 'Takeoff (Rostow Stage 3)', definition: 'Industrialization begins, new technologies appear, and urbanization increases as people move to cities. More workers shift into the secondary sector as manufacturing grows.' },
  { term: 'Drive to Maturity (Rostow Stage 4)', definition: 'New industries expand quickly. Manufacturing shifts toward vehicles and household appliances. Transportation, schools, hospitals, and government buildings develop further.' },
  { term: 'High Mass Consumption (Rostow Stage 5)', definition: 'The primary sector shrinks; more people work in tertiary, quaternary, and quinary sectors. A consumer society forms with more disposable income for nonessential goods and services.' },
  { term: 'Wallerstein\'s World System Theory Model', definition: 'In the world economic system, countries are reliant on each other.' },
  { term: 'Dependency Theory', definition: 'Resources flow from the periphery to the core; the core grows wealthier at the periphery’s expense. Core and periphery rely on each other for different reasons.' },
  { term: 'Commodity Dependence', definition: 'When one country relies too heavily on one product.' },
  { term: 'Complementary', definition: 'Both sides receive something they want or need from trade.' },
  { term: 'Absolute Advantage', definition: 'The ability of an individual or group to produce a certain product more efficiently.' },
  { term: 'Comparative Advantage', definition: 'The ability to produce a specific product at a lower opportunity cost.' },
  { term: 'Opportunity Cost', definition: 'The loss of potential gain from other alternatives when one option is chosen.' },
  { term: 'Free-Market Capitalism', definition: 'Privately owned businesses follow supply and demand with minimal government interference in business.' },
  { term: 'Neoliberalism', definition: 'Ideas based around free-market capitalism.' },
  { term: 'Bracero Program', definition: 'A system from 1942 to 1964 that allowed men with farming experience to work in the US.' },
  { term: 'Border Industrialization Programs', definition: 'Began in 1965 between the US and Mexico; lowered restrictions and duties (tariffs) on machinery, equipment, and raw materials.' },
  { term: 'International Division of Labor', definition: 'Every country has a role in the global economy; countries that obtain raw materials or skills more efficiently work with others to move goods to places that manufacture or consume them.' },
  { term: 'Deindustrialization', definition: 'Social and economic change from removing or reducing industrial capacity or activity—fewer secondary-sector jobs, more emphasis on tertiary, quaternary, and quinary work.' },
  { term: 'Economic Restructuring', definition: 'Urban areas shifting from a manufacturing economy to a service-based economy.' },
  { term: 'Outsourcing', definition: 'Moving manufacturing, production, or service jobs to countries outside where the company is based.' },
  { term: 'Ecotourism', definition: 'Tourism focused on the natural environment, often in places threatened by industrialization or sprawl.' },
  { term: 'Debt for Nature Swap', definition: 'Creditors forgive or reduce part of a developing nation’s foreign debt in exchange for local investments in environmental conservation.' }
]

function VocabUnit7() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-black to-blue-950 p-4 md:p-8 text-white">
      <header className="mb-6 md:mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-neon-blue transition-colors duration-200 mb-4 text-lg group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Games
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-neon-blue drop-shadow-[0_0_6px_rgba(68,153,255,0.4)]">
              Vocab Unit 7
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm md:text-base">
              <span className="text-neon-blue">Score: </span>
              <span className="font-bold">{score}/{vocabularyData.length}</span>
            </div>
            <button onClick={resetGame} className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-neon-blue rounded-lg hover:bg-neon-blue/20 transition-colors text-sm md:text-base">
              <RotateCcw size={18} />
              Reset
            </button>
          </div>
        </div>
      </header>

      {allMatched ? (
        <main className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-neon-blue/30 max-w-4xl mx-auto shadow-[0_0_20px_rgba(0,0,0,0.5)] text-center">
          <CheckCircle2 size={64} className="mx-auto mb-4 text-neon-blue" />
          <h2 className="text-3xl font-bold text-neon-blue mb-4">Congratulations!</h2>
          <p className="text-gray-200 text-lg mb-6">You matched all {vocabularyData.length} vocabulary terms!</p>
          <p className="text-gray-300 text-sm mb-6">Attempts: {attempts}</p>
          <button onClick={resetGame} className="px-6 py-3 bg-neon-blue/20 border border-neon-blue rounded-lg hover:bg-neon-blue/30 transition-colors font-semibold">
            Play Again
          </button>
        </main>
      ) : (
        <main className="max-w-7xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-gray-200 font-open-sans text-lg">Click a definition and then its matching term</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-neon-blue shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <h2 className="text-xl font-bold text-neon-blue mb-4 text-center">Definitions</h2>
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
                          ? 'bg-black/80 border border-neon-blue text-white shadow-[0_0_15px_rgba(68,153,255,0.6)]'
                          : 'bg-black/65 border border-neon-blue/50 text-white hover:bg-black/75 hover:border-neon-blue active:bg-black/85'
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
          <div className="bg-black/90 backdrop-blur-md rounded-none md:rounded-3xl border border-neon-blue shadow-[0_0_30px_rgba(68,153,255,0.5)] w-full h-full md:max-w-2xl md:w-auto md:max-h-[80vh] md:h-auto flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 md:p-6 pb-4 sticky top-0 bg-black/90 backdrop-blur-md z-10 border-b rounded-t-3xl border-neon-blue/30">
              <h3 className="text-lg md:text-xl font-bold text-neon-blue">
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
                          : 'bg-black/65 border-neon-blue/50 text-white hover:bg-black/75 hover:border-neon-blue active:bg-black/85'
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
          <div className="bg-black/90 backdrop-blur-md rounded-2xl p-6 border-2 border-neon-blue shadow-[0_0_40px_rgba(68,153,255,0.8),0_0_20px_rgba(68,153,255,0.6)] max-w-md mx-4 animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="text-neon-blue font-bold text-lg mb-2">{tooltipData.type === 'term' ? 'Term:' : 'Definition:'}</div>
              <div className="text-white text-base md:text-lg font-open-sans">{tooltipData.text}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VocabUnit7
