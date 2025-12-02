import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, X } from 'lucide-react'

const vocabularyData = [
  {
    term: 'Modern State',
    definition: 'A state in which power is centralized and exercised by sovereign control over a clear boundary. (Synonymous with Country)'
  },
  {
    term: 'Sovereignty',
    definition: 'The authority of a state to govern itself. (Supreme power or authority)'
  },
  {
    term: 'Nation',
    definition: 'A group of people with shared similar culture and a historical attachment to an area or homeland. Group who seeks some degree of political control over their homeland.'
  },
  {
    term: 'Multinational State',
    definition: 'A State where there are multiple national groups within the borders.'
  },
  {
    term: 'Multi State Nation',
    definition: 'A nation that is in multiple states. (North Korea and South Korea).'
  },
  {
    term: 'Autonomous Regions',
    definition: 'Have a high degree of self-government and freedom to govern themselves.'
  },
  {
    term: 'Semi-Autonomous Regions',
    definition: 'Regions with a moderate of self-government and freedom to govern themselves.'
  },
  {
    term: 'Nation-State',
    definition: 'A sovereign state whose citizens are similar or mostly homogenous with cultural factors.'
  },
  {
    term: 'Stateless nations',
    definition: 'A nation that doesn\'t have a specific state. They are not recognized as a state as they don\'t have their own specific territory or boundary.'
  },
  {
    term: 'Imperialism',
    definition: 'The idea that an empire needs to extend their power over other countries through diplomacy and military force.'
  },
  {
    term: 'Colonialism',
    definition: 'The act of claiming and settling territories to exert economic and social control.'
  },
  {
    term: 'Self-Determination',
    definition: 'The idea that people have the right to govern themselves. Often times used with a nation or ethnicity that wants to have its own state.'
  },
  {
    term: 'Balkanization',
    definition: 'The division of a larger state into smaller political units or states.'
  },
  {
    term: 'Devolution',
    definition: 'Breaking up of a state into smaller units or the passing of power from a central governments to lower governments.'
  },
  {
    term: 'Territoriality',
    definition: 'The monopolization of a certain space by a group of people that are connected through economic, cultural, and political traits.'
  },
  {
    term: 'Neocolonialism',
    definition: 'Developed countries exert economic power over developing countries.'
  },
  {
    term: 'Shatterbelt',
    definition: 'Regions that are politically or culturally divided and cause conflict at a local scale.'
  },
  {
    term: 'Chokepoint',
    definition: 'An area that narrows, which makes trade and travel more difficult.'
  },
  {
    term: 'Relic Boundary',
    definition: 'A former boundary that no longer exists, but still holds significance whether that is economically or culturally.'
  },
  {
    term: 'Superimposed',
    definition: 'Placed or laid over something else.'
  },
  {
    term: 'Antecedent (Boundary)',
    definition: 'A thing or event that exists before.'
  },
  {
    term: 'Geometric Boundary',
    definition: 'Boundary that follows a straight line, often latitude or longitude lines. They can also be superimposed or antecedent.'
  },
  {
    term: 'Subsequent Boundary',
    definition: 'Boundary drawn where people have already settled with cultures already established. (Distinguished from antecedent)'
  },
  {
    term: 'Consequent Boundary',
    definition: 'A boundary that is drawn to accommodate existing differences among people such as ethnicity, language, religion, and other factors.'
  },
  {
    term: 'Defined Boundary',
    definition: 'A boundary that is established by a treaty or a legal document that describes and identifies the boundary between political states.'
  },
  {
    term: 'Delimited',
    definition: 'A boundary is a line drawn on a map that shows the limits of the government\'s jurisdiction.'
  },
  {
    term: 'Demarcated Boundary',
    definition: 'A boundary the is identifiable by physical objects, such as walls, signs, and fences.'
  },
  {
    term: 'Contested Boundaries',
    definition: 'Defined boundaries, must be delimited or demarcated so people know where the boundaries are on earth.'
  },
  {
    term: 'Definitional (Positional)',
    definition: 'Conflicts over the interpretation of documents that define a boundary or the way that is is shown on the ground.'
  },
  {
    term: 'Locational (Territorial)',
    definition: 'Conflicts between states over the location of a boundary.'
  },
  {
    term: 'Operational (Functional)',
    definition: 'Conflicts over the national policies applied at a border.'
  },
  {
    term: 'Allocational (Resource)',
    definition: 'Conflicts over the use of resources created or complicated by a boundary.'
  },
  {
    term: 'Maritime Boundaries',
    definition: 'Boundaries that are found in the sea that give control to the state that borders it.'
  },
  {
    term: 'The International Law of the Sea',
    definition: 'A legal framework for marine activities between coastal states.'
  },
  {
    term: 'Internal Boundaries',
    definition: 'boundaries in a State (country) that divide that state into smaller districts.'
  },
  {
    term: 'Voting Districts',
    definition: 'A more localized area where voters vote for Congress representatives in the house. After each census redistricting takes place.'
  },
  {
    term: 'Redistricting',
    definition: 'Internal political boundaries are redrawn after each census. This is the creation of the new voting districts for legislatures.'
  },
  {
    term: 'Gerrymandering',
    definition: 'The majority party in power of the state legislature redraws voting districts to give them a partisan advantage.'
  },
  {
    term: 'Unitary State',
    definition: 'have a strong central government. Hold almost all authority. Very little power is given to local governments.'
  },
  {
    term: 'Federal State',
    definition: 'have a decentralized government. They share political power with lower levels of government.'
  },
  {
    term: 'Ethnic Separatism',
    definition: 'The political process of an ethnic nation breaking away or attempting to break away from a state to gain more power over itself.'
  },
  {
    term: 'Ethnic Cleansing',
    definition: 'The intentional removal or killing of ethnic groups.'
  },
  {
    term: 'Terrorism',
    definition: 'The unlawful use of violence and intimidation, especially against civilians, in the pursuit of political aims.'
  },
  {
    term: 'Irredentism',
    definition: 'A policy of advocating for the restoration of a country by annexing territories that formerly belonged to a certain state. Uniting nations that are part of separate countries.'
  },
  {
    term: 'Democratization',
    definition: 'A system of government in which the whole population or all eligible members of a state participate in the government.'
  },
  {
    term: 'Supranationalism',
    definition: 'The organization of several countries to achieve common goals and benefits for all countries involved. Often based around political, military, economic, or environmental concerns.'
  },
  {
    term: 'Centrifugal Forces',
    definition: 'Something that pulls countries or groups apart.'
  },
  {
    term: 'Centripetal Forces',
    definition: 'Something that pulls countries or groups together.'
  },
  {
    term: 'Failed States',
    definition: 'a state that is unable to perform basic governmental functions or responsibilities. They lack proper authority over the land.'
  },
  {
    term: 'Uneven Development',
    definition: 'Certain areas of states are not always equally developed. This will lead to hostility between richer and poorer areas.'
  },
  {
    term: 'Ethnonationalism',
    definition: 'National identity is based on common ethnicity or an attempt to tie ethnicity with their nationality.'
  },
  {
    term: 'Equitable Infrastructure',
    definition: 'If all parts of a country feel that the government is helping develop their area will keep them happier.'
  },
  {
    term: 'Cultural Cohesion',
    definition: 'The action of forming a united whole.'
  }
]

function VocabUnit4() {
  const [selectedDefinition, setSelectedDefinition] = useState(null)
  const [matches, setMatches] = useState(new Set())
  const [shuffledTerms, setShuffledTerms] = useState([])
  const [shuffledDefinitions, setShuffledDefinitions] = useState([])
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-black to-cyan-900 p-4 md:p-8 text-white">
      <header className="mb-6 md:mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/90 hover:text-neon-cyan transition-colors duration-200 mb-4 text-lg group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Games
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-5xl font-bold text-neon-cyan drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
              Vocab Unit 4
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm md:text-base">
              <span className="text-neon-cyan">Score: </span>
              <span className="font-bold">{score}/{vocabularyData.length}</span>
            </div>
            <button
              onClick={resetGame}
              className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-neon-cyan rounded-lg hover:bg-neon-cyan/20 transition-colors text-sm md:text-base"
            >
              <RotateCcw size={18} />
              Reset
            </button>
          </div>
        </div>
      </header>

      {allMatched ? (
        <main className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-neon-cyan/30 max-w-4xl mx-auto shadow-[0_0_20px_rgba(0,0,0,0.5)] text-center">
          <CheckCircle2 size={64} className="mx-auto mb-4 text-neon-cyan" />
          <h2 className="text-3xl font-bold text-neon-cyan mb-4">Congratulations!</h2>
          <p className="text-gray-200 text-lg mb-6">
            You matched all {vocabularyData.length} vocabulary terms!
          </p>
          <p className="text-gray-300 text-sm mb-6">
            Attempts: {attempts}
          </p>
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-neon-cyan/20 border border-neon-cyan rounded-lg hover:bg-neon-cyan/30 transition-colors font-semibold"
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
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-neon-cyan shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <h2 className="text-xl font-bold text-neon-cyan mb-4 text-center">
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
                          ? 'bg-black/70 border border-neon-cyan text-white shadow-[0_0_15px_rgba(0,255,255,0.6)]'
                          : 'bg-black/50 border border-neon-cyan/50 text-gray-200 hover:bg-black/70 hover:border-neon-cyan active:bg-black/80'
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
            className="bg-black/90 backdrop-blur-md rounded-none md:rounded-3xl border border-neon-cyan shadow-[0_0_30px_rgba(0,255,255,0.5)] w-full h-full md:max-w-2xl md:w-auto md:max-h-[80vh] md:h-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:p-6 pb-4 sticky top-0 bg-black/90 backdrop-blur-md z-10 border-b rounded-t-3xl border-neon-cyan/30">
              <h3 className="text-lg md:text-xl font-bold text-neon-cyan">
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
              <div className="space-y-2">
                {shuffledTerms.map((item, index) => {
                  const matched = isTermMatched(index)
                  if (matched) return null
                  const isWrong = wrongDefIndex === index
                  const isCorrect = correctDefIndex === index
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        checkMatch(selectedDefinition, index)
                      }}
                      disabled={isCorrect}
                      className={`w-full py-3 px-4 rounded-lg border text-left transition-all duration-500 ${
                        isCorrect
                          ? 'bg-gradient-to-r from-green-400 via-green-300 to-green-400 border-green-300 text-black shadow-[0_0_30px_rgba(0,255,0,1),0_0_15px_rgba(0,255,0,0.8)]'
                          : isWrong
                          ? 'bg-gradient-to-r from-red-500 via-red-400 to-red-500 border-red-400 text-white shadow-[0_0_30px_rgba(255,0,0,1),0_0_15px_rgba(255,0,0,0.8)] animate-pulse'
                          : 'bg-black/50 border-neon-cyan/50 text-gray-200 hover:bg-black/70 hover:border-neon-cyan active:bg-black/80'
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
          <div className="bg-black/90 backdrop-blur-md rounded-2xl p-6 border-2 border-neon-cyan shadow-[0_0_40px_rgba(0,255,255,0.8),0_0_20px_rgba(0,255,255,0.6)] max-w-md mx-4 animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="text-neon-cyan font-bold text-lg mb-2">
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

export default VocabUnit4

