"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Rocket } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = ["/images/gray-background.jpg", "/images/gray-background.jpg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative overflow-hidden min-h-screen pt-12 md:pt-24 lg:pt-32 flex flex-col">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide || "/placeholder.svg"} alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/60" />
          </div>
        ))}
      </div>

      {/* Carousel Dots - Bottom right */}
      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentSlide
                ? "bg-blue-600 border-blue-600 scale-125 shadow-lg"
                : "bg-white/60 border-white hover:bg-white/80 hover:border-white hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto text-center relative z-10 px-4 flex flex-col justify-start flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="mb-6 md:mb-8 lg:mb-10 flex flex-col justify-center items-center">
            <div className="relative logo-container">
              <div className="relative flex flex-col items-center">
                <img
                  src="/images/now-logo-empty.png"
                  alt="NOW Logo"
                  className="h-16 md:h-24 lg:h-32 w-auto drop-shadow-lg relative z-10"
                />
                <div className="absolute top-0 right-0 z-20">
                  <img
                    src="/images/make.png"
                    alt="Make it happen"
                    className="h-2.5 md:h-4 lg:h-6 w-auto animate-typing-reveal"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="mb-4 md:mb-6 lg:mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-4 lg:mb-6 leading-tight px-2">
              {t("heroTitle")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t("heroTitleHighlight")}
              </span>
              <br />
              {t("heroTitleEnd")}
            </h1>
            <div className="flex justify-center mb-3 md:mb-4 lg:mb-6">
              <div className="w-12 md:w-16 lg:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-slate-700 mb-6 md:mb-8 lg:mb-10 leading-relaxed max-w-4xl mx-auto font-medium px-4">
            {t("heroSubtitle")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center mb-8 md:mb-10 lg:mb-12 px-4">
            <Link href="https://nowyerevan.am/#contact" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 text-base md:text-lg lg:text-xl font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="mr-2 h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                {t("getStarted")}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </Button>
            </Link>

            <Link href="https://nowyerevan.am/#portfolio" passHref>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                {t("viewWork")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
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

        @media (max-width: 1024px) {
          .animate-typing-reveal {
            top: -0.25rem;
            right: -0.5rem;
          }
        }

        @media (max-width: 768px) {
          .animate-typing-reveal {
            top: -0.125rem;
            right: -0.25rem;
          }
        }

        @media (max-width: 480px) {
          .animate-typing-reveal {
            top: 0;
            right: 0;
          }
        }
      `}</style>
    </section>
  )
}
