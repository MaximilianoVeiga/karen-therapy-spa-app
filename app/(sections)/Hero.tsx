'use client'
import { Button } from '@/components/ui/button'
import { CalendarClock, ShieldCheck, Globe2, CheckCircle2, Star } from 'lucide-react'

export function HeroSection() {
  const goToBooking = (tab: '15m' | 'full') => {
    const url = new URL(window.location.href)
    url.hash = 'agendamento'
    url.searchParams.set('tab', tab)
    window.history.replaceState({}, '', url.toString())
    const el = document.getElementById('agendamento')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="w-full bg-[var(--brand-background)] relative overflow-hidden min-h-[70svh] lg:min-h-[72vh] xl:min-h-[68vh] 2xl:min-h-[60vh]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--brand-primary)] rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--brand-cta)] rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-primary)]/30 bg-white/80 backdrop-blur px-4 py-2 text-sm font-medium text-gray-800 shadow-sm animate-fade-in">
              <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)] animate-pulse" /> 
              <span>15 minutos iniciais grátis</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 animate-fade-in-up">
              Acolhimento e apoio para a sua{' '}
              <span className="text-[var(--brand-primary)]">
                jornada emocional
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 animate-fade-in-up animation-delay-200">
              Terapia online para brasileiros no Brasil e no exterior.
            </p>
            
            <div className="flex items-center gap-2 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 font-medium">Karen Albino Facchini · CRP 06/210319</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 px-8 py-6 text-base font-semibold" 
                onClick={() => goToBooking('15m')}
              >
                <CalendarClock className="mr-2 h-5 w-5" />
                Agendar 15m grátis
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[var(--brand-cta)] text-[var(--brand-cta)] hover:bg-[var(--brand-cta)]/10 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 px-8 py-6 text-base font-semibold"
                onClick={() => goToBooking('full')}
              >
                Agendar sessão completa
              </Button>
            </div>
            
            <div className="text-sm text-gray-600 animate-fade-in-up animation-delay-500">
              <a href="#como-funciona" className="inline-flex items-center gap-1 hover:text-[var(--brand-primary)] transition-colors">
                <span className="underline">Saiba como funciona</span>
                <span className="animate-bounce">↓</span>
              </a>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="space-y-4 animate-fade-in-left animation-delay-600">
            <div className="group rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl ring-1 ring-black/5 p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--brand-primary)]/20 group-hover:bg-[var(--brand-primary)]/30 transition-colors">
                  <CalendarClock className="h-6 w-6 text-[var(--brand-primary)]" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-lg">Agendamento simples</p>
                  <p className="text-sm text-gray-600 mt-1">Escolha o melhor horário entrando em contato pelos canais disponíveis.</p>
                </div>
              </div>
            </div>
            
            <div className="group rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl ring-1 ring-black/5 p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--brand-cta)]/20 group-hover:bg-[var(--brand-cta)]/30 transition-colors">
                  <ShieldCheck className="h-6 w-6 text-[var(--brand-cta)]" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-lg">Sigilo e segurança</p>
                  <p className="text-sm text-gray-600 mt-1">Seus dados protegidos e pagamento seguro pelo Stripe.</p>
                </div>
              </div>
            </div>
            
            <div className="group rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl ring-1 ring-black/5 p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <Globe2 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-lg">Onde você estiver</p>
                  <p className="text-sm text-gray-600 mt-1">Atendimento online para brasileiros em qualquer lugar do mundo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


