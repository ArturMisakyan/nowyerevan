import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
