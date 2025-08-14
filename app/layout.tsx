import type { Metadata } from "next"
import { Nunito, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
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
  title: "Acolhimento e apoio para a sua jornada emocional | Karen Psicóloga",
  description: "Terapia online para brasileiros no Brasil e no exterior.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://karenalbino.com'),
  openGraph: {
    title: "Acolhimento e apoio para a sua jornada emocional",
    description: "Terapia online para brasileiros no Brasil e no exterior.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} ${merriweather.variable} antialiased`}>
        <a href="#sobre" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-gray-900 focus:px-3 focus:py-2 focus:rounded">
          Ir para o conteúdo
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
