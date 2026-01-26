import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, X } from 'lucide-react'

const vocabularyData = [
  {
    term: 'Agriculture',
    definition: 'The action of raising animals or crops to obtain food for consumption or for the sale of products.'
  },
  {
    term: 'Agricultural Geography',
    definition: 'The study of the distribution of agriculture, especially in relation to humans.'
  },
  {
    term: 'Economic Factors that Influence Agriculture',
    definition: 'Cost of land, Cost of labor, Cost of machinery.'
  },
  {
    term: 'Capital',
    definition: 'Liquid assets that can be easily sold for cash or cash in hand that is available for spending.'
  },
  {
    term: 'Intensive Agriculture',
    definition: 'Requires large amounts of labor and capital, Uses small plots of land and usually located near large populations, high yield per acre'
  },
  {
    term: 'Extensive Agriculture',
    definition: 'Characterized by low capital and low labor inputs, Uses large plots of land and away from major population centers, low yield per acre'
  },
  {
    term: 'Survey Methods',
    definition: 'Metes and Bounds, Long Lot, Township and Range.'
  },
  {
    term: 'Clustered Settlement',
    definition: 'Most residential homes are clumped together, few houses with fields and resources are further outside town.'
  },
  {
    term: 'Dispersed Settlement',
    definition: 'Homes are further away from each other, surrounded by farmland, easy access to resources.'
  },
  {
    term: 'Linear Settlement',
    definition: 'Built so most people have easy access to transportation or waterways, sometimes are forced to follow a path due to geography.'
  },
  {
    term: 'Metes and Bounds',
    definition: 'Uses landmarks to determine reference as parcels of land are measured in distance, angles, and directions.'
  },
  {
    term: 'Metes',
    definition: 'Measures the distance between two points in a straight line no matter the landscape.'
  },
  {
    term: 'Bounds',
    definition: 'Identifiable features on the landscape such as rivers and roads.'
  },
  {
    term: 'Long Lot',
    definition: 'Meant to give farmers easy access to roads, rivers, and fertile land.'
  },
  {
    term: 'Township and Range',
    definition: 'Divided in sections. A township is 6 mile by 6 mile of land that contains 36 sections. Each section is 1 mile by 1 mile of land. 1 township = 36 sessions 1 section = 640 acres.'
  },
  {
    term: 'Land ordinance of 1785',
    definition: 'created to help survey and sell land west of the Appalachian mountains. Most land west of the Appalachian Mountains at this time wasn\'t settled or owned by white Europeans. This made it easier for the government to sell land to future settlers.'
  },
  {
    term: 'Agricultural Diffusion',
    definition: 'Diffusion of certain plants and animals from one place to another.'
  },
  {
    term: 'Columbian Exchange',
    definition: 'A mass exchange of plants, animals, other products, knowledge, religion, culture, and diseases after Columbus\'s arrival in 1492.'
  },
  {
    term: 'First Agricultural Revolution',
    definition: 'The shift from nomadic hunting and gathering to domesticating animals and plants.'
  },
  {
    term: 'Second Agricultural Revolution',
    definition: 'The creation of different types of machinery to help harvest more raw materials as well as produce more products.'
  },
  {
    term: 'Agricultural Intensification',
    definition: 'The process of increasing agricultural output through the increased advancement of machinery'
  },
  {
    term: 'The Green Revolution (Third Agricultural Revolution)',
    definition: 'A period in the mid-20th century of agricultural transformation, introducing high-yield crop varieties, synthetic fertilizers, pesticides, and advanced irrigation to significantly boost food production.'
  },
  {
    term: 'Genetically Modified Organisms',
    definition: 'These are plants or animals that have had their genes changed through genetic engineering have more favorable traits'
  },
  {
    term: 'Hybridization',
    definition: 'These are plants that are bred to have superior characteristics than previous strands. This is done by cross-breeding different plant strains for more favorable traits.'
  },
  {
    term: 'Subsistence Agriculture',
    definition: 'Farming that focuses on growing crops to provide food for their family or community.'
  },
  {
    term: 'Commercial Agriculture',
    definition: 'Farming focused on growing crop to later sell for a profit'
  },
  {
    term: 'Bid Rent Theory',
    definition: 'The price of the land is higher the closer you are to the city center or the market.The further away you get from the market, the less the land will cost'
  },
  {
    term: 'Economies of Scale',
    definition: 'This term refers to the process in which companies or enterprises begin to save money during production as they produce more units of output.'
  },
  {
    term: 'Commodity Chain',
    definition: 'A process used by business to gather resources transform them into goods or new commodities, and then distribute them to consumers.'
  },
  {
    term: 'Agribusiness',
    definition: 'A set of economic and political relationships that organize food production from the development of seed to marketing the products is known as agribusiness.'
  },
  {
    term: 'Von Thunen Model',
    definition: 'A 19th century- economic theory that explains agricultural land use patterns by organizing organizing farming activities into centric rings around a central market.'
  },
  {
    term: 'Global (Supply Chain)',
    definition: 'The process of goods being produced and distributed'
  },
  {
    term: 'Agricultural Interdependence',
    definition: 'As countries become more and more connected, they also become more dependent on each other for certain imports and exports.'
  },
  {
    term: 'Agricultural Dependency',
    definition: 'The focus on growing crops for export in less developed countries can cause problems economically and environmentally in developing countries.'
  },
  {
    term: 'Desertification',
    definition: 'The process in which land becomes increasingly arid (dry) and infertile due to human activities.'
  },
  {
    term: 'Deforestation',
    definition: 'Clearing away trees so that the land may be used for something besides growing trees again. This typically has the most long-term consequences.'
  },
  {
    term: 'Feedlots',
    definition: 'Specialized, high-density, facilities where cattle are confined and fed high-energy grain diets to reach market weight'
  },
  {
    term: 'Soil Salinization',
    definition: 'The process of soil increasing in salt content.'
  },
  {
    term: 'Terrace Farming',
    definition: 'sustainable agricultural technique that cuts flat, step-like platforms into steep, hilly, or mountainous terrain to create arable land'
  },
  {
    term: 'Urban Farming',
    definition: 'Urban households, especially in developing countries, have been growing crops to help with food insecurity.'
  },
  {
    term: 'Community Supported Agriculture (CSA)',
    definition: 'Farmers can sell a share of the crops and products to local farmers who contract to buy the products.'
  },
  {
    term: 'Organic Farming',
    definition: 'Grow crops without use of chemicals, don\'t pollute the environment as much as non-organic farms, and organic animals are raised without hormones or antibiotics.'
  },
  {
    term: 'Fair Trade Movements',
    definition: 'A movement that strives for equity, justice, and sustainable development so that developing countries can better themselves and not be taken advantage of.'
  },
  {
    term: 'Food Deserts',
    definition: 'A geographic area where affordable, healthy food options are limited due to the lack of access to markets.'
  }
]

function VocabUnit5() {
  const [selectedDefinition, setSelectedDefinition] = useState(null)
  const [matches, setMatches] = useState(new Set())
  const [shuffledTerms, setShuffledTerms] = useState([])
  const [shuffledDefinitions, setShuffledDefinitions] = useState([])
  const [popupTermIndices, setPopupTermIndices] = useState([]) // Randomized indices for popup
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [wrongDefIndex, setWrongDefIndex] = useState(null)
  const [correctDefIndex, setCorrectDefIndex] = useState(null)
  const [tooltipData, setTooltipData] = useState(null) // { type: 'term' | 'definition', index: number, text: string }

  useEffect(() => {
    // Terms always alphabetically sorted, definitions randomized
    const terms = [...vocabularyData].sort((a, b) => a.term.localeCompare(b.term))
    const definitions = [...vocabularyData].sort(() => Math.random() - 0.5)
    setShuffledTerms(terms)
    setShuffledDefinitions(definitions)
  }, [])

  // Randomize popup terms whenever popup opens
  useEffect(() => {
    if (selectedDefinition !== null) {
      // Get all unmatched term indices
      const unmatchedIndices = shuffledTerms
        .map((_, index) => index)
        .filter(index => !matches.has(`term-${index}`))
      
      // Randomize them
      const randomized = [...unmatchedIndices].sort(() => Math.random() - 0.5)
      setPopupTermIndices(randomized)
    }
  }, [selectedDefinition, shuffledTerms, matches])

  const handleDefinitionClick = (index) => {
    // Clicking definition opens popup with terms
    if (matches.has(`def-${index}`)) return
    if (selectedDefinition === index) {
      setSelectedDefinition(null)
    } else {
      setSelectedDefinition(index)
    }
  }

  const checkMatch = (defIndex, termIndex) => {
    setAttempts(prev => prev + 1)
    // defIndex is the definition index, termIndex is the term index in popup
    const definition = shuffledDefinitions[defIndex]
    const term = shuffledTerms[termIndex]
    
    if (term.term === definition.term) {
      // Correct match!
      setCorrectDefIndex(termIndex) // termIndex is the term index in popup
      setTimeout(() => {
        setMatches(prev => new Set([...prev, `def-${defIndex}`, `term-${termIndex}`]))
        setScore(prev => prev + 1)
        setSelectedDefinition(null)
        setCorrectDefIndex(null)
      }, 500)
    } else {
      // Wrong match - show red feedback
      setWrongDefIndex(termIndex) // termIndex is the term index in popup
      setTimeout(() => {
        setWrongDefIndex(null)
      }, 1500)
    }
  }

  const resetGame = () => {
    // Terms always alphabetically sorted, definitions randomized
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

  // Find corresponding match for tooltip
  const findCorrespondingMatch = (type, index) => {
    let item
    if (type === 'term') {
      item = shuffledTerms[index]
    } else {
      item = shuffledDefinitions[index]
    }
    
    // Find the matching pair in vocabularyData
    const vocabItem = vocabularyData.find(v => v.term === item.term)
    if (!vocabItem) return null
    
    if (type === 'term') {
      // Find the definition index in shuffledDefinitions
      const defIndex = shuffledDefinitions.findIndex(d => d.term === vocabItem.term)
      if (defIndex === -1) return null
      return { type: 'definition', index: defIndex, text: vocabItem.definition }
    } else {
      // Find the term index in shuffledTerms
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
      // Hide tooltip after 3 seconds
      setTimeout(() => setTooltipData(null), 3000)
    }
  }

  const allMatched = matches.size === vocabularyData.length * 2

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 p-4 md:p-8 text-white">
      <header className="mb-6 md:mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/90 hover:text-neon-purple transition-colors duration-200 mb-4 text-lg group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Games
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-5xl font-bold text-neon-purple drop-shadow-[0_0_6px_rgba(191,0,255,0.4)]">
              Vocab Unit 5
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm md:text-base">
              <span className="text-neon-purple">Score: </span>
              <span className="font-bold">{score}/{vocabularyData.length}</span>
            </div>
            <button
              onClick={resetGame}
              className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-neon-purple rounded-lg hover:bg-neon-purple/20 transition-colors text-sm md:text-base"
            >
              <RotateCcw size={18} />
              Reset
            </button>
          </div>
        </div>
      </header>

      {allMatched ? (
        <main className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-neon-purple/30 max-w-4xl mx-auto shadow-[0_0_20px_rgba(0,0,0,0.5)] text-center">
          <CheckCircle2 size={64} className="mx-auto mb-4 text-neon-purple" />
          <h2 className="text-3xl font-bold text-neon-purple mb-4">Congratulations!</h2>
          <p className="text-gray-200 text-lg mb-6">
            You matched all {vocabularyData.length} vocabulary terms!
          </p>
          <p className="text-gray-300 text-sm mb-6">
            Attempts: {attempts}
          </p>
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-neon-purple/20 border border-neon-purple rounded-lg hover:bg-neon-purple/30 transition-colors font-semibold"
          >
            Play Again
          </button>
        </main>
      ) : (
        <main className="max-w-7xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-gray-300">
              Click a definition and then its matching term
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Definitions Column */}
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-neon-purple shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <h2 className="text-xl font-bold text-neon-purple mb-4 text-center">
                Definitions
              </h2>
              <div className="space-y-2 md:space-y-3">
                {shuffledDefinitions.map((item, index) => {
                  const matched = isDefinitionMatched(index)
                  const selected = selectedDefinition === index
                  return (
                    <button
                      key={index}
                      onClick={(e) => matched ? handleMatchedItemClick('definition', index, e) : handleDefinitionClick(index)}
                      disabled={false}
                      className={`w-full py-2.5 px-4 rounded-lg border text-left transition-all duration-200 relative ${
                        matched
                          ? 'bg-gradient-to-r from-green-400 via-green-300 to-green-400 border-green-300 text-black cursor-pointer opacity-80 shadow-[0_0_20px_rgba(0,255,0,0.8),0_0_10px_rgba(0,255,0,0.6)]'
                          : selected
                          ? 'bg-black/70 border border-neon-purple text-white shadow-[0_0_15px_rgba(191,0,255,0.6)]'
                          : 'bg-black/50 border border-neon-purple/50 text-gray-200 hover:bg-black/70 hover:border-neon-purple active:bg-black/80'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs md:text-sm leading-relaxed flex-1">{item.definition}</span>
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

      {/* Popup for selecting term */}
      {selectedDefinition !== null && !isDefinitionMatched(selectedDefinition) && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDefinition(null)}
        >
          <div 
            className="bg-black/90 backdrop-blur-md rounded-none md:rounded-3xl border border-neon-purple shadow-[0_0_30px_rgba(191,0,255,0.5)] w-full h-full md:max-w-2xl md:w-auto md:max-h-[80vh] md:h-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:p-6 pb-4 sticky top-0 bg-black/90 backdrop-blur-md z-10 border-b rounded-t-3xl border-neon-purple/30">
              <h3 className="text-lg md:text-xl font-bold text-neon-purple">
                Select term for: <span className="text-white">{shuffledDefinitions[selectedDefinition]?.definition}</span>
              </h3>
              <button
                onClick={() => setSelectedDefinition(null)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 px-4 md:px-6 pb-4 md:pb-6">
              <div className="space-y-2 pt-4">
                {popupTermIndices.map((originalIndex, popupIndex) => {
                  const item = shuffledTerms[originalIndex]
                  const matched = isTermMatched(originalIndex)
                  if (matched) return null
                  const isWrong = wrongDefIndex === originalIndex
                  const isCorrect = correctDefIndex === originalIndex
                  return (
                    <button
                      key={originalIndex}
                      onClick={() => {
                        checkMatch(selectedDefinition, originalIndex)
                      }}
                      disabled={isCorrect}
                      className={`w-full py-3 px-4 rounded-lg border text-left transition-all duration-500 ${
                        isCorrect
                          ? 'bg-gradient-to-r from-green-400 via-green-300 to-green-400 border-green-300 text-black shadow-[0_0_30px_rgba(0,255,0,1),0_0_15px_rgba(0,255,0,0.8)]'
                          : isWrong
                          ? 'bg-gradient-to-r from-red-500 via-red-400 to-red-500 border-red-400 text-white shadow-[0_0_30px_rgba(255,0,0,1),0_0_15px_rgba(255,0,0,0.8)] animate-pulse'
                          : 'bg-black/50 border-neon-purple/50 text-gray-200 hover:bg-black/70 hover:border-neon-purple active:bg-black/80'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm leading-relaxed flex-1">{item.term}</span>
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

      {/* Tooltip for matched items */}
      {tooltipData && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setTooltipData(null)}
        >
          <div className="bg-black/90 backdrop-blur-md rounded-2xl p-6 border-2 border-neon-purple shadow-[0_0_40px_rgba(191,0,255,0.8),0_0_20px_rgba(191,0,255,0.6)] max-w-md mx-4 animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="text-neon-purple font-bold text-lg mb-2">
                {tooltipData.type === 'term' ? 'Term:' : 'Definition:'}
              </div>
              <div className="text-white text-base md:text-lg">
                {tooltipData.text}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VocabUnit5
