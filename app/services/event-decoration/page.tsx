"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Zap, ChevronRight } from "lucide-react"
import Link from "next/link"

function EventDecorationContent() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Star,
      title: t("premiumQuality"),
      description: t("premiumQualityDesc"),
    },
    {
      icon: Users,
      title: t("expertTeam"),
      description: t("expertTeamDesc"),
    },
    {
      icon: Zap,
      title: t("fastDelivery"),
      description: t("fastDeliveryDesc"),
    },
  ]

  const services = [
    t("stageDesign"),
    t("backdropCreation"),
    t("lightingSetup"),
    t("themedDecorations"),
    t("branding"),
    t("atmosphere"),
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Above the fold hero section */}
      <section className="above-fold bg-overlay" style={{ "--overlay-opacity": "0.3" } as React.CSSProperties}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/Event1.webp)" }} />

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
              <span className="text-brand-orange">{t("eventDecor")}</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/30"
              >
                {t("services")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t("eventDecor")}</h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">{t("eventDecorDesc")}</p>

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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">{t("whatWeOffer")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">{t("whyChooseUs")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <CardTitle className="text-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">{t("readyToStart")}</h2>
              <p className="text-slate-600 mb-6 text-lg">{t("contactUsToday")}</p>
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

export default function EventDecorationPage() {
  return (
    <LanguageProvider>
      <EventDecorationContent />
    </LanguageProvider>
  )
}
