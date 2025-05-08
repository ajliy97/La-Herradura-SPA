"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"  //Flechas de dirección del slide
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Paquetería General",
    description: "Envía ropa, calzado, electrónicos y más a tus seres queridos en Cuba con entrega garantizada.",
    image: "/images/1171.jpg?height=400&width=600",
    color: "from-blue-200 to-blue-350",
  },
  {
    id: 2,
    title: "Envío de Medicinas",
    description: "Medicamentos y suministros médicos con manejo especializado y entrega prioritaria.",
    image: "/images/3536.jpg?height=400&width=600",
    color: "from-green-250 to-green-400",
  },
  {
    id: 3,
    title: "Envíos Rápidos y Seguros",
    description: "Servicio de entrega de paquetería rápido hasta la puerta de tu casa.",
    image: "/images/moving-day-helpers.png?height=400&width=600",
    color: "from-red-300 to-red-350",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full overflow-hidden"> {/*overflow-hidden navegacion horizontal*/}
      {/* Slides */}                                          {/*md:-h modifica el alto del Carousel*/}
      <div                                                 
        className="flex transition-transform duration-800 ease-in-out h-[300px] md:h-[600px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-80 z-10`}></div>
            <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
              <p className="max-w-md text-sm md:text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors",
              currentSlide === index ? "bg-white" : "bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

