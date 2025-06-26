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
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: t("expertTeam"),
      description: t("expertTeamDesc"),
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Zap,
      title: t("fastDelivery"),
      description: t("fastDeliveryDesc"),
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-4 md:p-6 lg:p-8 text-center">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 ${feature.bgColor} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 mx-auto`}
                >
                  <feature.icon className={`h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 ${feature.color}`} />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 lg:mb-4 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
