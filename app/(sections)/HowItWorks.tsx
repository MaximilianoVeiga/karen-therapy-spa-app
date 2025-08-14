import { Calendar, MessageCircle, Heart, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function HowItWorksSection() {
  const steps = [
    {
      icon: Calendar,
      title: 'Entre em contato para agendar',
      description: 'Fale comigo pelos canais disponíveis para combinarmos o melhor horário',
      color: 'bg-blue-500/20',
      iconColor: 'text-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'Conversa inicial (30 min)',
      description: 'Conversa de 30 minutos para conhecer meu trabalho e tirar dúvidas',
      color: 'bg-[var(--brand-primary)]/20',
      iconColor: 'text-[var(--brand-primary)]',
    },
    {
      icon: Heart,
      title: 'Continue sua jornada',
      description: 'Se fizer sentido, agende sessões completas',
      color: 'bg-[var(--brand-cta)]/20',
      iconColor: 'text-[var(--brand-cta)]',
    },
  ]

  return (
    <section id="como-funciona" className="w-full section-padding bg-white">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Como funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Processo simples e transparente para começar sua jornada terapêutica
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`absolute inset-0 ${step.color} opacity-30 group-hover:opacity-40 transition-opacity`} />
              <CardContent className="relative p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-white rounded-full blur-sm" />
                    <div className="relative p-3 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow">
                      <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-[var(--brand-primary)] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gray-50 border-2 border-gray-200 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-500/20">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Privacidade e Sigilo Garantidos</p>
                <p className="text-sm text-gray-600">
                  Todas as suas informações são tratadas com absoluta privacidade e sigilo profissional, 
                  seguindo rigorosamente o Código de Ética Profissional do Psicólogo.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


