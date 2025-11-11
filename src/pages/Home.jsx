import { Link } from 'react-router-dom'
import { Gamepad2, BookOpen, Sparkles } from 'lucide-react'

function Home() {
  const games = [
    { 
      id: 'vocab-1', 
      name: 'Vocab -1', 
      path: '/vocab-1',
      icon: BookOpen,
      description: 'Test and expand your vocabulary',
      color: 'magenta'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 p-8 md:p-12 flex flex-col items-center">
      <header className="text-center mb-16 text-white">
        <div className="mb-6 flex justify-center animate-float">
          <Gamepad2 size={64} className="text-neon-magenta drop-shadow-[0_0_8px_rgba(255,0,255,0.4)]" />
        </div>
        <h1 className="text-5xl md:text-6xl mb-2 font-bold tracking-tight">
          <span className="text-neon-magenta drop-shadow-[0_0_6px_rgba(255,0,255,0.4)]">Games</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90 font-light">
          Choose a game to play
        </p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {games.map((game) => {
          const IconComponent = game.icon
          const isMagenta = game.color === 'magenta'
          return (
            <Link 
              key={game.id} 
              to={game.path} 
              className="no-underline text-inherit transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="relative bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-neon-magenta transition-all duration-300 cursor-pointer overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,0,255,0.2)]">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                  isMagenta 
                    ? 'bg-neon-magenta/20 text-neon-magenta shadow-[0_0_8px_rgba(255,0,255,0.3)]' 
                    : 'bg-neon-cyan/20 text-neon-cyan shadow-[0_0_8px_rgba(0,255,255,0.3)]'
                }`}>
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h2 className={`text-2xl text-center mb-3 font-semibold ${
                  isMagenta ? 'text-neon-magenta' : 'text-neon-cyan'
                }`}>
                  {game.name}
                </h2>
                
                {/* Description */}
                <p className="text-gray-300 text-center text-sm mb-4 leading-relaxed">
                  {game.description}
                </p>
                
                {/* Arrow/Sparkle */}
                <div className={`flex justify-center transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 ${
                  isMagenta ? 'text-neon-magenta' : 'text-neon-cyan'
                }`}>
                  <Sparkles size={20} />
                </div>
              </div>
            </Link>
          )
        })}
      </main>
    </div>
  )
}

export default Home

