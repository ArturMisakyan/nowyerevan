"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Home } from "lucide-react"
import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/components/language-provider"

function ThankYouContent() {
  const { t } = useLanguage()

  useEffect(() => {
    // Clear any form data from history to prevent back button issues
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.href)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{t("thankYouTitle")}</h1>

        <p className="text-slate-600 mb-8 leading-relaxed">{t("thankYouMessage")}</p>

        <Link href="/" passHref>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group"
          >
            <Home className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            {t("backToHome")}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <LanguageProvider>
      <ThankYouContent />
    </LanguageProvider>
  )
}
