import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Me senti acolhida desde o primeiro contato. Karen tem uma escuta atenta e cuidadosa que me fez sentir segura para compartilhar minhas questões.",
      author: "Ana M.",
      role: "Paciente há 6 meses",
      rating: 5,
      highlight: "acolhida",
    },
    {
      text: "Profissional atenta e cuidadosa. As sessões online funcionam muito bem e me ajudaram muito na adaptação ao novo país.",
      author: "Bruno S.",
      role: "Brasileiro no exterior",
      rating: 5,
      highlight: "adaptação",
    },
    {
      text: "As sessões me ajudaram a organizar minhas emoções e entender melhor meus processos internos. Recomendo muito!",
      author: "Carolina F.",
      role: "Paciente há 1 ano",
      rating: 5,
      highlight: "organizar",
    },
    {
      text: "Encontrei na Karen uma profissional competente e humana. Seu trabalho me ajudou a superar momentos difíceis.",
      author: "Daniel R.",
      role: "Paciente há 3 meses",
      rating: 5,
      highlight: "superar",
    },
    {
      text: "A abordagem humanista da Karen me ajudou a me reconectar comigo mesma. Sou muito grata pelo apoio.",
      author: "Elisabete T.",
      role: "Paciente há 8 meses",
      rating: 5,
      highlight: "reconectar",
    },
    {
      text: "Excelente profissional! Muito atenciosa e preparada. Me sinto muito melhor depois de iniciar o acompanhamento.",
      author: "Fernando L.",
      role: "Paciente há 4 meses",
      rating: 5,
      highlight: "melhor",
    },
  ]

  return (
    <section id="depoimentos" className="w-full section-padding bg-[var(--brand-background)]/30">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            O que dizem nossos pacientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Histórias reais de transformação e crescimento pessoal
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 animate-fade-in-up animation-delay-300">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">5.0 de 5 estrelas</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-full bg-[var(--brand-primary)]/10 group-hover:bg-[var(--brand-primary)]/20 transition-colors">
                    <Quote className="h-5 w-5 text-[var(--brand-primary)]" />
                  </div>
                  <div className="flex -space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


