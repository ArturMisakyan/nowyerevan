"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, Users, Palette, Cog, Rocket } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: t("precision"),
      description: t("precisionDesc"),
    },
    {
      icon: Lightbulb,
      title: t("innovation"),
      description: t("innovationDesc"),
    },
    {
      icon: Users,
      title: t("collaboration"),
      description: t("collaborationDesc"),
    },
  ]

  const capabilities = [
    {
      icon: Palette,
      title: t("creativeDesign"),
      description: t("creativeDesignDesc"),
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: Cog,
      title: t("technicalExcellence"),
      description: t("technicalExcellenceDesc"),
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Rocket,
      title: t("projectManagement"),
      description: t("projectManagementDesc"),
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t("aboutTitle")}</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t("aboutText1")}</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t("aboutText2")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <Card key={index} className="bg-white border-slate-200 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${capability.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <capability.icon className={`h-6 w-6 ${capability.color}`} />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-2">{capability.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/About_us.webp"
              alt="Our team at work"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">{t("ourValues")}</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t("valuesDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-white border-slate-200 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
