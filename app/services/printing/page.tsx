"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Star, Users, Zap } from "lucide-react"
import Link from "next/link"

function PrintingContent() {
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
    t("largeFormatPrinting"),
    t("digitalPrinting"),
    t("vinylGraphics"),
    t("promotionalItems"),
    t("signage"),
    t("banners"),
  ]

  return (
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t("printServices")}</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">{t("printServicesDesc")}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("whatWeOffer")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("whyChooseUs")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
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
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("readyToStart")}</h2>
              <p className="text-slate-600 mb-6">{t("contactUsToday")}</p>
              <Link href="/#contact">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
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

export default function PrintingPage() {
  return (
    <LanguageProvider>
      <PrintingContent />
    </LanguageProvider>
  )
}
