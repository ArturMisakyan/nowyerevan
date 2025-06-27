"use client"

import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <img
                src="/images/now-logo-header.png"
                alt="NOW - Make it happen"
                className="h-6 md:h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed max-w-md text-sm md:text-base">
              {t("footerDescription")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574513597283"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 cursor-pointer transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="https://www.instagram.com/now.evn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 cursor-pointer transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <button
                className="text-slate-400 hover:text-blue-400 cursor-pointer transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                className="text-slate-400 hover:text-red-400 cursor-pointer transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-blue-400">{t("services")}</h3>
            <ul className="space-y-2 md:space-y-3 text-slate-300 text-sm md:text-base">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t("outdoorAd")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t("expoPavilions")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t("promoStands")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t("eventDecor")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t("commercialDecor")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t("printServices")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-blue-400">{t("contact")}</h3>
            <ul className="space-y-3 md:space-y-4 text-slate-300 text-sm md:text-base">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+37443454102" className="hover:text-white transition-colors">
                  +374 43 454 102
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:nowyerevan@gmail.com" className="hover:text-white transition-colors break-all">
                  nowyerevan@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div>{t("city")}</div>
                  <div>{t("street")}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 md:pt-8 text-center">
          <p className="text-slate-400 text-xs md:text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
