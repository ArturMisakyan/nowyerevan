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
    <div className="min-h-screen flex flex-col justify-center items-center px-4 overflow-y-auto bg-gradient-to-br from-black via-gray-900 to-black relative">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-brand-orange rounded-full animate-pulse delay-700"></div>
      </div>

      {/* ✅ Main content */}
      <div className="w-full max-w-4xl flex flex-col items-center space-y-6 relative z-10 py-8">
      {/* ✅ LOGO block, 2 parts, responsive */}
<div className="relative inline-block mb-6 mt-6">
  <img
    src="/images/now-logo-empty.webp"
    alt="NOW Logo"
    className="w-24 sm:w-32 md:w-40 lg:w-56 mx-auto drop-shadow-lg filter brightness-0 invert"
  />
  <div className="absolute top-0 right-0 sm:top-1 sm:right-1 md:top-2 md:right-2 z-20">
    <img
      src="/images/make.webp"
      alt="Make it happen"
      className="h-2 sm:h-2.5 md:h-3 lg:h-4 w-auto animate-typing-reveal filter brightness-0 invert"
    />
  </div>
</div>


        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-brand-orange text-white px-5 py-1.5 rounded-full font-bold text-xs md:text-sm animate-pulse">
          <Clock className="w-4 h-4" />
          <span>{t("comingSoonTitle")}</span>
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight text-center">
          Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-600">
            Amazing
          </span>
          <br />
          is Coming
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center max-w-xl">
          {t("comingSoonMessage")}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
            <Star className="w-5 h-5 text-brand-orange mx-auto mb-2" />
            <p className="text-white text-xs md:text-sm font-medium text-center">
              Premium Design
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
            <Rocket className="w-5 h-5 text-brand-orange mx-auto mb-2" />
            <p className="text-white text-xs md:text-sm font-medium text-center">
              Fast Performance
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
            <Sparkles className="w-5 h-5 text-brand-orange mx-auto mb-2" />
            <p className="text-white text-xs md:text-sm font-medium text-center">
              Modern Features
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link href="/" passHref>
          <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2 text-xs md:text-sm font-bold shadow-xl hover:shadow-orange-500/25 transition transform hover:scale-105 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t("backToHome")}
          </Button>
        </Link>

        {/* Stay Tuned */}
        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
          <span className="text-xs md:text-sm font-medium">{t("stayTuned")}</span>
          <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Progress */}
        <div className="w-full max-w-md">
          <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-brand-orange to-orange-600 h-2 rounded-full animate-pulse"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-gray-400 text-xs md:text-sm">75% Complete</p>
        </div>
      </div>

      {/* ✅ Typing reveal style block */}
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
