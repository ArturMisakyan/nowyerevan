"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`)
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
      `)

      const mailtoLink = `mailto:nowyerevan@gmail.com?subject=${subject}&body=${body}`

      // Open email client
      window.location.href = mailtoLink

      // Show success state
      setIsSubmitted(true)

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t("contactTitle")}</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">{t("contactSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <Card className="bg-white border-slate-200 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl md:text-2xl text-slate-800 flex items-center">
                <Send className="h-5 w-5 md:h-6 md:w-6 mr-2 text-blue-600" />
                {t("getInTouch")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Your email client should open shortly. Thank you for contacting us!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-medium text-sm md:text-base">
                      {t("name")}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-10 md:h-11"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium text-sm md:text-base">
                      {t("email")}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-10 md:h-11"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-slate-700 font-medium text-sm md:text-base">
                      {t("phone")}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-10 md:h-11"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium text-sm md:text-base">
                      {t("message")}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-4 text-sm md:text-base font-medium"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        {t("sendMessage")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-4 md:space-y-6">
            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm md:text-base">{t("phone")}</h3>
                    <a
                      href="tel:+37443454102"
                      className="text-slate-600 hover:text-blue-600 transition-colors text-sm md:text-base"
                    >
                      +374 43 454 102
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm md:text-base">{t("email")}</h3>
                    <a
                      href="mailto:nowyerevan@gmail.com"
                      className="text-slate-600 hover:text-blue-600 transition-colors text-sm md:text-base break-all"
                    >
                      nowyerevan@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm md:text-base">{t("address")}</h3>
                    <p className="text-slate-600 text-sm md:text-base">Yerevan, Armenia</p>
                    <p className="text-slate-600 text-sm md:text-base">Tumanyan Street 15</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm md:text-base">{t("workingHours")}</h3>
                    <p className="text-slate-600 text-sm md:text-base">{t("mondayFriday")}</p>
                    <p className="text-slate-600 text-sm md:text-base">{t("saturday")}</p>
                    <p className="text-slate-600 text-sm md:text-base">{t("sunday")}</p>
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
