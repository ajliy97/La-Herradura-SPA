import CardServices from "@/components/card"
import { HeroCarousel } from "@/components/hero-carousel"
import ButtonHome from "@/components/ui/button-home"
import Track from "@/components/track"
import { Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">

        <HeroCarousel />

        <section
          aria-labelledby="proceso-envio-heading"
          className="w-full pt-6 pb-6 md:pt-12 md:pb-8 bg-gray-200"
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <h2
                id="proceso-envio-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl"
              >
                Proceso de Envío
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg px-6">
                Te acompañamos en cada etapa del envío, con un servicio seguro y eficiente hasta la entrega en Cuba.
              </p>
              <CardServices />
            </div>
          </div>
        </section>

        <ButtonHome />
        <Track />
      </main>

      <footer id="contacto" aria-label="Sección de contacto" className="footer">
        <div className="mx-auto px-6 pt-8 md:pt-14 pb-6 w-full max-w-screen-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 lg:gap-84">

            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
              <div className="flex items-center gap-3 mb-3">
                <img src="/images/mail.png" className="w-8 h-8" alt="" aria-hidden="true" />
                <h2 className="text-2xl font-semibold lg:text-3xl text-white">Contáctanos</h2>
              </div>
              <p className="text-white text-sm sm:text-base leading-relaxed px-2 md:px-0">
                ¡Haz tu envío sin complicaciones! Te guiaremos paso a paso para que tu
                encomienda llegue rápida y segura a su destino. ¡Estamos listos para atenderte de inmediato!
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="text-xl font-bold text-white mb-1">Contacto</h3>

              <a
                href="https://wa.me/+56935242664"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-red-400 transition-colors duration-150"
              >
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span className="track-text">+56 9 3524 2664</span>
              </a>

              <a
                href="mailto:laherraduraspa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-red-400 transition-colors duration-150"
              >
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span className="track-text">laherraduraspa@gmail.com</span>
              </a>

              <div className="flex items-center gap-5 pt-2 pb-4">
                <a href="https://www.instagram.com/laherradura_spa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75 transition-opacity duration-150">
                  <img src="/images/instagram.png" className="w-7 h-7" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/people/Envios-La-Herradura-Spa/61569835259970/#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75 transition-opacity duration-150">
                  <img src="/images/facebook.png" className="w-7 h-7" alt="Facebook" />
                </a>
                <a href="https://www.tiktok.com/@herradura_spa" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-75 transition-opacity duration-150">
                  <img src="/images/tik-tok.png" className="w-7 h-7" alt="TikTok" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-400/30 mt-8" />
        </div>
      </footer>
    </div>
  )
}