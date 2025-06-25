"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Zap, Sparkles, Rocket } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-slate-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-purple-100/20"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="mb-12 flex flex-col justify-center items-center">
            <div className="relative logo-container">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-0 animate-glow-pulse scale-150"></div>

              {/* Secondary glow ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full blur-lg opacity-0 animate-glow-ring scale-125"></div>

              {/* Main logo with multiple effects */}
<div className="relative">
  {/* Static "now" logo */}
  <img
    src="/images/now-logo-new.png"
    alt="NOW Logo"
    className="h-24 md:h-40 w-auto drop-shadow-2xl animate-logo-spectacular relative z-10"
  />

  {/* Animated "make it happen" */}
  <img
    src="/images/make.png"
    alt="Make it happen"
    className="absolute animate-tagline-fade-in h-6 md:h-10 top-0 right-[-1rem] md:right-[-1.5rem] z-20 opacity-0"
    style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
  />
</div>

              {/* Sparkle effects */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full animate-sparkle-1"></div>
              <div className="absolute -top-2 -right-6 w-2 h-2 bg-pink-400 rounded-full animate-sparkle-2"></div>
              <div className="absolute -bottom-3 -left-2 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-sparkle-3"></div>
              <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-sparkle-4"></div>

              {/* Animated ping dot */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping-enhanced"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              {t("heroTitle")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-text-shimmer">
                {t("heroTitleHighlight")}
              </span>
              <br />
              {t("heroTitleEnd")}
            </h1>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed max-w-5xl mx-auto font-medium">
            {t("heroSubtitle")}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Rocket className="mr-3 h-6 w-6" />
              {t("getStarted")}
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-12 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
            >
              <Sparkles className="mr-3 h-6 w-6" />
              {t("viewWork")}
            </Button>
          </div>

          {/* Enhanced Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="group flex flex-col items-center p-10 bg-white/90 backdrop-blur-lg rounded-3xl border border-slate-200/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t("premiumQuality")}</h3>
              <p className="text-slate-600 text-center leading-relaxed">{t("premiumQualityDesc")}</p>
            </div>

            <div className="group flex flex-col items-center p-10 bg-white/90 backdrop-blur-lg rounded-3xl border border-slate-200/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-purple-200">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t("expertTeam")}</h3>
              <p className="text-slate-600 text-center leading-relaxed">{t("expertTeamDesc")}</p>
            </div>

            <div className="group flex flex-col items-center p-10 bg-white/90 backdrop-blur-lg rounded-3xl border border-slate-200/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-green-200">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t("fastDelivery")}</h3>
              <p className="text-slate-600 text-center leading-relaxed">{t("fastDeliveryDesc")}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-container {
          position: relative;
          display: inline-block;
        }

        /* Main logo spectacular animation */
        @keyframes logo-spectacular {
          0% {
            transform: scale(1) rotate(0deg);
            filter: brightness(1) saturate(1) drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
          }
          25% {
            transform: scale(1.05) rotate(1deg);
            filter: brightness(1.2) saturate(1.3) drop-shadow(0 0 30px rgba(147, 51, 234, 0.7));
          }
          50% {
            transform: scale(1.1) rotate(0deg);
            filter: brightness(1.4) saturate(1.5) drop-shadow(0 0 40px rgba(236, 72, 153, 0.8));
          }
          75% {
            transform: scale(1.05) rotate(-1deg);
            filter: brightness(1.2) saturate(1.3) drop-shadow(0 0 30px rgba(6, 182, 212, 0.7));
          }
          100% {
            transform: scale(1) rotate(0deg);
            filter: brightness(1) saturate(1) drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
          }
        }

        .animate-logo-spectacular {
          animation: logo-spectacular 3s ease-in-out infinite;
        }

        /* Glow pulse animation */
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0;
            transform: scale(1.2);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.8);
          }
        }

        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }

        /* Glow ring animation */
        @keyframes glow-ring {
          0%, 100% {
            opacity: 0;
            transform: scale(1.1) rotate(0deg);
          }
          33% {
            opacity: 0.4;
            transform: scale(1.4) rotate(120deg);
          }
          66% {
            opacity: 0.2;
            transform: scale(1.6) rotate(240deg);
          }
        }

        .animate-glow-ring {
          animation: glow-ring 5s linear infinite;
        }

        /* Sparkle animations */
        @keyframes sparkle-1 {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
        }

        @keyframes sparkle-2 {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.2) rotate(270deg);
          }
        }

        @keyframes sparkle-3 {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          40% {
            opacity: 1;
            transform: scale(1.3) rotate(90deg);
          }
        }

        @keyframes sparkle-4 {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          70% {
            opacity: 1;
            transform: scale(1.4) rotate(360deg);
          }
        }

        .animate-sparkle-1 {
          animation: sparkle-1 2.5s ease-in-out infinite;
        }

        .animate-sparkle-2 {
          animation: sparkle-2 3s ease-in-out infinite 0.5s;
        }

        .animate-sparkle-3 {
          animation: sparkle-3 2.8s ease-in-out infinite 1s;
        }

        .animate-sparkle-4 {
          animation: sparkle-4 3.2s ease-in-out infinite 1.5s;
        }

        /* Enhanced ping animation */
        @keyframes ping-enhanced {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .animate-ping-enhanced {
          animation: ping-enhanced 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Text shimmer animation */
        @keyframes text-shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-text-shimmer {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  )
}
