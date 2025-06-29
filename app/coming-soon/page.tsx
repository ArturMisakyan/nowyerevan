"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Sparkles, Rocket, Star } from "lucide-react"
import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { useEffect, useState } from "react"

function ComingSoonContent() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  if (!t) return null

  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center items-center px-4 overflow-hidden relative">
      {/* Logo with typing reveal */}
      <div className="relative mb-4 mt-6">
        <img
          src="/images/now-logo-empty.webp"
          alt="NOW Logo"
          className="h-16 md:h-24 w-auto mx-auto filter brightness-0 invert drop-shadow-lg"
        />
        <div className="absolute top-0 right-0 z-20">
          <img
            src="/images/make.webp"
            alt="Make it happen"
            className="h-3 md:h-4 w-auto animate-typing-reveal filter brightness-0 invert"
          />
        </div>
      </div>

      {/* Coming Soon Badge */}
      <div className="inline-flex items-center space-x-2 bg-brand-orange text-white px-4 py-1 rounded-full font-bold text-xs md:text-sm mb-4 animate-pulse">
        <Clock className="w-4 h-4" />
        <span>{t("comingSoonTitle")}</span>
        <Sparkles className="w-4 h-4" />
      </div>

      {/* Headline */}
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight text-center mb-2">
        Something{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-600">
          Amazing
        </span>
        <br />
        is Coming
      </h1>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-gray-300 max-w-md text-center mb-4">
        {t("comingSoonMessage")}
      </p>

      {/* Features grid */}
      <div className="grid grid-cols-3 gap-2 mb-4 max-w-xs">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-2 hover:bg-white/10">
          <Star className="w-5 h-5 text-brand-orange mx-auto mb-1" />
          <p className="text-white text-xs font-medium text-center">
            Premium
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-2 hover:bg-white/10">
          <Rocket className="w-5 h-5 text-brand-orange mx-auto mb-1" />
          <p className="text-white text-xs font-medium text-center">
            Fast
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-2 hover:bg-white/10">
          <Sparkles className="w-5 h-5 text-brand-orange mx-auto mb-1" />
          <p className="text-white text-xs font-medium text-center">
            Modern
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <Link href="/" passHref>
        <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-4 py-2 text-xs md:text-sm font-bold shadow hover:shadow-orange-500/25 transition group">
          <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t("backToHome")}
        </Button>
      </Link>

      {/* Progress bar (optional, compact) */}
      <div className="w-full max-w-xs bg-gray-800 rounded-full h-1 mt-4">
        <div
          className="bg-gradient-to-r from-brand-orange to-orange-600 h-1 rounded-full animate-pulse"
          style={{ width: "75%" }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes typing-reveal {
          0% {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
          }
          100% {
            opacity: 1;
            clip-path: inset(0 0% 0 0);
          }
        }
        .animate-typing-reveal {
          animation: typing-reveal 3s ease-out forwards;
          animation-delay: 1s;
          animation-fill-mode: both;
        }
      `}</style>
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
