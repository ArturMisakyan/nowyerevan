"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Rocket } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  // ✅ Final slides: Exhibition Booth, Interior, Vinyl_Printing, Event1
  const slides = [
    "/images/Exhibition Booth.webp",
    "/images/Interior.webp",
    "/images/Vinyl_Printing.webp",
    "/images/Event1.webp",
  ]

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
    <section id="home" className="relative overflow-hidden above-fold">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide || "/placeholder.svg"}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: "var(--overlay-opacity, 0.3)" }}
        />
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-20 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentSlide
                ? "bg-brand-orange border-brand-orange scale-125 shadow-lg"
                : "bg-white/60 border-white hover:bg-white/80 hover:border-white hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="above-fold-content">
        <div className="container mx-auto text-center relative z-10 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Logo */}
            <div className="mb-4 md:mb-6 lg:mb-8 flex flex-col justify-center items-center">
              <div className="relative logo-container">
                <div className="relative flex flex-col items-center">
                  <img
                    src="/images/now-logo-empty.webp"
                    alt="NOW Logo"
                    className="h-12 md:h-20 lg:h-32 xl:h-40 w-auto drop-shadow-lg relative z-10 filter brightness-0 invert"
                  />
                  <div className="absolute top-0 right-0 z-20">
                    <img
                      src="/images/make.webp"
                      alt="Make it happen"
                      className="h-2 md:h-3 lg:h-5 xl:h-7 w-auto animate-typing-reveal filter brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Headline with blur */}
            <div className="mb-4 md:mb-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-md px-4 py-2">
                <h1 className="text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  {t("heroTitle")}{" "}
                  <span className="text-brand-orange">
                    {t("heroTitleHighlight")}
                  </span>
                  <br />
                  {t("heroTitleEnd")}
                </h1>
              </div>
              <div className="flex justify-center mb-3 md:mb-4 lg:mb-6">
                <div className="w-6 md:w-10 lg:w-16 xl:w-20 h-1 bg-gradient-to-r from-brand-orange to-orange-600 rounded-full" />
              </div>
            </div>

            {/* Subtitle with blur */}
            <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-200 mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-4xl mx-auto font-medium px-4 py-3 bg-white/10 backdrop-blur-sm rounded-md">
              {t("heroSubtitle")}
            </p>

            {/* Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-4 justify-center px-4">
              <Link href="#contact" passHref>
                <Button
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-xs md:text-sm lg:text-base font-bold shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                  {t("getStarted")}
                  <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                </Button>
              </Link>

              <Link href="#portfolio" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-xs md:text-sm lg:text-base font-bold transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-sm"
                >
                  <Sparkles className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                  {t("viewWork")}
                </Button>
              </Link>
            </div>
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

        /* Better proportional positioning for "make it happen" */
        @media (min-width: 1280px) {
          .animate-typing-reveal {
            top: -0.5rem;
            right: -0.75rem;
          }
        }

        @media (max-width: 1279px) and (min-width: 1024px) {
          .animate-typing-reveal {
            top: -0.375rem;
            right: -0.625rem;
          }
        }

        @media (max-width: 1023px) and (min-width: 768px) {
          .animate-typing-reveal {
            top: -0.25rem;
            right: -0.5rem;
          }
        }

        @media (max-width: 767px) {
          .animate-typing-reveal {
            top: -0.125rem;
            right: -0.25rem;
          }
        }
      `}</style>
    </section>
  )
}
