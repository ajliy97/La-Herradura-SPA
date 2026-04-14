"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Paquetería General",
    description: "Envía ropa, calzado, electrónicos y más a tus seres queridos en Cuba con entrega garantizada.",
    image: "/images/1171.jpg",
    color: "from-blue-200 to-blue-350",
  },
  {
    id: 2,
    title: "Envío de Medicinas",
    description: "Medicamentos y suministros médicos con manejo especializado y entrega prioritaria.",
    image: "/images/3536.jpg",
    color: "from-green-250 to-green-400",
  },
  {
    id: 3,
    title: "Envíos Rápidos y Seguros",
    description: "Servicio de entrega de paquetería rápido hasta la puerta de tu casa.",
    image: "/images/moving-day-helpers.png",
    color: "from-red-300 to-red-350",
  },
]

const AUTOPLAY_INTERVAL = 2000

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(next, AUTOPLAY_INTERVAL)
    return () => clearInterval(interval)
  }, [isPaused, next])

  return (
    <div
      className="relative w-full overflow-hidden h-[280px] sm:h-[400px] md:h-[520px] lg:h-[600px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carrusel"
      aria-label="Servicios de envío"
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-out will-change-transform"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative h-full"
            aria-hidden={currentSlide !== index}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${slides.length}: ${slide.title}`}
          >
            {/* Gradiente de fondo */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-80 z-10`} />

            {/* Imagen */}
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/55 z-10" />

            {/* Contenido */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-6 sm:px-12 md:px-24 gap-2 md:gap-4">
              <h2 className="title-carousel">{slide.title}</h2>
              <p className="description-carousel max-w-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-150"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-150"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
            aria-current={currentSlide === index}
            className={cn(
              "rounded-full transition-all duration-300",
              currentSlide === index
                ? "bg-white w-5 h-2.5"
                : "bg-white/50 hover:bg-white/75 w-2.5 h-2.5"
            )}
          />
        ))}
      </div>
    </div>
  )
}