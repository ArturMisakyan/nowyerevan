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
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black relative">
      {/* Fixed container with scaling */}
      <div className="relative origin-top transform scale-[clamp(0.5,80vw/1280,1)] max-w-[1280px] w-full px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="relative inline-block mb-8 mt-8">
          <img
            src="/images/now-logo-empty.webp"
            alt="NOW Logo"
            className="w-32 md:w-48 mx-auto filter brightness-0 invert drop-shadow-lg"
          />
          <div className="absolute top-0 right-0 z-20">
            <img
              src="/images/make.webp"
              alt="Make it happen"
              className="h-3 md:h-4 w-auto animate-typing-reveal filter brightness-0 invert"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-brand-orange text-white px-6 py-2 rounded-full font-bold text-sm md:text-base mb-6 animate-pulse">
          <Clock className="w-4 h-4" />
          <span>{t("comingSoonTitle")}</span>
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight text-center">
          Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-600">
            Amazing
          </span>
          <br />
          is Coming
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-gray-300 mb-6 leading-relaxed max-w-xl text-center">
          {t("comingSoonMessage")}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-2xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
            <Star className="w-6 h-6 text-brand-orange mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Premium Design</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
            <Rocket className="w-6 h-6 text-brand-orange mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Fast Performance</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
            <Sparkles className="w-6 h-6 text-brand-orange mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Modern Features</p>
          </div>
        </div>

        {/* CTA */}
        <Link href="/" passHref>
          <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 text-base font-bold shadow-xl hover:shadow-orange-500/25 transition transform hover:scale-105 group">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            {t("backToHome")}
          </Button>
        </Link>

        {/* Stay Tuned */}
        <div className="flex items-center justify-center space-x-2 text-gray-400 mt-4">
          <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">{t("stayTuned")}</span>
          <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Progress */}
        <div className="w-full max-w-md mx-auto mt-4">
          <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-brand-orange to-orange-600 h-2 rounded-full animate-pulse"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm">75% Complete</p>
        </div>
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
