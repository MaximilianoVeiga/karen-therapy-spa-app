'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollTop() {
  const [show, setShow] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / scrollHeight) * 100
      
      setShow(scrolled > 300)
      setScrollProgress(progress)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null
  
  return (
    <button
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 group"
    >
      <div className="relative">
        {/* Progress ring */}
        <svg className="w-12 h-12 transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-gray-300"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 20}`}
            strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
            className="text-[var(--brand-primary)] transition-all duration-150"
          />
        </svg>
        
        {/* Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-200 p-2.5">
            <ArrowUp className="h-4 w-4 text-gray-700 group-hover:text-[var(--brand-primary)]" />
          </div>
        </div>
      </div>
    </button>
  )
}


