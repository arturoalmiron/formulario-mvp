"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Rocket, User, Lightbulb, Mail, Phone, Building2 } from "lucide-react"

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectName: "",
    projectDescription: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "El nombre completo es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formData.projectName.trim()) {
      newErrors.projectName = "El nombre del proyecto es requerido"
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "La descripción del proyecto es requerida"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Handle form submission here
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Formulario de Desarrollo MVP</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completa la información para crear tu aplicación perfecta. Nos ayudará a entender mejor tu visión y
            necesidades.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Client Information Section */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">Información del Cliente</CardTitle>
                  <CardDescription className="text-gray-600">Datos de contacto y información personal</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Nombre Completo
                    <Badge variant="destructive" className="ml-2 text-xs">
                      Requerido
                    </Badge>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Ingresa tu nombre completo"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className={`pl-10 h-12 ${errors.fullName ? "border-red-500" : ""}`}
                    />
                  </div>
                  {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                    <Badge variant="destructive" className="ml-2 text-xs">
                      Requerido
                    </Badge>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`pl-10 h-12 ${errors.email ? "border-red-500" : ""}`}
                    />
                  </div>
                  {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Teléfono
                    <Badge variant="secondary" className="ml-2 text-xs">
                      Opcional
                    </Badge>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Empresa/Organización
                    <Badge variant="secondary" className="ml-2 text-xs">
                      Opcional
                    </Badge>
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="company"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Information Section */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">Información del Proyecto</CardTitle>
                  <CardDescription className="text-gray-600">
                    Detalles sobre tu idea y visión del proyecto
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="projectName" className="text-sm font-medium text-gray-700">
                  Nombre del Proyecto
                  <Badge variant="destructive" className="ml-2 text-xs">
                    Requerido
                  </Badge>
                </Label>
                <Input
                  id="projectName"
                  type="text"
                  placeholder="¿Cómo se llamará tu proyecto?"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange("projectName", e.target.value)}
                  className={`h-12 ${errors.projectName ? "border-red-500" : ""}`}
                />
                {errors.projectName && <p className="text-sm text-red-600">{errors.projectName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDescription" className="text-sm font-medium text-gray-700">
                  Descripción del Proyecto
                  <Badge variant="destructive" className="ml-2 text-xs">
                    Requerido
                  </Badge>
                </Label>
                <Textarea
                  id="projectDescription"
                  placeholder="Describe tu idea, qué problema resuelve, y cómo funcionará tu aplicación. Sé lo más detallado posible para ayudarnos a entender tu visión."
                  value={formData.projectDescription}
                  onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                  className={`min-h-[120px] resize-none ${errors.projectDescription ? "border-red-500" : ""}`}
                />
                <div className="flex justify-between items-center">
                  {errors.projectDescription && <p className="text-sm text-red-600">{errors.projectDescription}</p>}
                  <p className="text-sm text-gray-500 ml-auto">{formData.projectDescription.length} caracteres</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              size="lg"
              className="px-12 py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Enviar Formulario
            </Button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            ¿Tienes preguntas? Contáctanos para obtener más información sobre el proceso de desarrollo.
          </p>
        </div>
      </div>
    </div>
  )
}
