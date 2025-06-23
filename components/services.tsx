"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarcodeIcon as Billboard,
  Building,
  PartyPopper,
  Store,
  Printer,
  ExternalLink,
  CheckCircle,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Billboard,
      title: t("outdoorAd"),
      description: t("outdoorAdDesc"),
      features: [t("ledDisplays"), t("banners"), t("lightBoxes"), t("roofingMaterials")],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Building,
      title: t("expoPavilions"),
      description: t("expoPavilionsDesc"),
      features: [
        t("customPavilions"),
        t("modularSystems"),
        t("interactiveDisplays"),
        t("boothDesign"),
        t("installation"),
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: PartyPopper,
      title: t("eventDecor"),
      description: t("eventDecorDesc"),
      features: [t("stageDesign"), t("backdropCreation"), t("lightingSetup"), t("themedDecorations")],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Store,
      title: t("commercialDecor"),
      description: t("commercialDecorDesc"),
      features: [
        t("retailDesign"),
        t("restaurantInteriors"),
        t("officeSpaces"),
        t("showrooms"),
        t("brandEnvironments"),
        t("furniture"),
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Printer,
      title: t("printServices"),
      description: t("printServicesDesc"),
      features: [
        t("largeFormatPrinting"),
        t("digitalPrinting"),
        t("vinylGraphics"),
        t("promotionalItems"),
        t("signage"),
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t("servicesTitle")}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t("servicesSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg ${service.bgColor} flex items-center justify-center mb-4`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-slate-800 text-xl">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button className={`flex items-center text-sm font-medium ${service.color} hover:underline`}>
                    {t("learnMore")}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
