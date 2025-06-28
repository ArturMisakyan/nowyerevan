"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { COMPANY_INFO } from "@/lib/company-info"

export function Contact() {
  const { t, language } = useLanguage()
  const addressInfo = COMPANY_INFO.contact.address[language]
  const workingHours = COMPANY_INFO.workingHours[language]

  // Google Maps link for the address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressInfo.full)}`

  return (
    <section id="contact" className="py-12 md:py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t("contactTitle")}</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">{t("contactSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl md:text-2xl text-black flex items-center">
                <Send className="h-5 w-5 md:h-6 md:w-6 mr-2 text-yellow-400" />
                {t("getInTouch")}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form
                action="https://formsubmit.co/nowyerevan@gmail.com"
                method="POST"
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => {
                  setTimeout(() => {
                    const form = e.target as HTMLFormElement
                    form.reset()
                    window.location.href = "/thanks"
                  }, 100)
                }}
              >
                <div>
                  <Label htmlFor="name" className="text-black font-medium text-sm md:text-base">
                    {t("name")}
                  </Label>
                  <Input
                    id="name"
                    name="Name"
                    required
                    className="mt-2 border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 h-10 md:h-11"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-black font-medium text-sm md:text-base">
                    {t("email")}
                  </Label>
                  <Input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    className="mt-2 border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 h-10 md:h-11"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-black font-medium text-sm md:text-base">
                    {t("phone")}
                  </Label>
                  <Input
                    id="phone"
                    name="Phone"
                    className="mt-2 border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 h-10 md:h-11"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-black font-medium text-sm md:text-base">
                    {t("message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="Message"
                    rows={4}
                    required
                    className="mt-2 border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 resize-none"
                  />
                </div>

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://nowyerevan.am/thanks" />
                <input type="hidden" name="_template" value="table" />

                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 md:py-4 text-sm md:text-base font-bold flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {t("sendMessage")}
                </button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4 md:space-y-6">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 md:p-6">
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-200 transition-colors">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2 text-sm md:text-base group-hover:text-yellow-600 transition-colors">
                      {t("phone")}
                    </h3>
                    <span className="text-gray-600 hover:text-yellow-600 transition-colors text-sm md:text-base">
                      {COMPANY_INFO.contact.phone}
                    </span>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 md:p-6">
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-200 transition-colors">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2 text-sm md:text-base group-hover:text-yellow-600 transition-colors">
                      {t("email")}
                    </h3>
                    <span className="text-gray-600 hover:text-yellow-600 transition-colors text-sm md:text-base break-all">
                      {COMPANY_INFO.contact.email}
                    </span>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 md:p-6">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-200 transition-colors">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2 text-sm md:text-base group-hover:text-yellow-600 transition-colors">
                      {t("address")}
                    </h3>
                    <p className="text-gray-600 group-hover:text-yellow-600 transition-colors text-sm md:text-base">
                      {addressInfo.city}
                    </p>
                    <p className="text-gray-600 group-hover:text-yellow-600 transition-colors text-sm md:text-base">
                      {addressInfo.street}
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2 text-sm md:text-base">{t("workingHours")}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{workingHours.mondayFriday}</p>
                    <p className="text-gray-600 text-sm md:text-base">{workingHours.saturday}</p>
                    <p className="text-gray-600 text-sm md:text-base">{workingHours.sunday}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
