import { HeroSection } from './(sections)/Hero'
import { Navbar } from './(sections)/Navbar'
import { AboutSection } from './(sections)/About'
import { ServicesSection } from './(sections)/Services'
import { HowItWorksSection } from './(sections)/HowItWorks'
import { PricingSection } from './(sections)/Pricing'
import { BookingSection } from './(sections)/Booking'
import { FooterSection } from './(sections)/Footer'
import { ScrollTop } from './(sections)/ScrollTop'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <BookingSection />
      <FooterSection />
      <ScrollTop />
    </div>
  )
}
