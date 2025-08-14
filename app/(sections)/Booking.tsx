'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, Mail, Clock, ArrowRight } from 'lucide-react'

export function BookingSection() {
  return (
    <section id="agendamento" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Agende seu Atendimento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Entre em contato para agendar sua primeira sessão de 30 minutos. Atendimento online com toda comodidade e sigilo profissional.
          </p>
        </div>

        {/* Contact Options */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl bg-white overflow-hidden animate-fade-in-up animation-delay-300">
            <div className="bg-[var(--brand-primary)]/5 p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Entre em contato para conversa inicial
              </h3>
              <p className="text-sm text-gray-600">
                Escolha o canal de sua preferência para conversarmos
              </p>
            </div>
            
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="https://wa.me/5519988357393?text=Olá%2C%20gostaria%20de%20agendar%20uma%20primeira%20sessão%20de%2030%20minutos."
                  target="_blank" 
                  rel="noreferrer" 
                  className="group relative overflow-hidden rounded-xl bg-green-600 hover:bg-green-700 text-white p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="relative z-10">
                    <MessageCircle className="h-8 w-8 mb-3" />
                    <p className="font-bold text-lg mb-1">WhatsApp</p>
                    <p className="text-sm opacity-90">(19) 98835-7393</p>
                    <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
                
                <a 
                  href="mailto:contato@karenalbino.com.br?subject=Agendamento%20de%20conversa%20inicial"
                  className="group relative overflow-hidden rounded-xl bg-gray-900 hover:bg-gray-800 text-white p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="relative z-10">
                    <Mail className="h-8 w-8 mb-3" />
                    <p className="font-bold text-lg mb-1">E-mail</p>
                    <p className="text-sm opacity-90">contato@karenalbino.com.br</p>
                    <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Resposta em até 24 horas úteis</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


