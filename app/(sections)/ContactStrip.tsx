import { Mail, MessageCircle, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function ContactStrip() {
  return (
    <section aria-label="Contato" className="w-full bg-[var(--brand-background)]/20 border-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Clock className="h-5 w-5 text-[var(--brand-primary)]" />
                  <h3 className="font-bold text-lg text-gray-900">Precisa de ajuda para agendar?</h3>
                </div>
                <p className="text-sm text-gray-600">Estou aqui para ajudar. Entre em contato pelos canais abaixo.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-50 hover:bg-green-100 transition-colors" 
                  href="https://wa.me/5519988357393" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <MessageCircle className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-xs text-gray-600">WhatsApp</p>
                    <p className="text-sm font-semibold text-gray-900">(19) 98835-7393</p>
                  </div>
                </a>
                
                <a 
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors" 
                  href="mailto:contato@karenalbino.com"
                >
                  <Mail className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-xs text-gray-600">E-mail</p>
                    <p className="text-sm font-semibold text-gray-900">contato@karenalbino.com.br</p>
                  </div>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


