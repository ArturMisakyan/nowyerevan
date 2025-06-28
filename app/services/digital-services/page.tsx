"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Smartphone, Search, Palette, Globe, TrendingUp, Brush } from "lucide-react"
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
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("backToHome")}
            </Link>

            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                {t("services")}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t("digitalServices")}</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">{t("digitalServicesDesc")}</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t("ourDigitalServices")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
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
        <section className="py-12 px-4">
          <div className="container mx-auto text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("readyToGrowOnline")}</h2>
                <p className="text-slate-600 mb-6">{t("letUsHelpYou")}</p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    {t("getStarted")}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default function DigitalServicesPage() {
  return <DigitalServicesContent />
}
