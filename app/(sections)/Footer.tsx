import { Heart, Mail, MapPin, Award } from 'lucide-react'

export function FooterSection() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-[var(--brand-primary)]/20">
                <Heart className="h-5 w-5 text-[var(--brand-primary)]" />
              </div>
              <span className="font-bold text-lg text-gray-900">Karen Albino Facchini</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Psicóloga CRP 06/210319</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Atendimento online para Brasil e exterior</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Links Rápidos</h3>
            <nav className="space-y-2">
              <a href="#sobre" className="block text-sm text-gray-600 hover:text-[var(--brand-primary)] transition-colors">
                Sobre a Terapeuta
              </a>
              <a href="#servicos" className="block text-sm text-gray-600 hover:text-[var(--brand-primary)] transition-colors">
                Serviços
              </a>
              <a href="#valores" className="block text-sm text-gray-600 hover:text-[var(--brand-primary)] transition-colors">
                Valores
              </a>
              <a href="#agendamento" className="block text-sm text-gray-600 hover:text-[var(--brand-primary)] transition-colors">
                Agendamento
              </a>
            </nav>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contato</h3>
            <nav className="space-y-2">
              <a 
                href="mailto:contato@karenalbino.com.br" 
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--brand-primary)] transition-colors"
              >
                <Mail className="h-4 w-4" />
                contato@karenalbino.com.br
              </a>
            </nav>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © {currentYear} Karen Albino Facchini. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4" />
          </div>
        </div>
      </div>
    </footer>
  )
}


