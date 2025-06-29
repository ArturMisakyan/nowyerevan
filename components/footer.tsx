"use client"

import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { COMPANY_INFO } from "@/lib/company-info"

export function Footer() {
  const { t, language } = useLanguage()
  const addressInfo = COMPANY_INFO.contact.address[language]

  // Google Maps link for the address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressInfo.full)}`

  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <img
                src="/images/now-logo-header.webp"
                alt="NOW - Make it happen"
                className="h-6 md:h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed max-w-md text-sm md:text-base">
              {t("footerDescription")}
            </p>
            <div className="flex space-x-4">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-orange cursor-pointer transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-orange cursor-pointer transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-orange cursor-pointer transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href={COMPANY_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-orange cursor-pointer transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-brand-orange">{t("services")}</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
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
                  {t("digitalServices")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-brand-orange">{t("contact")}</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-orange flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-orange flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-orange flex-shrink-0 mt-1" />
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <div>{addressInfo.city}</div>
                  <div>{addressInfo.street}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
