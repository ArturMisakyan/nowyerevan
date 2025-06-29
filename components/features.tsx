"use client"

import { Award, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Award,
      title: t("premiumQuality"),
      description: t("premiumQualityDesc"),
      color: "text-brand-orange",
      bgColor: "bg-orange-50",
    },
    {
      icon: Users,
      title: t("expertTeam"),
      description: t("expertTeamDesc"),
      color: "text-black",
      bgColor: "bg-gray-100",
    },
    {
      icon: Zap,
      title: t("fastDelivery"),
      description: t("fastDeliveryDesc"),
      color: "text-brand-orange",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* 3D Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/images/3d-booth.webp"
            alt="3D Booth Background"
            className="w-full h-full object-cover transform perspective-1000 rotateX-12"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            >
              <CardContent className="p-4 md:p-6 lg:p-8 text-center relative">
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 ${feature.bgColor} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 mx-auto shadow-lg`}
                  >
                    <feature.icon className={`h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 ${feature.color}`} />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 lg:mb-4 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
