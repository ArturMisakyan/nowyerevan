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
  Globe,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Billboard,
      title: t("outdoorAd"),
      description: t("outdoorAdDesc"),
      features: [t("ledDisplays"), t("banners"), t("lightBoxes"), t("roofingMaterials")],
      color: "text-black",
      bgColor: "bg-gray-100",
      link: "/services/outdoor-advertising",
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
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      link: "/services/expo-pavilions",
    },
    {
      icon: PartyPopper,
      title: t("eventDecor"),
      description: t("eventDecorDesc"),
      features: [t("stageDesign"), t("backdropCreation"), t("lightingSetup"), t("themedDecorations")],
      color: "text-black",
      bgColor: "bg-gray-100",
      link: "/services/event-decoration",
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
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      link: "/services/commercial-design",
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
      color: "text-black",
      bgColor: "bg-gray-100",
      link: "/services/printing",
    },
    {
      icon: Globe,
      title: t("digitalServices"),
      description: t("digitalServicesDesc"),
      features: [
        t("smmManagement"),
        t("seoOptimization"),
        t("uiuxDesign"),
        t("websiteDevelopment"),
        t("branding"),
        t("rebranding"),
      ],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      link: "/services/digital-services",
    },
  ]

  return (
    <section id="services" className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">{t("servicesTitle")}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t("servicesSubtitle")}</p>
        </div>

        {/* Mobile: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3 md:pb-4">
                <div
                  className={`w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-lg ${service.bgColor} flex items-center justify-center mb-2 md:mb-4`}
                >
                  <service.icon className={`h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-black text-sm md:text-lg lg:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-xs md:text-sm lg:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 md:space-y-2 lg:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-yellow-500 mr-1.5 md:mr-2 lg:mr-3 flex-shrink-0" />
                      <span className="text-xs md:text-xs lg:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 md:mt-4 lg:mt-6 pt-2 md:pt-3 lg:pt-4 border-t border-gray-100">
                  <Link href={service.link}>
                    <button
                      className={`flex items-center text-xs md:text-xs lg:text-sm font-medium ${service.color} hover:underline`}
                    >
                      {t("learnMore")}
                      <ExternalLink className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 ml-1" />
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
