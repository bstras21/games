import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, X } from 'lucide-react'

const vocabularyData = [
  {
    term: 'Culture',
    definition: 'the shared practices, technologies, attitudes, and behaviors transmitted by a society.'
  },
  {
    term: 'Material Culture',
    definition: 'Items or physical objects that show what people value or are able represent beliefs and attitude.'
  },
  {
    term: 'Non-material Culture',
    definition: 'The ideas, beliefs, and values of non-physical things that make up a culture.'
  },
  {
    term: 'Folk Culture',
    definition: 'culture that is local or homogenous to a region.'
  },
  {
    term: 'Pop Culture',
    definition: 'culture that spreads across larger regions or areas and is heterogeneous or different across the area it affects.'
  },
  {
    term: 'Shared Practices',
    definition: 'actions that are common or done by many people.'
  },
  {
    term: 'Gender Roles',
    definition: 'Matriarchy or Patriarchy.'
  },
  {
    term: 'Systems of Government',
    definition: "Who's in charge? (Communist Regime, Dictatorship, Parliament, Democratic Republic)"
  },
  {
    term: 'Cultural Traits',
    definition: 'are those elements developed through social interaction that are transmitted or communicated in some form.'
  },
  {
    term: 'Language',
    definition: 'influenced by the location, as well as contact w/other people.'
  },
  {
    term: 'Clothing/fashion',
    definition: 'influenced by aesthetics (beauty), Weather/climate, religious influences, and jobs.'
  },
  {
    term: 'Contagious Diffusion',
    definition: 'the movement of cultural traits starting in one area and rapidly spreading to the surrounding area'
  },
  {
    term: 'Hierarchical Diffusion',
    definition: 'the spread of ideas from people or places with more authority or relevance to other people or places.'
  },
  {
    term: 'Stimulus diffusion',
    definition: 'When the full or entire belief isn\'t spread, but the main or underlying ideas do'
  },
  {
    term: 'Barriers to diffusion',
    definition: 'things that prevent or slow down diffusion'
  },
  {
    term: 'Acculturation',
    definition: 'when a group of people in one culture adopts trait from another one'
  },
  {
    term: 'Creolization',
    definition: 'This is the process of mixing cultural traits, primarily languages'
  },
  {
    term: 'Lingua franca',
    definition: 'a common language used between speakers w/different native languages'
  },
  {
    term: 'Colonialism',
    definition: 'policy or practice of acquiring partial or full control of another country'
  },
  {
    term: 'Imperialism',
    definition: 'policy of extending a country\'s power through diplomacy or military force.'
  },
  {
    term: 'Cultural Divergence',
    definition: 'Cultures further separate themselves from other cultures as time moves on'
  },
  {
    term: 'Cultural convergence',
    definition: 'As more interaction between different people occur, many cultures slowly become more and more similar to each other'
  },
  {
    term: 'Cultural Hearth',
    definition: 'A place where an idea, innovation, or civilization was born'
  },
  {
    term: 'Food Preferences',
    definition: 'what kind of Food is typically eaten?'
  },
  {
    term: 'Architecture',
    definition: 'How buildings are constructed.'
  },
  {
    term: 'Land Use',
    definition: 'how land is used/what is it used for'
  },
  {
    term: 'Ethnicity',
    definition: 'a group with common national or cultural traditions'
  },
  {
    term: 'Gender',
    definition: 'range of characteristics attributed to certain levels of Masculinity and Femininity'
  },
  {
    term: 'Religion',
    definition: 'the Faith and worship of higher beings with supreme power'
  },
  {
    term: 'Nationality/Country of Origin',
    definition: 'association with a certain country or place of origin.'
  },
  {
    term: 'Cultural Relativism',
    definition: 'evaluating a culture using its own standards.'
  },
  {
    term: 'Cultural Diffusion',
    definition: 'movement of cultural traits, ideas, and characteristics from its source to other locations'
  },
  {
    term: 'Ethnocentrism',
    definition: 'evaluating another culture based off of the culture that is your own.'
  },
  {
    term: 'Xenophobia',
    definition: 'Dislike of other people from other countries'
  },
  {
    term: 'Cultural Landscape',
    definition: 'A landscape that portrays, displays, or reflects human impacts on a physical landscape'
  },
  {
    term: 'Landscape',
    definition: 'All visible features of an area of countryside or land, often considered in their aesthetic appeal'
  },
  {
    term: 'Language Family',
    definition: 'A group of languages that are connected through a parent language'
  },
  {
    term: 'Accent',
    definition: 'The way in which a language is pronounced or the way it sounds'
  },
  {
    term: 'Dialect',
    definition: 'A certain form of language that is spoken differently than the standard language based on its specific region'
  },
  {
    term: 'Isogloss',
    definition: 'A boundary that separates linguistic regions'
  },
  {
    term: 'Universalizing Religion',
    definition: 'A religion that tries to reach as many people as possible'
  },
  {
    term: 'Ethnic Religion',
    definition: 'Typically don\'t spread far & they usually don\'t seek to convert others.'
  },
  {
    term: 'Branches',
    definition: 'Large separate groups of religion'
  },
  {
    term: 'Denomination',
    definition: 'A localized subgroup of a religion or a group that is separate from other'
  },
  {
    term: 'Monotheistic',
    definition: 'Worshipping one God or Deity.'
  },
  {
    term: 'Polytheistic',
    definition: 'Worshipping many gods or deities.'
  },
  {
    term: 'Assimilation',
    definition: 'When a Minority group adopts the dominant culture'
  },
  {
    term: 'Syncretism',
    definition: 'The blending and merging of different cultures.'
  },
  {
    term: 'Multiculturalism',
    definition: 'The presence of multiple diverse cultures in society. Each culture is distinct from the others.'
  },
  {
    term: 'Modern Cultural Diffusion',
    definition: 'as places become more economically developed, they will also change their cultural Values or preferences.'
  },
  {
    term: 'Time space conversion',
    definition: 'Places and people are getting closer together because technology is improving'
  },
  {
    term: 'Physical Features',
    definition: 'things that we can see in the landscape'
  },
  {
    term: 'Agricultural & Industrial Practices',
    definition: 'Certain crops being planted or animals grazing. Industries or factories, and how well developed is the landscape'
  },
  {
    term: 'Religious & Linguistic Characteristics',
    definition: 'Different languages on signs, places of worship, religious dress/holidays'
  },
  {
    term: 'Evidence of Sequent Occupance',
    definition: 'Throughout history groups will leave their mark on the place even when they\'re gone.'
  },
  {
    term: 'Traditional & Modern Architecture',
    definition: 'Different styles of architecture are used to show power or honor places. Special buildings usually have certain styles of architecture'
  },
  {
    term: 'Land use patterns',
    definition: 'how the land is being used / what it is used for'
  },
  {
    term: 'Place',
    definition: 'Specific location on the earth w/ separate cultural characteristics.'
  },
  {
    term: 'Placemaking',
    definition: 'process in which a community or cultural group get together to plan public spaces and shape their landscape.'
  },
  {
    term: 'Centripetal force',
    definition: 'something that pulls people closer and unifies them'
  },
  {
    term: 'Centrifugal force',
    definition: 'is that factors that pull groups apart or separate people'
  },
  {
    term: 'Diffusion',
    definition: 'action of something spreading out over a widespread area'
  }
]

function VocabMinus1() {
  const [selectedTerm, setSelectedTerm] = useState(null)
  const [selectedDefinition, setSelectedDefinition] = useState(null)
  const [matches, setMatches] = useState(new Set())
  const [shuffledTerms, setShuffledTerms] = useState([])
  const [shuffledDefinitions, setShuffledDefinitions] = useState([])
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [wrongDefIndex, setWrongDefIndex] = useState(null)
  const [correctDefIndex, setCorrectDefIndex] = useState(null)
  const [reverseMode, setReverseMode] = useState(false)

  useEffect(() => {
    // Terms always alphabetically sorted, definitions sorted alphabetically in reverse mode, random in normal mode
    const terms = [...vocabularyData].sort((a, b) => a.term.localeCompare(b.term))
    const definitions = reverseMode 
      ? [...vocabularyData].sort((a, b) => a.definition.localeCompare(b.definition))
      : [...vocabularyData].sort(() => Math.random() - 0.5)
    setShuffledTerms(terms)
    setShuffledDefinitions(definitions)
  }, [reverseMode])

  useEffect(() => {
    // Shuffle items in popup whenever it opens
    if (selectedTerm !== null || selectedDefinition !== null) {
      if (reverseMode && selectedDefinition !== null) {
        // In reverse mode, keep terms alphabetical in popup (don't shuffle)
        // Terms are already sorted alphabetically
      } else if (!reverseMode && selectedTerm !== null) {
        // Normal mode, shuffle definitions for popup
        const termIndex = selectedTerm
        if (!matches.has(`term-${termIndex}`)) {
          const definitions = [...vocabularyData].sort(() => Math.random() - 0.5)
          setShuffledDefinitions(definitions)
        }
      }
    }
  }, [selectedTerm, selectedDefinition, matches, reverseMode])

  const handleTermClick = (index) => {
    if (matches.has(`term-${index}`)) return
    
    if (selectedTerm === index) {
      setSelectedTerm(null)
    } else {
      setSelectedTerm(index)
    }
  }

  const handleDefinitionClick = (index) => {
    if (reverseMode) {
      // In reverse mode, clicking definition opens popup with terms
      if (matches.has(`def-${index}`)) return
      if (selectedDefinition === index) {
        setSelectedDefinition(null)
      } else {
        setSelectedDefinition(index)
      }
    } else {
      // Normal mode behavior
      if (matches.has(`def-${index}`)) return
      if (selectedDefinition === index) {
        setSelectedDefinition(null)
      } else {
        setSelectedDefinition(index)
        if (selectedTerm !== null) {
          checkMatch(selectedTerm, index)
        }
      }
    }
  }

  const checkMatch = (termIndex, defIndex) => {
    setAttempts(prev => prev + 1)
    let term, definition
    
    if (reverseMode) {
      // In reverse mode, termIndex is actually defIndex and defIndex is termIndex
      definition = shuffledDefinitions[termIndex]
      term = shuffledTerms[defIndex]
    } else {
      term = shuffledTerms[termIndex]
      definition = shuffledDefinitions[defIndex]
    }
    
    if (term.term === definition.term) {
      // Correct match!
      if (reverseMode) {
        setCorrectDefIndex(defIndex) // defIndex is the term index in popup
        setTimeout(() => {
          setMatches(prev => new Set([...prev, `def-${termIndex}`, `term-${defIndex}`]))
          setScore(prev => prev + 1)
          setSelectedDefinition(null)
          setCorrectDefIndex(null)
        }, 500)
      } else {
        setCorrectDefIndex(defIndex)
        setTimeout(() => {
          setMatches(prev => new Set([...prev, `term-${termIndex}`, `def-${defIndex}`]))
          setScore(prev => prev + 1)
          setSelectedTerm(null)
          setSelectedDefinition(null)
          setCorrectDefIndex(null)
        }, 500)
      }
    } else {
      // Wrong match - show red feedback
      if (reverseMode) {
        setWrongDefIndex(defIndex) // defIndex is the term index in popup
        setTimeout(() => {
          setWrongDefIndex(null)
        }, 1500)
      } else {
        setWrongDefIndex(defIndex)
        setTimeout(() => {
          setWrongDefIndex(null)
        }, 1500)
      }
    }
  }

  const resetGame = () => {
    // Terms always alphabetically sorted, definitions sorted alphabetically in reverse mode, random in normal mode
    const terms = [...vocabularyData].sort((a, b) => a.term.localeCompare(b.term))
    const definitions = reverseMode 
      ? [...vocabularyData].sort((a, b) => a.definition.localeCompare(b.definition))
      : [...vocabularyData].sort(() => Math.random() - 0.5)
    setShuffledTerms(terms)
    setShuffledDefinitions(definitions)
    setMatches(new Set())
    setSelectedTerm(null)
    setSelectedDefinition(null)
    setScore(0)
    setAttempts(0)
    setWrongDefIndex(null)
    setCorrectDefIndex(null)
  }

  const isTermMatched = (index) => matches.has(`term-${index}`)
  const isDefinitionMatched = (defIndex) => matches.has(`def-${defIndex}`)

  const allMatched = matches.size === vocabularyData.length * 2

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 p-4 md:p-8 text-white">
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
            <h1 className="text-3xl md:text-5xl font-bold text-neon-magenta drop-shadow-[0_0_6px_rgba(255,0,255,0.4)]">
              Vocab
            </h1>
            <button
              onClick={() => {
                setReverseMode(!reverseMode)
                setSelectedTerm(null)
                setSelectedDefinition(null)
                setMatches(new Set())
                setScore(0)
                setAttempts(0)
                setWrongDefIndex(null)
                setCorrectDefIndex(null)
              }}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 font-semibold text-sm md:text-base ${
                reverseMode
                  ? 'bg-gradient-to-r from-neon-cyan/90 via-neon-cyan/70 to-neon-cyan/50 border-neon-cyan text-white shadow-[0_0_15px_rgba(0,255,255,0.6)]'
                  : 'bg-black/40 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/20'
              }`}
            >
              <span className="flex items-center gap-2">
                Definition-First
                {reverseMode && <CheckCircle2 size={16} className="text-white" />}
              </span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm md:text-base">
              <span className="text-neon-cyan">Score: </span>
              <span className="font-bold">{score}/{vocabularyData.length}</span>
            </div>
            <button
              onClick={resetGame}
              className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-neon-magenta rounded-lg hover:bg-neon-magenta/20 transition-colors text-sm md:text-base"
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
          <h2 className="text-3xl font-bold text-neon-magenta mb-4">Congratulations!</h2>
          <p className="text-gray-200 text-lg mb-6">
            You matched all {vocabularyData.length} vocabulary terms!
          </p>
          <p className="text-gray-300 text-sm mb-6">
            Attempts: {attempts}
          </p>
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-neon-magenta/20 border border-neon-magenta rounded-lg hover:bg-neon-magenta/30 transition-colors font-semibold"
          >
            Play Again
          </button>
        </main>
      ) : (
        <main className="max-w-7xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-gray-300">
              {reverseMode 
                ? 'Click a definition and then its matching term'
                : 'Click a term and then its matching definition'
              }
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Terms Column - or Definitions in reverse mode */}
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-neon-magenta shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <h2 className="text-xl font-bold text-neon-magenta mb-4 text-center">
                {reverseMode ? 'Definitions' : 'Terms'}
              </h2>
              <div className={reverseMode ? "space-y-2 md:space-y-3" : "grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"}>
                {reverseMode ? (
                  // Reverse mode: show definitions as buttons (but they should look like definitions - black/cyan, full width)
                  shuffledDefinitions.map((item, index) => {
                    const matched = isDefinitionMatched(index)
                    const selected = selectedDefinition === index
                    return (
                      <button
                        key={index}
                        onClick={() => handleDefinitionClick(index)}
                        disabled={matched}
                        className={`w-full py-2.5 px-4 rounded-lg border text-left transition-all duration-200 ${
                          matched
                            ? 'bg-gradient-to-r from-green-400 via-green-300 to-green-400 border-green-300 text-black cursor-not-allowed opacity-80 shadow-[0_0_20px_rgba(0,255,0,0.8),0_0_10px_rgba(0,255,0,0.6)]'
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
                  })
                ) : (
                  // Normal mode: show terms as buttons
                  shuffledTerms.map((item, index) => {
                    const matched = isTermMatched(index)
                    const selected = selectedTerm === index
                    return (
                      <button
                        key={index}
                        onClick={() => handleTermClick(index)}
                        disabled={matched}
                        className={`w-full py-2 px-4 rounded-xl text-center transition-all duration-200 font-semibold text-sm md:text-base ${
                          matched
                            ? 'bg-gradient-to-r from-neon-cyan via-neon-cyan/80 to-neon-cyan/60 border border-neon-cyan text-black cursor-not-allowed opacity-80 shadow-[0_0_20px_rgba(0,255,255,0.8),0_0_10px_rgba(0,255,255,0.6)]'
                            : selected
                            ? 'bg-gradient-to-r from-neon-magenta via-neon-magenta to-neon-magenta/90 border border-neon-magenta text-white shadow-[0_0_30px_rgba(255,0,255,1),0_0_15px_rgba(255,0,255,0.8),inset_0_0_20px_rgba(255,0,255,0.3)]'
                            : 'bg-gradient-to-r from-neon-magenta/90 via-neon-magenta/70 to-neon-magenta/50 border border-neon-magenta text-white hover:from-neon-magenta hover:via-neon-magenta/95 hover:to-neon-magenta/80 hover:shadow-[0_0_25px_rgba(255,0,255,0.9),0_0_10px_rgba(255,0,255,0.6)] active:from-neon-magenta active:to-neon-magenta active:shadow-[0_0_35px_rgba(255,0,255,1),0_0_15px_rgba(255,0,255,0.8)]'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span>{item.term}</span>
                          {matched && <CheckCircle2 size={16} className="text-black flex-shrink-0" />}
                        </div>
                      </button>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Popup for selecting definition or term */}
      {((!reverseMode && selectedTerm !== null && !isTermMatched(selectedTerm)) || 
        (reverseMode && selectedDefinition !== null && !isDefinitionMatched(selectedDefinition))) && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => {
            if (reverseMode) setSelectedDefinition(null)
            else setSelectedTerm(null)
          }}
        >
          <div 
            className="bg-black/90 backdrop-blur-md rounded-none md:rounded-3xl p-4 md:p-6 border border-neon-cyan shadow-[0_0_30px_rgba(0,255,255,0.5)] w-full h-full md:max-w-2xl md:w-auto md:max-h-[80vh] md:h-auto overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg md:text-xl font-bold text-neon-magenta">
                {reverseMode 
                  ? <>Select term for: <span className="text-white">{shuffledDefinitions[selectedDefinition]?.definition}</span></>
                  : <>Select definition for: <span className="text-white">{shuffledTerms[selectedTerm]?.term}</span></>
                }
              </h3>
              <button
                onClick={() => {
                  if (reverseMode) setSelectedDefinition(null)
                  else setSelectedTerm(null)
                }}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-2">
              {reverseMode ? (
                // Reverse mode: show terms in popup (definition style - black/cyan)
                shuffledTerms.map((item, index) => {
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
                })
              ) : (
                // Normal mode: show definitions in popup
                shuffledDefinitions.map((item, index) => {
                  const matched = isDefinitionMatched(index)
                  if (matched) return null
                  const isWrong = wrongDefIndex === index
                  const isCorrect = correctDefIndex === index
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        checkMatch(selectedTerm, index)
                      }}
                      disabled={isCorrect}
                      className={`w-full py-3 px-4 rounded-lg border text-left transition-all duration-500 ${
                        isCorrect
                          ? 'bg-gradient-to-r from-green-400 via-green-300 to-green-400 border-green-300 text-black shadow-[0_0_30px_rgba(0,255,0,1),0_0_15px_rgba(0,255,0,0.8)]'
                          : isWrong
                          ? 'bg-gradient-to-r from-red-500 via-red-400 to-red-500 border-red-400 text-white shadow-[0_0_30px_rgba(255,0,0,1),0_0_15px_rgba(255,0,0,0.8)] animate-pulse'
                          : 'bg-black/50 border-neon-cyan/50 text-gray-200 hover:bg-neon-cyan/20 hover:border-neon-cyan active:bg-neon-cyan/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm leading-relaxed flex-1">{item.definition}</span>
                        {isCorrect && <CheckCircle2 size={18} className="text-black flex-shrink-0 mt-0.5" />}
                      </div>
                    </button>
                  )
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VocabMinus1

