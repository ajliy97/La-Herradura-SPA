import CardServices from "@/components/card";
import { HeroCarousel } from "@/components/hero-carousel";
import ButtonHome from "@/components/ui/button-home";
import Track from "@/components/track";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1"> {/*flex-1 hace que toda info se apile una sobre otra*/}
        <HeroCarousel />
      
        {/*Proceso de Envío, py- margen superior vers movil y md:py- vers comp, pb- margen inferior vers movil y md:pb-*/}
        <section className="w-full pt-6 pb-6 md:pt-12 md:pb-8 bg-gray-200">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2 text-center mb-0">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proceso de Envío</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg px-6">
                Te acompañamos en cada etapa del envío, con un servicio seguro y eficiente hasta la entrega en Cuba.
              </p>
              < CardServices />
            </div>
            </div>
        </section>

      {/* Botón de scroll al inicio */}
      <ButtonHome />
        <Track/>
      </main>

      {/* Sección Contacto*/}
      <div id="contacto" className="footer row-start-3 flex gap-[24px] flex-wrap ">
        <div className="mx-auto pt-6 md:pt-14">
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-12 md:space-x-20 lg:space-x-120">
            
            {/* Sección Izquierda: Contactanos + Texto */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
              <div className="flex items-center space-x-3">
                <img
                src="/images/mail.png"
                className="w-8 h-8"
                alt="Mail icon"
                />
                <h1 className="text-2xl font-semibold lg:text-3xl text-white"> Contáctanos </h1>
              </div>
              <h2 className="md:mt-6 p-4 md:p-0 text-white"> ¡Haz tu envío sin complicaciones! <br/>
                Te guiaremos paso a paso para que tu encomienda llegue rápida y segura a su destino. 
                ¡Estamos listos para atenderte de inmediato!
              </h2>
            </div>

            {/* Sección Derecha: Info y Redes */}
            <div className="flex flex-col items-center md:items-start md:space-y-5 space-y-3">
              <h3 className="text-xl font-bold text-white mb-2">Contacto</h3>
              
              <a href="https://wa.me/+56935242664" target="blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                <Phone className="w-5 h-5 text-red-600 shrink-0"/>
                <span className="track-text">+56 9 3524 2664</span>
              </a>
              
              <a href="mailto:laherraduraspa@gmail.com" target="blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                <Mail className="w-5 h-5 text-red-600 shrink-0"/>
                <span className="track-text">laherraduraspa@gmail.com</span>
              </a>

              {/* Iconos Redes Sociales en Horizontal */}
              <div className="flex items-center space-x-6 pt-2 pb-6">
                <a href="https://www.instagram.com/laherradura_spa/" target="blank" rel="noopener noreferrer">
                  <img src="/images/instagram.png" className="w-7 h-7" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/people/Envios-La-Herradura-Spa/61569835259970/#" target="blank" rel="noopener noreferrer">
                  <img src="/images/facebook.png" className="w-7 h-7" alt="Facebook" />
                </a>
                <a href="https://www.tiktok.com/@herradura_spa" target="blank" rel="noopener noreferrer">
                  <img src="/images/tik-tok.png" className="w-7 h-7" alt="TikTok" />
                </a>
              </div>
            </div>
          </div>

          {/* Línea divisoria gris claro */}
          <div className="w-full border-t border-gray-400/30"></div>
        </div>
      </div>
    </div>
  )
}
