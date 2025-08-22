import type { Metadata, Viewport } from "next"
import { Nunito, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import "./globals.css"

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
})

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://karenalbino.com'),
  applicationName: "Karen Psicóloga",
  generator: "Next.js",
  title: {
    default: "Acolhimento e apoio para o seu processo de crescimento",
    template: "%s | Karen Psicóloga",
  },
  description: "Terapia online humanizada para brasileiros no Brasil e no exterior. Primeira sessão de 30 minutos.",
  category: "Health",
  keywords: [
    "psicóloga",
    "terapia online",
    "psicologia",
    "atendimento psicológico",
    "primeira sessão 30 minutos",
    "terapia para brasileiros no exterior",
    "saúde mental",
    "bem-estar emocional",
  ],
  authors: [{ name: "Karen Albino Facchini" }],
  creator: "Karen Albino Facchini",
  publisher: "Karen Albino Facchini",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    title: "Acolhimento e apoio para o seu processo de crescimento",
    description: "Terapia online humanizada para brasileiros no Brasil e no exterior. Primeira sessão de 30 minutos.",
    url: "/",
    siteName: "Karen Psicóloga",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/karen-albino-facchini.webp",
        width: 1200,
        height: 630,
        alt: "Karen Albino Facchini – Psicóloga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acolhimento e apoio para o seu processo de crescimento",
    description: "Terapia online humanizada para brasileiros no Brasil e no exterior.",
    images: ["/assets/karen-albino-facchini.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://karenalbino.com')
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      url: baseUrl,
      name: "Karen Psicóloga",
      inLanguage: "pt-BR",
      publisher: {
        "@type": "Person",
        name: "Karen Albino Facchini",
      },
      description: "Terapia online humanizada para brasileiros no Brasil e no exterior. Primeira sessão de 30 minutos.",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${baseUrl}#service`,
      name: "Karen Albino Facchini",
      url: baseUrl,
      image: "/assets/karen-albino-facchini.webp",
      telephone: "+55 19 98835-7393",
      email: "contato@karenalbino.com",
      areaServed: "Brazil",
      availableLanguage: ["pt-BR"],
      sameAs: [] as string[],
      serviceType: "Terapia psicológica online",
      description: "Terapia online humanizada para brasileiros no Brasil e no exterior. Primeira sessão de 30 minutos.",
    },
  ]
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} ${merriweather.variable} antialiased`}>
        <a href="#sobre" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-gray-900 focus:px-3 focus:py-2 focus:rounded">
          Ir para o conteúdo
        </a>
        {children}
        <Analytics />
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      </body>
    </html>
  )
}
