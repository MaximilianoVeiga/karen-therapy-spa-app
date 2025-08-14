'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Heart, Calendar } from 'lucide-react'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#valores', label: 'Valores' },
  { href: '#agendamento', label: 'Agendar' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      
      // Update active section based on scroll position
      const sections = ['sobre', 'servicos', 'como-funciona', 'valores', 'agendamento']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onNavClick = () => setOpen(false)

  const goToBooking = (tab: '15m' | 'full') => {
    const url = new URL(window.location.href)
    url.hash = 'agendamento'
    url.searchParams.set('tab', tab)
    window.history.replaceState({}, '', url.toString())
    const el = document.getElementById('agendamento')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/90 border-b shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-full bg-[var(--brand-primary)]/20 group-hover:bg-[var(--brand-primary)]/30 transition-colors">
            <Heart className="h-5 w-5 text-[var(--brand-primary)]" />
          </div>
          <span className="font-bold text-lg lg:text-xl tracking-tight text-gray-900">Karen Albino</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === l.href.slice(1) 
                    ? 'text-[var(--brand-primary)]' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={onNavClick}
              >
                {l.label}
                {activeSection === l.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--brand-primary)] rounded-full" />
                )}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button 
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all" 
              onClick={() => goToBooking('15m')}
            >
              <Calendar className="mr-1.5 h-4 w-4" />
              15m grátis
            </Button>
            <Button 
              size="sm"
              className="bg-[var(--brand-cta)] hover:bg-[var(--brand-cta)]/90 text-white shadow-md hover:shadow-lg transition-all" 
              onClick={() => goToBooking('full')}
            >
              Agendar sessão
            </Button>
          </div>
        </nav>
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden relative" 
          onClick={() => setOpen((v) => !v)} 
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-16 lg:top-20 bg-white border-t shadow-xl transition-all duration-300 transform ${
        open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="px-4 py-6 space-y-1">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                  activeSection === l.href.slice(1)
                    ? 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={onNavClick}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-4 pb-6 space-y-3 border-t pt-6">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white" 
              onClick={() => goToBooking('15m')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Conversa inicial grátis (15 min)
            </Button>
            <Button 
              className="w-full bg-[var(--brand-cta)] hover:bg-[var(--brand-cta)]/90 text-white"
              onClick={() => goToBooking('full')}
            >
              Agendar sessão completa
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}


