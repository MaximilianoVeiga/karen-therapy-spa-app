import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function AboutSection() {
  const specialties = [
    { name: 'Desenvolvimento pessoal', icon: '🌱' },
    { name: 'Transtorno do Espectro Autista (TEA)', icon: '🧩' },
    { name: 'TDA/TDAH', icon: '🎯' },
    { name: 'Saúde mental', icon: '💚' },
    { name: 'Acompanhamento parental', icon: '👨‍👩‍👧' },
    { name: 'Desenvolvimento e Aprendizagem', icon: '📚' },
  ] as const
  const approach = ['Humanista'] as const
  const audience = ['Adolescentes', 'Adultos', 'Casais', 'Idosos'] as const

  return (
    <section id="sobre" className="w-full section-padding bg-white">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Foto / Perfil */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden p-0 shadow-2xl hover:shadow-3xl transition-shadow duration-300 group">
              <div className="relative h-96 lg:h-[32rem] w-full">
                <Image
                  src="/assets/karen-albino-facchini.webp"
                  alt="Foto da psicóloga Karen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="space-y-2">
                    <p className="text-2xl font-bold">Karen Albino Facchini</p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        CRP 06/210319
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Texto / Detalhes */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Sobre a Terapeuta</h2>
              <div className="h-1 w-20 bg-[var(--brand-primary)] rounded-full"></div>
            </div>
            
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up animation-delay-200">
              <CardContent className="p-8">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Meu nome é Karen Albino Facchini, psicóloga <span className="font-semibold text-[var(--brand-primary)]">CRP 06/210319</span>, formada pela Pontifícia
                    Universidade Católica de Campinas (PUC‑Campinas) e especialista em Neurociências, Educação e Desenvolvimento Infantil pela
                    Pontifícia Universidade Católica do Rio Grande do Sul.
                  </p>
                  <p className="text-lg">
                    Sou comprometida em oferecer um espaço acolhedor e seguro para que você possa se conhecer melhor, expressar suas emoções e
                    explorar novas possibilidades em sua vida. Também sou mãe, esposa e professora; amo criar vínculos, conhecer pessoas e suas
                    histórias.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="bg-[var(--brand-background)]/30 rounded-xl p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-4">Especialidades</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {specialties.map((s) => (
                        <div key={s.name} className="flex items-center gap-2 group">
                          <span className="text-xl group-hover:scale-110 transition-transform">{s.icon}</span>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[var(--brand-primary)] transition-colors">
                            {s.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white/50 rounded-xl p-4 border border-[var(--brand-primary)]/20">
                      <p className="text-sm font-bold text-gray-800 mb-3">Abordagem</p>
                      <div className="flex flex-wrap gap-2">
                        {approach.map((a) => (
                          <Badge key={a} className="bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border-[var(--brand-primary)]/30 hover:bg-[var(--brand-primary)]/20 transition-colors">
                            {a}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/50 rounded-xl p-4 border border-[var(--brand-cta)]/20">
                      <p className="text-sm font-bold text-gray-800 mb-3">Público</p>
                      <div className="flex flex-wrap gap-2">
                        {audience.map((p) => (
                          <Badge key={p} className="bg-[var(--brand-cta)]/10 text-[var(--brand-cta)] border-[var(--brand-cta)]/30 hover:bg-[var(--brand-cta)]/20 transition-colors">
                            {p}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


