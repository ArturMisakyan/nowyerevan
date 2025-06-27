"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function Portfolio() {
  const { t } = useLanguage()

  const portfolioItems = [
    {
      title: t("techExpo"),
      category: t("techExpoCategory"),
      image: "/images/Exhibition Booth.webp",
      tags: [t("interactive"), t("ledDisplays"), t("modernDesign")],
    },
    {
      title: t("mallCampaign"),
      category: t("mallCampaignCategory"),
      image: "/images/Outdoor_ad.webp",
      tags: [t("digitalScreens"), t("brandActivation"), t("lightBoxes")],
    },
    {
      title: t("corporateEvent"),
      category: t("corporateEventCategory"),
      image: "/images/Event1.webp?height=300&width=400",
      tags: [t("stageDesign"), t("lighting"), t("branding")],
    },
    {
      title: t("restaurantInterior"),
      category: t("restaurantInteriorCategory"),
      image: "/images/Interior.webp",
      tags: [t("interiorDesign"), t("atmosphere"), t("customFurniture")],
    },
    {
      title: t("tradeBooth"),
      category: t("tradeBoothCategory"),
      image: "/images/Booth2.webp",
      tags: [t("modular"), t("interactive"), t("productDisplay")],
    },
    {
      title: t("brandMaterials"),
      category: t("brandMaterialsCategory"),
      image: "/images/Vinyl_Printing.webp",
      tags: [t("largeFormat"), t("vinyl"), t("promotional")],
    },
    {
      title: t("festivalStage"),
      category: t("festivalStageCategory"),
      image: "/images/Stage.webp",
      tags: [t("largeScale"), t("themed"), t("stageTech")],
    },
  ]

  return (
    <section id="portfolio" className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t("portfolioTitle")}</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">{t("portfolioSubtitle")}</p>
        </div>

        {/* Mobile: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="bg-white border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-32 md:h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-white/90 text-slate-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-3 md:p-4 lg:p-6">
                <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-slate-800 mb-1 md:mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-blue-600 font-medium text-xs md:text-sm lg:text-base">{item.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
