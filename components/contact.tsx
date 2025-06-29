"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, Upload, X, FileImage } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { COMPANY_INFO } from "@/lib/company-info"

export function Contact() {
  const { t, language } = useLanguage()
  const addressInfo = COMPANY_INFO.contact.address[language]
  const workingHours = COMPANY_INFO.workingHours[language]

  const [attachedFiles, setAttachedFiles] = useState<File[]>([])
  const [dragOver, setDragOver] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  // Google Maps link for the address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressInfo.full)}`

  const validateFile = (file: File): string | null => {
    const maxSize = 10 * 1024 * 1024 // 10MB
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/webp",
      "application/pdf",
      "text/plain",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]

    if (file.size > maxSize) {
      return "File size must be less than 10MB"
    }

    if (!allowedTypes.includes(file.type)) {
      return "File type not supported. Please use images, PDF, or document files."
    }

    return null
  }

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return

    const newFiles: File[] = []
    const newErrors: { [key: string]: string } = {}

    Array.from(files).forEach((file, index) => {
      const error = validateFile(file)
      if (error) {
        newErrors[`file_${index}`] = error
      } else {
        newFiles.push(file)
      }
    })

    setErrors((prev) => ({ ...prev, ...newErrors }))

    if (newFiles.length > 0) {
      setAttachedFiles((prev) => [...prev, ...newFiles].slice(0, 5)) // Max 5 files
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    handleFileSelect(e.dataTransfer.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

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
                <Send className="h-5 w-5 md:h-6 md:w-6 mr-2 text-brand-orange" />
                {t("getInTouch")}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form
                action="https://formsubmit.co/nowyerevan@gmail.com"
                method="POST"
                className="space-y-4 md:space-y-6"
                encType="multipart/form-data"
                onSubmit={(e) => {
                  setTimeout(() => {
                    const form = e.target as HTMLFormElement
                    form.reset()
                    setAttachedFiles([])
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
                    placeholder="Enter your full name"
                    className="mt-2 border-gray-200 focus:border-brand-orange focus:ring-brand-orange h-10 md:h-11 placeholder:text-gray-400"
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
                    placeholder="Enter your email address"
                    className="mt-2 border-gray-200 focus:border-brand-orange focus:ring-brand-orange h-10 md:h-11 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-black font-medium text-sm md:text-base">
                    {t("phone")}
                  </Label>
                  <Input
                    id="phone"
                    name="Phone"
                    placeholder="Enter your phone number"
                    className="mt-2 border-gray-200 focus:border-brand-orange focus:ring-brand-orange h-10 md:h-11 placeholder:text-gray-400"
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
                    placeholder="Tell us about your project requirements..."
                    className="mt-2 border-gray-200 focus:border-brand-orange focus:ring-brand-orange resize-none placeholder:text-gray-400"
                  />

                  {/* File Upload Section - Integrated into Message */}
                  <div
                    className={`file-upload-area ${dragOver ? "dragover" : ""}`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onClick={() => document.getElementById("file-input")?.click()}
                  >
                    <input
                      id="file-input"
                      type="file"
                      multiple
                      accept="image/*,.pdf,.doc,.docx,.txt"
                      onChange={(e) => handleFileSelect(e.target.files)}
                      className="hidden"
                      name="attachments"
                    />
                    <Upload className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                    <p className="text-gray-600 text-xs">Attach files (optional)</p>
                    <p className="text-gray-400 text-xs">Max 5 files, 10MB each</p>
                  </div>

                  {/* File Preview */}
                  {attachedFiles.length > 0 && (
                    <div className="file-preview">
                      {attachedFiles.map((file, index) => (
                        <div key={index} className="file-preview-item">
                          <FileImage className="h-4 w-4 text-brand-orange mr-2 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                            <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Display file errors */}
                  {Object.keys(errors).length > 0 && (
                    <div className="mt-2">
                      {Object.values(errors).map((error, index) => (
                        <p key={index} className="text-red-500 text-xs">
                          {error}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://nowyerevan.am/thanks" />
                <input type="hidden" name="_template" value="table" />

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3 md:py-4 text-sm md:text-base font-bold flex items-center justify-center transition-all duration-300 transform hover:scale-105 rounded-md"
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
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-brand-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-black mb-2 text-sm md:text-base group-hover:text-brand-orange transition-colors">
                      {t("phone")}
                    </h3>
                    <div className="text-gray-600 group-hover:text-brand-orange transition-colors text-sm md:text-base">
                      {COMPANY_INFO.contact.phone}
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 md:p-6">
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-brand-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-black mb-2 text-sm md:text-base group-hover:text-brand-orange transition-colors">
                      {t("email")}
                    </h3>
                    <div className="text-gray-600 group-hover:text-brand-orange transition-colors text-sm md:text-base break-all">
                      {COMPANY_INFO.contact.email}
                    </div>
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
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-brand-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-black mb-2 text-sm md:text-base group-hover:text-brand-orange transition-colors">
                      {t("address")}
                    </h3>
                    <div className="text-gray-600 group-hover:text-brand-orange transition-colors text-sm md:text-base">
                      {addressInfo.city}
                    </div>
                    <div className="text-gray-600 group-hover:text-brand-orange transition-colors text-sm md:text-base">
                      {addressInfo.street}
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-brand-orange" />
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
