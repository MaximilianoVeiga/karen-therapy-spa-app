### Project Plan — Karen Therapy (One‑Page)

#### 1) Goals & Scope
- **Focus**: Therapy only (online)
- **Scheduling**: Calendly embedded
- **Payments**: Stripe via Calendly for paid sessions
- **Free intro session**: 15 minutes
- **Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + lucide-react
- **Deploy**: Vercel (optionally Vercel Analytics)
- **Language**: pt-BR content; UI copy provided below

#### 2) Visual Identity
- **Colors**
  - Primary: `#A8D5BA`
  - Background: `#F5E6CC`
  - CTA: `#E6AFA3`
  - Neutrals: Tailwind gray scale (e.g., `#111827`, `#374151`)
- **Fonts**
  - Titles: Nunito
  - Body: Merriweather
- **Tone**: Acolhedor, claro, sem jargões

Suggested Tailwind tokens (extend or CSS variables):

```ts
// tailwind.config.ts (excerpt)
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#A8D5BA',
          background: '#F5E6CC',
          cta: '#E6AFA3',
        },
      },
    },
  },
}
```

#### 3) Information Architecture (One‑Page)
- **Hero**
  - Title: “Acolhimento e apoio para a sua jornada emocional”
  - Subtitle: “Terapia online para brasileiros no Brasil e no exterior.”
  - CTAs: “Agendar 15m grátis” → opens 15m Calendly; “Agendar sessão completa” → opens paid event
- **Sobre a Terapeuta**
  - Mini-bio, foto, abordagem, credenciais (CRP)
- **Serviços**
  - Terapia individual | Adaptação cultural | Bem-estar emocional (icons via lucide-react)
- **Como funciona**
  - 1) Agende no Calendly 2) Sessão inicial (15m) gratuita 3) Sessões completas (pagas via Stripe/Calendly)
  - Nota de privacidade e confidencialidade
- **Valores & Política (curto)**
  - “Primeira conversa (15m): grátis.”
  - “Sessão completa (50 min): R$ ___ (cartão via Stripe no Calendly).”
  - Política de cancelamento/reembolso (resumo + link para política completa)
- **Depoimentos (opcional, anonimizados)**
- **Agendamento**
  - Calendly embed com duas abas/botões: 15m grátis | Sessão completa
  - Fallback: link direto + WhatsApp
- **Rodapé**
  - Políticas (LGPD/Privacidade, Termos), CRP, contatos

#### 4) Copy Suggestions (pt‑BR)
- **Hero**
  - Título: “Acolhimento e apoio para a sua jornada emocional”
  - Subtítulo: “Atendimento online, com empatia e sigilo.”
  - Botões: “Agendar 15m grátis” | “Agendar sessão completa”
- **Sobre**
  - “Olá! Sou a Karen, psicóloga [CRP __]. Trabalho com acolhimento empático e foco em bem‑estar, adaptação cultural e crescimento pessoal. Atendo brasileiros no Brasil e no exterior.”
- **Como funciona**
  - “1) Escolha o melhor horário no Calendly. 2) Conheça meu trabalho em uma conversa inicial gratuita de 15 minutos. 3) Se fizer sentido, seguimos com sessões completas (pagamento seguro via Stripe/Calendly).”
- **Valores**
  - “Conversa inicial (15m): gratuita.”
  - “Sessão completa (50 min): R$ ___. Pagamento no agendamento pelo Stripe (cartão).”

#### 5) Calendly & Stripe
- **Events**
  - 15m grátis: `<URL_15M_GRATIS>` (e.g., `https://calendly.com/karen/15min`)
  - Sessão completa (paga): `<URL_SESSAO_COMPLETA>` (e.g., `https://calendly.com/karen/sessao-completa`)
- **Stripe via Calendly**
  - Ativar “Collect payments” no evento de sessão completa
  - Conectar Stripe, definir valor e BRL
  - Tornar o pagamento obrigatório para confirmar
- **Embed**
  - Option A: script embed
  - Option B (recommended): `react-calendly` with `<InlineWidget />` (lazy‑loaded)

#### 6) Accessibility & SEO
- **SEO**
  - `next/metadata` (title/description pt‑BR), OG tags, favicon
  - `sitemap.xml` + `robots.txt` (via `next-sitemap`)
- **A11y**
  - Contrast AA, visible focus, semantic headings
  - Alt text for images, labels for controls
- **i18n**
  - Default content in pt‑BR; `OpenGraph.locale = pt_BR`

#### 7) Folder Structure
```
app/
  layout.tsx
  page.tsx
  (sections)/
    Hero.tsx
    About.tsx
    Services.tsx
    HowItWorks.tsx
    Pricing.tsx
    Testimonials.tsx
    Booking.tsx
    Footer.tsx
components/
  ui/  // shadcn components
lib/
public/
styles/
  globals.css
```

#### 8) Implementation Steps (Commands)
```bash
# 1) Create Next.js app (App Router + TS)
npm create next-app@latest karen-therapy-spa-app --ts --eslint --tailwind --app --src-dir=false --import-alias @/*

cd karen-therapy-spa-app

# 2) Install UI/deps
npm i lucide-react react-calendly @vercel/analytics

# 3) Initialize shadcn/ui
npx shadcn@latest init -y
npx shadcn@latest add button card separator alert dialog tabs

# 4) Optional: sitemap/robots
npm i -D next-sitemap
```

#### 9) Global Styling & Fonts
- Import Google Fonts with `next/font` in `app/layout.tsx`:

```ts
import { Nunito, Merriweather } from 'next/font/google'

export const nunito = Nunito({ subsets: ['latin'], weight: ['700'], variable: '--font-nunito' })
export const merriweather = Merriweather({ subsets: ['latin'], weight: ['400'], variable: '--font-merriweather' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} ${merriweather.variable} bg-brand-background text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
```

#### 10) Sections (Components)
- `Hero.tsx`
  - Title, subtitle, two buttons (scroll to Booking; or open Calendly popup)
- `About.tsx`
  - Photo, mini-bio, approach, CRP
- `Services.tsx`
  - Three cards with lucide icons + bullets
- `HowItWorks.tsx`
  - 3‑step list + confidentiality note
- `Pricing.tsx`
  - Free 15m, full session price (R$ ___), link to policy (Dialog)
- `Testimonials.tsx` (optional)
  - Anonymous short quotes
- `Booking.tsx`
  - Two tabs: 15m grátis | Sessão completa
  - Inline Calendly widget (lazy‑loaded)
- `Footer.tsx`
  - Policies links (LGPD/Privacy, Terms), CRP, contacts (email, WhatsApp)

Minimal example for Calendly lazy‑load with tabs:

```tsx
// app/(sections)/Booking.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

const InlineWidget = dynamic(
  () => import('react-calendly').then((m) => m.InlineWidget),
  { ssr: false }
)

export function BookingSection({ url15, urlFull }: { url15: string; urlFull: string }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setVisible(true))
    }, { rootMargin: '200px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="agendamento" className="py-16" ref={ref}>
      <Tabs defaultValue="15m" className="w-full">
        <TabsList>
          <TabsTrigger value="15m">15m grátis</TabsTrigger>
          <TabsTrigger value="full">Sessão completa</TabsTrigger>
        </TabsList>
        <TabsContent value="15m">
          {visible && <InlineWidget url={url15} styles={{ height: '800px' }} />}
        </TabsContent>
        <TabsContent value="full">
          {visible && <InlineWidget url={urlFull} styles={{ height: '800px' }} />}
          <div className="mt-4 text-sm text-gray-600">Pagamento seguro via Stripe pelo Calendly.</div>
        </TabsContent>
      </Tabs>
      <div className="mt-4 text-sm">
        Problemas para carregar? <a className="underline" href={url15} target="_blank">Acesse o Calendly</a> ou fale no WhatsApp: <a className="underline" href="https://wa.me/<SEU_NUMERO>">WhatsApp</a>.
      </div>
    </section>
  )
}
```

#### 11) SEO & Metadata
Minimal metadata example (pt‑BR):

```ts
// app/layout.tsx (excerpt)
export const metadata = {
  title: 'Acolhimento e apoio para a sua jornada emocional | Karen Psicóloga',
  description: 'Terapia online para brasileiros no Brasil e no exterior.',
  openGraph: {
    title: 'Acolhimento e apoio para a sua jornada emocional',
    description: 'Terapia online para brasileiros no Brasil e no exterior.',
    type: 'website',
    locale: 'pt_BR',
  },
}
```

Sitemap/robots with `next-sitemap`:

```js
// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://<your-domain>',
  generateRobotsTxt: true,
}
```

#### 12) LGPD & Legal
- **Privacy Policy**: clara, base legal (atendimento/execução de contrato)
- **Consent**: apenas se usar analytics/marketing
- **Data rights**: e-mail para exclusão/retificação
- **Terms/Disclaimer**: limites do serviço; emergência/urgência não coberta

#### 13) Deployment (Vercel)
- Create project from GitHub repo
- Set build command (default) and Node 18+
- Add custom domain
- Enable Vercel Analytics (optional)

#### 14) Acceptance Criteria
- One‑page layout matching IA and visual identity
- Two working Calendly embeds (15m grátis and sessão completa com Stripe obrigatório)
- Lazy‑load Calendly widgets
- Accessible (focus states, labels, contrast AA)
- SEO metadata + sitemap/robots
- Footer links to Privacy/Terms; CRP displayed

#### 15) Items Needed From You
- **Price and duration** of full session (e.g., R$ ___, 50 min)
- **Calendly URLs** for both events (15m grátis and sessão completa)
- **Vercel Analytics**: enable or not
- **Bio, photo, and CRP**
- **Cancellation/Refund policy** (short summary + full text)
- **WhatsApp number** and preferred contact email

#### 16) Next Steps
1) Receive the above items (price/duration, Calendly links, bio/photo/CRP, policy, contacts, analytics choice)
2) Generate repository with Next.js + Tailwind + shadcn
3) Scaffold sections and embed Calendly (lazy‑loaded)
4) Connect domain and deploy on Vercel
5) Final QA (accessibility, SEO, performance, content)



