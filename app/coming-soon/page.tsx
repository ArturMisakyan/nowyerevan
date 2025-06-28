"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Sparkles } from "lucide-react"
import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/components/language-provider"

function ComingSoonContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-10 h-10 text-blue-600" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("comingSoonTitle")}</h1>

        <p className="text-slate-600 mb-8 leading-relaxed">{t("comingSoonMessage")}</p>

        <div className="flex items-center justify-center space-x-2 mb-8">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span className="text-blue-600 font-medium">{t("stayTuned")}</span>
          <Sparkles className="w-5 h-5 text-blue-600" />
        </div>

        <Link href="/" passHref>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            {t("backToHome")}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default function ComingSoonPage() {
  return (
    <LanguageProvider>
      <ComingSoonContent />
    </LanguageProvider>
  )
}
