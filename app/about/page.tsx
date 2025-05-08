import { Navbar } from "@/components/navbar";
import ButtonHome from "@/components/ui/button-home";

export default function About() {
    return (
        <div className="flex flex-col">
            <main className="flex-1">
                {/* Botón de scroll al inicio */}
                <ButtonHome />

                <div className="container px-4 md:px-58 mx-auto pt-14 pb-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-14 md:space-y-0 md:space-x-6">
                        {/*Info a la izq*/} 
                        <div className="md:w-1/2 flex flex-col items-center md:items-start">
                            <h1 className="text-2xl sg:text-3xl lg:text-4xl font-semi-bold tracking-tighter text-black text-clip mb-6">
                                ¿Quiénes Somos?
                            </h1>
                            <p className="text-2x1 md:text-xl  text-black font-medium text-clip px-12 md:px-0">
                                Somos una empresa nueva especializada en envíos courier desde Chile hacia Cuba, 
                                comprometida con ofrecer un servicio rápido, seguro y accesible. Nuestro equipo combina 
                                experiencia en logística y atención personalizada para garantizar que cada paquete llegue a su 
                                destino sin contratiempos. En La Herradura SPA, conectamos personas y negocios con confianza, eficiencia y cercanía.
                            </p>
                        </div>
                            {/*Info a la Drcha*/}
                            <div className="md:w-1/2 flex justify-center">
                                <img 
                                src="/images/LHS About-Photoroom.png" 
                                alt="La Herradura SPA" 
                                className="w-65 md:w-max"/>
                            </div>
                        </div> 
                </div>

                {/*Mision, Vision y Valores. px margenes horizontales izq y drcha*/}
                <div className="w-full px-20 md:px-38 mx-auto bg-blue-900 pt-14 pb-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center text-white md:gap-x-12">
                        {/*Mision*/}
                        <div className="md:w-1/3 flex flex-col items-center pb-8">
                            <img 
                                src="/images/mision.png"
                                alt="Misión de La Herradura SPA"
                                className="w-16 h-16 mb-2"
                                />
                                <h2 className="text-2xl md:text-3xl font-semi-bold mb-2">Misión</h2>
                                <p className="text-2x1 md:text-lg">
                                Ofrecer un servicio de envío rápido, seguro y confiable desde Chile hacia Cuba, 
                                conectando personas y garantizando la satisfacción del cliente.
                                </p>
                        </div>
                        <hr className="w-55 border-t-2 border-red-300 border-dashed my-6 mb-10 md:hidden"/>
                        {/*Vision*/}
                        <div className="md:w-1/3 flex flex-col items-center pb-8">
                        <img 
                                src="/images/vision.png"
                                alt="Visión de La Herradura SPA"
                                className="w-16 h-16 mb-2"
                                />
                                <h2 className="text-2xl md:text-3xl font-semi-bold mb-2">Visión</h2>
                                <p className="text-2x1 md:text-lg">
                                Ser la empresa líder en envíos Chile–Cuba, destacando por innovación,
                                calidad y compromiso con nuestros clientes.
                                </p>
                        </div>
                        <hr className="w-55 border-t-2 border-red-300 border-dashed my-6 mb-10 md:hidden"/>
                        {/*Valores*/}
                        <div className="md:w-1/3 flex flex-col items-center">
                        <img 
                                src="/images/value.png"
                                alt="Valores de La Herradura SPA"
                                className="w-16 h-16 mb-2"
                                />
                                <h2 className="text-2xl md:text-3xl font-semi-bold mb-2">Valores</h2>
                                <p className="text-sm md:text-base"><strong>Compromiso:</strong> Entregas puntuales y responsables.</p>
                                <p className="text-sm md:text-base"><strong>Transparencia:</strong> Comunicación clara en cada envío.</p>
                                <p className="text-sm md:text-base"><strong>Calidad:</strong> Atención personalizada y eficiente.</p>
                                <p className="text-sm md:text-base"><strong>Empatía:</strong> Tratamos cada paquete con cuidado y respeto.</p>
                                
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}