"use client"

import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/images/now-complete-logo.png"
                alt="NOW - Make it happen"
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">{t("footerDescription")}</p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-slate-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-slate-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-400">{t("services")}</h3>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("outdoorAd")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("expoPavilions")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("promoStands")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("eventDecor")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("commercialDecor")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("printServices")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-400">{t("contact")}</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>+374 43 454 102</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>nowyerevan@gmail.com</span>
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

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
