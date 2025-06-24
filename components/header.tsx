"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: "en" as const, name: "English", flag: "🇺🇸", short: "ENG" },
    { code: "hy" as const, name: "Հայերեն", flag: "🇦🇲", short: "ՀԱՅ" },
    { code: "ru" as const, name: "Русский", flag: "🇷🇺", short: "РУС" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/images/now-complete-logo.png" alt="NOW - Make it happen" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              {t("home")}
            </a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              {t("services")}
            </a>
            <a href="#portfolio" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              {t("portfolio")}
            </a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              {t("about")}
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              {t("contact")}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Desktop Language Dropdown - Compact */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex items-center space-x-1 px-2 py-1.5 rounded-lg hover:bg-slate-100 transition-all duration-200"
                >
                  <span className="text-base">{currentLanguage?.flag}</span>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-44 p-1 bg-white border border-slate-200 shadow-lg rounded-lg mt-1"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`
                      flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-all duration-200
                      ${language === lang.code ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50 text-slate-700"}
                    `}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span className="font-medium text-sm">{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-700 hover:text-blue-600 font-medium">
                {t("home")}
              </a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium">
                {t("services")}
              </a>
              <a href="#portfolio" className="text-slate-700 hover:text-blue-600 font-medium">
                {t("portfolio")}
              </a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium">
                {t("about")}
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium">
                {t("contact")}
              </a>

              {/* Mobile Language Selector - Compact */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-center mb-3">
                  <Globe2 className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-slate-700">Language</span>
                </div>

                <div className="flex justify-center space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`
                        flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-200
                        ${
                          language === lang.code
                            ? "bg-blue-50 border-2 border-blue-200 scale-105"
                            : "bg-slate-50 hover:bg-slate-100 border-2 border-transparent"
                        }
                      `}
                    >
                      <span className="text-xl">{lang.flag}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
