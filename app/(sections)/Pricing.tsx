'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Clock, CreditCard, Shield, Gift } from 'lucide-react'

export function PricingSection() {
  const plans = [
    {
      name: 'Conversa Inicial',
      duration: '15 minutos',
      price: 'Gratuito',
      description: 'Conheça meu trabalho sem compromisso',
      features: [
        'Primeira conversa gratuita',
        'Conhecer a abordagem',
        'Tirar dúvidas',
        'Sem compromisso',
      ],
      highlighted: false,
      icon: Gift,
      color: 'bg-green-500/20',
      borderColor: 'border-green-300',
      buttonText: 'Agendar conversa grátis',
      buttonVariant: 'outline' as const,
    },
    {
      name: 'Sessão Completa',
      duration: '50 minutos',
      price: 'R$ 90',
      description: 'Atendimento psicológico completo',
      features: [
        'Sessão individual completa',
        'Atendimento personalizado',
        'Horários flexíveis',
        'Pagamento seguro via Stripe',
      ],
      highlighted: true,
      icon: Clock,
      color: 'bg-[var(--brand-cta)]/20',
      borderColor: 'border-[var(--brand-cta)]/50',
      buttonText: 'Agendar sessão',
      buttonVariant: 'default' as const,
    },
  ]

  return (
    <section id="valores" className="w-full section-padding bg-[var(--brand-background)]/10">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Valores & Investimento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Invista em seu bem-estar emocional com valores acessíveis e transparentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden border-2 ${plan.borderColor} ${
                plan.highlighted ? 'shadow-2xl scale-105' : 'shadow-lg'
              } hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              
              <div className={`absolute inset-0 ${plan.color} opacity-30`} />
              <CardHeader className="relative text-center pb-4">
                <div className="mx-auto mb-4">
                  <div className="inline-flex p-3 rounded-full bg-white shadow-md">
                    <plan.icon className="h-8 w-8 text-gray-700" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{plan.duration}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Gratuito' && <span className="text-gray-600 ml-1">/sessão</span>}
                </div>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-[var(--brand-cta)] hover:bg-[var(--brand-cta)]/90' 
                      : ''
                  }`}
                  onClick={() => {
                    const tab = plan.price === 'Gratuito' ? '15m' : 'full'
                    const url = new URL(window.location.href)
                    url.hash = 'agendamento'
                    url.searchParams.set('tab', tab)
                    window.history.replaceState({}, '', url.toString())
                    document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Info */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-3 text-sm">
            <CreditCard className="h-5 w-5 text-gray-600 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">Pagamento Seguro</p>
              <p className="text-gray-600">Combinado diretamente no contato</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Shield className="h-5 w-5 text-gray-600 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">Garantia</p>
              <p className="text-gray-600">Satisfação garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


