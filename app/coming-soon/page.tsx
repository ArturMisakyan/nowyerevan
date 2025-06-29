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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-brand-orange rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Main content */}

        {/* Logo section */}
        <div className="mb-8 mt-8">
          <div className="relative inline-block">
            <img
              src="/images/now-logo-empty.webp"
              alt="NOW Logo"
              className="h-20 md:h-32 w-auto mx-auto filter brightness-0 invert drop-shadow-lg"
            />
            <div className="absolute top-0 right-0 z-20">
              <img
                src="/images/make.webp"
                alt="Make it happen"
                className="h-3 md:h-5 w-auto animate-typing-reveal filter brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center space-x-2 bg-brand-orange text-white px-6 py-2 rounded-full font-bold text-sm md:text-base mb-8 animate-pulse">
          <Clock className="w-4 h-4" />
          <span>{t("comingSoonTitle")}</span>
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-600">
            Amazing
          </span>
          <br />
          is Coming
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto">
          {t("comingSoonMessage")}
        </p>

        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <Star className="w-6 h-6 text-brand-orange mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Premium Design</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <Rocket className="w-6 h-6 text-brand-orange mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Fast Performance</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <Sparkles className="w-6 h-6 text-brand-orange mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Modern Features</p>
          </div>
        </div>

        {/* Centered CTA Button */}
        <div className="flex justify-center mb-8">
          <Link href="/" passHref>
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              {t("backToHome")}
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-2 text-gray-400 mb-8">
          <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">{t("stayTuned")}</span>
          <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Progress indicator */}
        <div className="mt-12">
          <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-brand-orange to-orange-600 h-2 rounded-full animate-pulse"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm">75% Complete</p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-8 h-8 border-2 border-brand-orange rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float delay-1000">
        <div className="w-6 h-6 border-2 border-white rounded-full opacity-20"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

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
