import { Navbar } from "@/components/navbar";
import ButtonHome from "@/components/ui/button-home";


export default function Objects() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <ButtonHome/>
                <div className="w-full bg-gradient-to-bl  from-blue-900 to-white text-white">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img
                                src="/images/restriction.png"
                                alt="Restricciones de Envío"
                                className="w-38 md:w-45 pt-10 pb-10"
                            />
                        </div>
                        <div className="md:w-1/2 flex flex-col md:items-start text-center md:pb-12 md:pt-12 pb-10">
                            <h1 className="text-5xl">
                                Objetos Prohibidos
                            </h1>
                            <p className="text-xl">Lista de Objetos Prohibidos</p>
                        </div>
                    </div>
                </div>
                {/*Lista de objetos prohibidos, gap- espacio entre columnas*/}
                <div className="flex flex-col md:flex-row items-center pt-10 pl-16 pr-12 pb-4 gap-6 ">
                    <div className="md:w-1/3 flex flex-col items-center">
                        <ul className="list-disc text-base space-y-2">
                            <li>Maquillaje de todo tipo.</li>
                            <li>Perfumes, lociones para después del afeitar.</li>
                            <li>Todo producto en Spray, aerosoles.</li>
                            <li>Sustancias inflamables, hielo seco, sustancias biológicas.</li>
                            <li>Teléfonos de alta gama.</li>
                            <li>Betún, tintas, silicona.</li>
                            <li>Pintura de uñas y acetona.</li>
                            <li>Tinturas para cabellos.</li>
                            <li>Armas de aire y de fuego (imitaciones).</li>
                            <li>Alcohol y productos que lo contengan, sustancias inflamables,
                                hielo seco, sustancias biológicas, pinturas.</li>
                            <li>Todos los dispositivos Samsung Galaxy Note7 y Samsung Note7.</li>
                            <li>Productos animales y pieles de animales.</li>

                        </ul>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-center">
                        <ul className="list-disc text-base space-y-2">
                            <li>Antigüedades y obras de arte.</li>
                            <li>Lingotes (de cualquier metal precioso).</li>
                            <li>Efectivo, tarjetas de crédito y débitos, y cheques.</li>
                            <li>Instrumentos negociables tipo efectivo.</li>
                            <li>Municiones, explosivos y dispositivos explosivos.</li>
                            <li>Cigarrillos electrónicos.</li>
                            <li>Dispositivo de juego (incluido el naipe).</li>
                            <li>Restos humanos, incluidas cenizas.</li>
                            <li>Trofeos de caza (de animales), partes de animales como marfil y 
                                aleta de tiburón, restos o cenizas de animales, subproductos animales.</li>
                            <li>Mercancías ilegales (falsificaciones, estupefacientes).</li>
                            <li>Bienes ilegales, como productos falsificados y narcóticos.</li>
                            <li>Joyas, bisutería, relojes y objetos construidos con metales preciosos y / o piedras.</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-center">
                        <ul className="list-disc text-base space-y-2">
                            <li>Computadoras portátiles.</li>
                            <li>Baterías de litio: todas las baterías de metal de litio.</li>
                            <li>Baterías de litio: baterías de iones de litio sueltas. Estos incluyen 
                                bancos de energía, cargadores USB, etc.</li>
                            <li>Animales vivos (incluidos, entre otros, mamíferos, reptiles, peces, invertebrados,
                                anfibios, aves, insectos, larvas y pupas).</li>
                            <li>Equipamiento militar.</li>
                            <li>Perecederos (fruta / flor / verdura). Productos vegetales y Plantas.</li>
                            <li>Pornografía (ya sea en formato impreso, cinematográfico o digital).</li>
                            <li>Tabaco, productos de tabaco en hojas sueltas y cigarrillos pre laminados.</li>
                            <li>Piezas de automóviles usados.</li>
                        </ul>
                    </div>
                </div>

                {/*Banner Medicamentos Prohibidos*/}
                <div className="w-full bg-gradient-to-bl from-white to-blue-900 text-white">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex flex-col items-center">
                                <img
                                    src="/images/meds.png"
                                    alt="Medicamentos Prohibidos"
                                    className="w-38 md:w-45 pt-10 pb-10"
                                />
                        </div>
                        <div className="md:w-1/2 flex flex-col md:items-start text-center pb-6">
                            <h1 className="text-5xl">
                                Medicamentos Prohibidos
                            </h1>
                            <p className="text-xl">Lista de Medicamentos Prohibidos</p>
                        </div>
                    </div>
                </div>
                {/*Lista de medicamentos prohibidos version md 3 columnas*/}
                <div className="hidden md:flex flex-col md:flex-row justify-center bg-blue-900 text-white pt-6 pb-8 md:px-24">
                    <div className="md:w-1/3 flex flex-col items-center">
                        <ul className="list-disc md:text-lg text-sm space-y-1.5">
                            <li>Carbamazepina</li>
                            <li>Camilofina</li>
                            <li>Ketamina</li>
                            <li>Propofol</li>
                            <li>Papaverina</li>
                            <li>Imipramina</li>
                            <li>Procaina</li>
                            <li>Tetracaina</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-center">
                        <ul className="list-disc md:text-lg space-y-1.5">
                        <li>Clorpromacina</li>
                            <li>Trifluoperacina</li>
                            <li>Lidocaina</li>
                            <li>Levomepromacina</li>
                            <li>Principio activo de la planta “yague”</li>
                            <li>Principio activo de la planta “campana”</li>
                            <li>Trihexifenidilo</li>
                            <li>Hidrato de cloral</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-center">
                        <ul className="list-disc md:text-lg space-y-1.5">
                            
                            <li>Atropina</li>
                            <li>Flufenacina</li>
                            <li>Tioridacina</li>
                            <li>Mepivacaina</li>
                            <li>Desipramina</li>
                            <li>Tramadol</li>
                            <li>Homatropina</li>
                            <li>Amitriptilina</li>
                            
                        </ul>
                    </div>
                </div>

                {/*Lista de medicamentos prohibidos version movil 2 columnas*/}
                <div className="block md:hidden bg-blue-900 text-white pt-6 pb-6 px-12">
                    <div className="grid grid-cols-2 gap-4">
                        <ul className="list-disc text-sm space-y-1.5">
                            <li>Carbamazepina</li>
                            <li>Camilofina</li>
                            <li>Ketamina</li>
                            <li>Propofol</li>
                            <li>Papaverina</li>
                            <li>Imipramina</li>
                            <li>Procaina</li>
                            <li>Tetracaina</li>
                            <li>Clorpromacina</li>
                            <li>Trifluoperacina</li>
                            <li>Lidocaina</li>
                            <li>Levomepromacina</li>
                            <li>Principio activo de la planta “yague”</li>
                        </ul>

                        <ul className="list-disc text-sm space-y-1.5">
                            <li>Principio activo de la planta “campana”</li>
                            <li>Trihexifenidilo</li>
                            <li>Hidrato de cloral</li>
                            <li>Atropina</li>
                            <li>Flufenacina</li>
                            <li>Tioridacina</li>
                            <li>Mepivacaina</li>
                            <li>Desipramina</li>
                            <li>Tramadol</li>
                            <li>Homatropina</li>
                            <li>Amitriptilina</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}