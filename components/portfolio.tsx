"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function Portfolio() {
  const { t } = useLanguage()

  const portfolioItems = [
    {
      title: "Տեխնոլոգիական Էքսպո Պավիլիոն",
      category: "Էքսպո Պավիլիոններ",
      image: "/images/wooden-shelves-display.png",
      tags: ["Ինտերակտիվ", "LED Էկրաններ", "Ժամանակակից Դիզայն"],
    },
    {
      title: "Առևտրային Կենտրոնի Գովազդային Արշավ",
      category: "Արտաքին Գովազդ",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Թվային Էկրաններ", "Բրենդի Ակտիվացում", "Լուսային Տաբլաներ"],
    },
    {
      title: "Կորպորատիվ Միջոցառման Ձևավորում",
      category: "Միջոցառումների Դեկոր",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Բեմի Դիզայն", "Լուսավորություն", "Բրենդինգ"],
    },
    {
      title: "Ռեստորանի Ինտերիեր",
      category: "Առևտրային Դեկոր",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Ինտերիերի Դիզայն", "Մթնոլորտ", "Անհատական Կահույք"],
    },
    {
      title: "Առևտրային Ցուցահանդեսի Կանգառ",
      category: "Էքսպո Պավիլիոններ",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Մոդուլային", "Ինտերակտիվ", "Ապրանքների Ցուցադրում"],
    },
    {
      title: "Բրենդային Գովազդային Նյութեր",
      category: "Տպագրական Ծառայություններ",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Մեծ Ֆորմատ", "Վինիլ", "Գովազդային"],
    },
    {
      title: "Հյուրանոցի Լոբբիի Դիզայն",
      category: "Առևտրային Դեկոր",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Շքեղություն", "Լուսավորություն", "Ընդունարանի Տարածք"],
    },
    {
      title: "Փառատոնի Հիմնական Բեմ",
      category: "Միջոցառումների Դեկոր",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Մեծ Մասշտաբ", "Թեմատիկ", "Բեմական Տեխնիկա"],
    },
    {
      title: "Ավտոմոբիլային Ցուցասրահ",
      category: "Էքսպո Պավիլիոններ",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Ապրանքների Ցուցադրում", "Ինտերակտիվ", "Պրեմիում"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t("portfolio")}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ուսումնասիրեք մեր վերջին նախագծերը և տեսեք, թե ինչպես ենք մենք կյանքի բերում ստեղծագործական տեսլականները
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="bg-white border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-white/90 text-slate-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-blue-600 font-medium text-sm">{item.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
