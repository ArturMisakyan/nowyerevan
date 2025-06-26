"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import type { Language } from "@/types/language"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: "en" as const, name: "English", flag: "🇺🇸", short: "ENG" },
    { code: "hy" as const, name: "Հայերեն", flag: "🇦🇲", short: "ՀԱՅ" },
    { code: "ru" as const, name: "Русский", flag: "🇷🇺", short: "РУС" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
    setIsLangOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center">
              <img src="/images/now-logo-header.png" alt="NOW - Make it happen" className="h-8 md:h-10 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a
              href="#home"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
            >
              {t("home")}
            </a>
            <a
              href="#services"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
            >
              {t("services")}
            </a>
            <a
              href="#portfolio"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
            >
              {t("portfolio")}
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
            >
              {t("about")}
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
            >
              {t("contact")}
            </a>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop Language Dropdown - Only Flag */}
            <div className="hidden md:block relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border-slate-200 hover:bg-slate-50 transition-all duration-200"
              >
                <span className="text-lg">{currentLanguage?.flag}</span>
                <ChevronDown
                  className={`h-3 w-3 text-slate-400 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                />
              </Button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 shadow-lg rounded-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`
                        w-full flex items-center space-x-3 px-3 py-2.5 text-left hover:bg-slate-50 transition-colors
                        ${language === lang.code ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-700"}
                      `}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium text-sm">{lang.short}</span>
                      {language === lang.code && <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Language Dropdown - In Header */}
            <div className="md:hidden relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 px-2 py-1.5 rounded-lg border-slate-200 hover:bg-slate-50 transition-all duration-200 h-8"
              >
                <span className="text-sm">{currentLanguage?.flag}</span>
                <ChevronDown
                  className={`h-3 w-3 text-slate-400 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                />
              </Button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white border border-slate-200 shadow-lg rounded-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`
                        w-full flex items-center space-x-2 px-2 py-2 text-left hover:bg-slate-50 transition-colors
                        ${language === lang.code ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-700"}
                      `}
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span className="font-medium text-xs">{lang.short}</span>
                      {language === lang.code && <div className="ml-auto w-1.5 h-1.5 bg-blue-500 rounded-full"></div>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden h-8 w-8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-slate-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("home")}
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("services")}
              </a>
              <a
                href="#portfolio"
                className="text-slate-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("portfolio")}
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </a>
            </div>
          </nav>
        )}
      </div>

      {/* Overlay for desktop dropdown */}
      {isLangOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />}
    </header>
  )
}
