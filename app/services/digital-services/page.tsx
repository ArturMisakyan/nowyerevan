"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Search, Palette, Globe, TrendingUp, Brush, ChevronRight } from "lucide-react"
import Link from "next/link"

function DigitalServicesContent() {
  const { t } = useLanguage()

  const services = [
    {
      icon: TrendingUp,
      title: t("smmManagement"),
      description: t("smmManagementDesc"),
    },
    {
      icon: Search,
      title: t("seoOptimization"),
      description: t("seoOptimizationDesc"),
    },
    {
      icon: Palette,
      title: t("uiuxDesign"),
      description: t("uiuxDesignDesc"),
    },
    {
      icon: Globe,
      title: t("websiteDevelopment"),
      description: t("websiteDevelopmentDesc"),
    },
    {
      icon: Brush,
      title: t("branding"),
      description: t("brandingDesc"),
    },
    {
      icon: Smartphone,
      title: t("rebranding"),
      description: t("rebrandingDesc"),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Above the fold hero section */}
      <section className="above-fold bg-overlay" style={{ "--overlay-opacity": "0.4" } as React.CSSProperties}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/About_us.webp)" }}
        />

        <div className="above-fold-content">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-white mb-8 text-sm md:text-base">
              <Link href="/" className="hover:text-brand-orange transition-colors">
                {t("home")}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/#services" className="hover:text-brand-orange transition-colors">
                {t("services")}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-orange">{t("digitalServices")}</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/30"
              >
                {t("services")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t("digitalServices")}</h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">{t("digitalServicesDesc")}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#services-detail">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4">
                    {t("learnMore")}
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-4 bg-transparent"
                  >
                    {t("getStarted")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-detail" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">{t("ourDigitalServices")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <CardTitle className="text-lg text-black">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">{t("readyToGrowOnline")}</h2>
              <p className="text-slate-600 mb-6 text-lg">{t("letUsHelpYou")}</p>
              <Link href="/#contact">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4">
                  {t("getStarted")}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function DigitalServicesPage() {
  return (
    <LanguageProvider>
      <DigitalServicesContent />
    </LanguageProvider>
  )
}
