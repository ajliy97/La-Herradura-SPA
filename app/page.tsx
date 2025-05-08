import CardServices from "@/components/card";
import { HeroCarousel } from "@/components/hero-carousel";
import { Navbar } from "@/components/navbar";
import ButtonHome from "@/components/ui/button-home";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1"> {/*flex-1 hace que toda info se apile una sobre otra*/}
        <HeroCarousel />
      
        {/*Proceso de Envío, py- margen del inicio vers movil y md:py- vers comp, pb- margen inferior vers movil y md:pb-*/}
        <section className="w-full py-10 pb-0 md:py-16 md:pb-2 bg-gray-200">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-9 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proceso de Envío</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Ofrecemos una variedad de servicios para satisfacer todas tus necesidades de envío a Cuba.
              </p>
              < CardServices />
            </div>
            </div>
        </section>

      {/* Botón de scroll al inicio */}
      <ButtonHome />

        {/* py- margen del inicio vers movil y md:py- vers comp, pb- margen inferior vers movil y md:pb-*/}
        {/* Páginas de Rastreo, margen del fondo del section mb-, md:py- margen superior vers comp y movil py*/}
        <section className="w-full py-0 md:py-18 md:px-16 md:pb-4  bg-white mb-12">

          {/*pt-6 ajustar el margen cont y inicio del container*/}
          <div className="container px-4 md:px-6 mx-auto pt-6">
            {/* space-y- espacio entre info a la izq y drcha en vers movil*/}
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
              {/*Info a la izq*/}
              <div className="md:w-1/2 flex flex-col items-center space-x-16 space-y-20">
                <img
                src="/images/route.png"
                alt="Ruta"
                className="w-38 max-w-md "
                />
                <h1 className="text-3xl font-semi-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl text-black">
                Rastrea tú Envio
                </h1>
              </div>
              
              {/*Info a la Drcha, space-x espaciado entre elmts space-y margen */}
              <div className="md:w-1/2 flex flex-col items-center space-y-12">
                {/*Titulo centrado arriba*/}
                <h2 className="text-black md:text-xl text-1x1 font-medium text-center">
                Utilizamos agencias de carga para la gestión de los envíos. Le solicitamos revisar el código recibido por correo electrónico y seleccionar la agencia de carga correspondiente.
                </h2>

                {/* Línea horizontal dentro del contenedor derecho */}
                <hr className="w-75 border-t-2 border-red-900 my-6" />

                 {/* Contenedor de imágenes, vertical en mobile, horizontal en md+ */}
                <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
                  <a href="https://www.copacourier.com/ " target="blank" rel="noopener noreferrer">
                    <img 
                    src="/images/copa-logo.png"
                    alt="Página de rastreo de copa"
                    className="w-48 h-8 md:w-86 md:h-9 transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                    />
                  </a>
                  <a href="https://www.correos.cu/rastreador-de-envios/" target="blank" rel="noopener noreferrer">
                    <img
                    src="/images/correocuba-logo.png"
                    alt="Página de rastreo de Correos de Cuba"
                    className="w-50 h-10 md:w-90 md:h-14 transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                    />
                  </a>
                  <a href="https://www.aerovaradero.com.cu/tracking/" target="blank" rel="noopener noreferrer">
                    <img
                    src="/images/aerovaradero-logo.jpg"
                    alt="Página de rastreo de Aero Varadero"
                    className="w-50 h-9 md:w-78 md:h-10 transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                    />
                  </a>
                  <a href="https://www.dhl.com/cl-es/home/rastreo.html" target="blank" rel="noopener noreferrer">
                    <img
                    src="/images/dhl-logo.png"
                    alt="Página de rastreo de Aero Varadero"
                    className="w-48 h-9 md:w-74 md:h-10 transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>
        
      </main>

      {/* Contacto */}
      <div id="contacto" className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-blue-800">
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
