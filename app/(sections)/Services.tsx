import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Globe2, Smile, Brain, Users, Sparkles, CheckCircle2 } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: 'Terapia individual',
      description: 'Espaço seguro para seu desenvolvimento pessoal',
      bullets: ['Acolhimento personalizado', 'Autoconhecimento profundo', 'Bem-estar emocional'],
      color: 'bg-pink-500/20',
      iconColor: 'text-pink-600',
      borderColor: 'border-pink-200',
    },
    {
      icon: Globe2,
      title: 'Adaptação cultural',
      description: 'Suporte especializado para expatriados',
      bullets: ['Brasileiros no exterior', 'Mudanças e transições', 'Integração cultural'],
      color: 'bg-blue-500/20',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      icon: Smile,
      title: 'Bem-estar emocional',
      description: 'Ferramentas para uma vida equilibrada',
      bullets: ['Gestão da ansiedade', 'Controle do estresse', 'Hábitos saudáveis'],
      color: 'bg-[var(--brand-primary)]/20',
      iconColor: 'text-[var(--brand-primary)]',
      borderColor: 'border-[var(--brand-primary)]/30',
    },
  ] as const

  const additionalServices = [
    { icon: Brain, text: 'Neuropsicologia' },
    { icon: Users, text: 'Terapia de casal' },
    { icon: Sparkles, text: 'Desenvolvimento pessoal' },
  ]

  return (
    <section id="servicos" className="w-full section-padding bg-[var(--brand-background)]/10">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Atendimento personalizado para suas necessidades, com abordagem humanista e acolhedora
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((s, index) => (
            <Card 
              key={s.title} 
              className={`group h-full border-2 ${s.borderColor} shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`absolute inset-0 ${s.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
              <CardHeader className="relative">
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-shadow`}>
                    <s.icon className={`h-8 w-8 ${s.iconColor} group-hover:scale-110 transition-transform`} />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{s.title}</CardTitle>
                <p className="text-sm text-gray-600 mt-2">{s.description}</p>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className={`h-5 w-5 ${s.iconColor} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional services */}
        <div className="border-t pt-8">
          <p className="text-center text-sm font-semibold text-gray-600 mb-6">Também oferecemos:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalServices.map((service) => (
              <div 
                key={service.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-gray-200 hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/5 transition-all duration-200 group"
              >
                <service.icon className="h-4 w-4 text-gray-600 group-hover:text-[var(--brand-primary)]" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-[var(--brand-primary)]">
                  {service.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


