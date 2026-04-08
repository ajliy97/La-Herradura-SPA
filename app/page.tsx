import CardServices from "@/components/card";
import { HeroCarousel } from "@/components/hero-carousel";
import ButtonHome from "@/components/ui/button-home";
import Track from "@/components/track";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1"> {/*flex-1 hace que toda info se apile una sobre otra*/}
        <HeroCarousel />
      
        {/*Proceso de Envío, py- margen superior vers movil y md:py- vers comp, pb- margen inferior vers movil y md:pb-*/}
        <section className="w-full pt-8 pb-6 md:pt-12 md:pb-8 bg-gray-200">
          <div className="container px-4 md:px-6 mx-auto">
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

      {/* Contacto + Footer*/}
      <div id="contacto" className="footer row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/*md:pb- margen del fondo*/}
        <div className="container px-12 py-6 md:px-12 md:py-12 md:pb-0 mx-auto pt-12">
          {/* space-y margen entre cont vers movil y space-x margen dentro del recuadro. md:space-y margen de arriba vers comp md:space-x margen entre comp  */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-14 space-x-10 md:space-y-10 md:space-x-46">
            {/*Cont a la izq*/}
            <div className="md:w-1/2 flex flex-col p-8 bg-gradient-to-r bg-blue-900 space-y-0 ml-12 md:ml-36">
              <div className="flex items-center space-x-6 ">
                <img
                src="/images/mail.png"
                className="w-11 h-11"
                />
                <h1 className="text-2xl text-left font-semi-bold lg:text-3xl text-white"> Contáctanos </h1>
                </div>
                {/*mt- margen arriba*/}
                <h2 className="mt-6 text-white"> ¡Haz tu envío sin complicaciones! <br/>
                Conéctate al chat desde esta página y deja que nuestros expertos se encarguen de todo. <br/><br/>
                Te guiaremos paso a paso para que tu encomienda llegue rápida y segura a su destino. ¡Estamos listos para atenderte de inmediato!</h2>
            </div>

            {/*Cont a la drcha*/}
            <div className="flex flex-col space-y-5">
              <a href="https://wa.me/+56935242664" target="blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                <img src="/images/phone-call.png" className="w-7 h-7" alt="Phone + Whatsapp icon" />
                <span>+56 9 3524 2664</span>
              </a>
              <a href="mailto:laherraduraspa@gmail.com" target="blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                <img src="/images/mail-1.png" className="w-7 h-7" alt="Mail icon" />
                <span>laherraduraspa@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/laherradura_spa/" target="blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                <img src="/images/instagram.png" className="w-7 h-7" alt="Instagram icon" />
                <span>@laherradura_spa</span>
              </a>
              <a href="https://www.facebook.com/people/Envios-La-Herradura-Spa/61569835259970/#" target="blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                <img src="/images/facebook.png" className="w-7 h-7" alt="Facebook icon" />
                <span>Envios La Herradura Spa </span>
              </a>
              <a href="https://www.tiktok.com/@herradura_spa" target="blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                <img src="/images/tik-tok.png" className="w-7 h-7" alt="Tik Tok icon" />
                <span>@herradura_spa</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
