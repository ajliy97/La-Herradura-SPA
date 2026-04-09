import { Navbar } from "@/components/navbar";
import ButtonHome from "@/components/ui/button-home";


export default function Objects() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <ButtonHome/>
                {/* BANNER OJETOS PROHIBIDOS */}
                <div className="w-full bg-gradient-to-bl from-blue-900 to-white text-white">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img
                                src="/images/restriction.png"
                                alt="Restricciones de Envío"
                                className="icons-sections"
                            />
                        </div>
                        <div className="md:w-1/2 flex flex-col md:items-start text-center md:pt-12 pb-4 md:pb-12">
                            <h1 className="text-2xl lg:text-5xl">
                                Objetos Prohibidos
                            </h1>
                            <p className="text-base text-gray-100">Lista de Objetos Prohibidos</p>
                        </div>
                    </div>
                </div>
                {/*Lista de objetos prohibidos */}
                <div className="flex flex-col md:flex-row items-center pt-6 md:pt-10 pb-6 pl-2 pr-2 lg:pl-16 lg:pr-12">
                    <div className="md:w-1/3 flex flex-col items-center">
                        <ul className="list-disc">
                            <li>Maquillaje de todo tipo.</li>
                            <li>Perfumes, lociones para después del afeitar.</li>
                            <li>Todo producto en Spray, aerosoles.</li>
                            <li>Sustancias inflamables, hielo seco, sustancias biológicas.</li>
                            <li>Teléfonos de alta gama.</li>
                            <li>Betún, tintas, silicona.</li>
                            <li>Pintura de uñas y acetona.</li>
                            <li>Equipamiento militar.</li>
                            <li>Armas de aire y de fuego (imitaciones).</li>
                            <li>Alcohol y productos que lo contengan, sustancias inflamables,
                                hielo seco, sustancias biológicas, pinturas.</li>
                            <li>Todos los dispositivos Samsung Galaxy Note7 y Samsung Note7.</li>
                            <li>Productos animales y pieles de animales.</li>
                            <li>Restos humanos, incluidas cenizas.</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-center">
                        <ul className="list-disc">
                            <li>Piezas de automóviles usados.</li>
                            <li>Tinturas para cabellos.</li>
                            <li>Antigüedades y obras de arte.</li>
                            <li>Lingotes (de cualquier metal precioso).</li>
                            <li>Efectivo, tarjetas de crédito y débitos, y cheques.</li>
                            <li>Instrumentos negociables tipo efectivo.</li>
                            <li>Municiones, explosivos y dispositivos explosivos.</li>
                            <li>Cigarrillos electrónicos.</li>
                            <li>Dispositivo de juego (incluido el naipe).</li>
                            <li>Trofeos de caza (de animales), partes de animales como marfil y 
                                aleta de tiburón, restos o cenizas de animales, subproductos animales.</li>
                            <li>Mercancías ilegales (falsificaciones, estupefacientes).</li>
                            <li>Computadoras portátiles.</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-center">
                        <ul className="list-disc">
                            <li>Animales vivos (incluidos, entre otros, mamíferos, reptiles, peces, invertebrados,
                                anfibios, aves, insectos, larvas y pupas).</li>
                            
                            <li>Bienes ilegales, como productos falsificados y narcóticos.</li>
                            <li>Joyas, bisutería, relojes y objetos construidos con metales preciosos y / o piedras.</li>
                            
                            <li>Baterías de litio: todas las baterías de metal de litio.</li>
                            <li>Baterías de litio: baterías de iones de litio sueltas. Estos incluyen 
                                bancos de energía, cargadores USB, etc.</li>
                            <li>Perecederos (fruta / flor / verdura). Productos vegetales y Plantas.</li>
                            <li>Pornografía (ya sea en formato impreso, cinematográfico o digital).</li>
                            <li>Tabaco, productos de tabaco en hojas sueltas y cigarrillos pre laminados.</li>
                            
                        </ul>
                    </div>
                </div>

                {/*Banner de Medicamentos Prohibidos*/}
                <div className="w-full bg-gradient-to-bl from-white to-blue-900 text-white">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex flex-col items-center">
                                <img
                                    src="/images/meds.png"
                                    alt="Medicamentos Prohibidos"
                                    className="icons-sections"
                                />
                        </div>
                        <div className="md:w-1/2 flex flex-col md:items-start md:pt-12 pb-4 md:pb-12">
                            <h1 className="text-2xl lg:text-5xl">
                                Medicamentos Prohibidos
                            </h1>
                            <p className="text-base text-gray-200">Lista de Medicamentos Prohibidos</p>
                        </div>
                    </div>
                </div>
                {/* Lista de medicamentos prohibidos con flujo automático de columnas */}
                <div className="meds bg-blue-900 text-white pt-6 md:pt-10 pb-6 px-8 md:px-24">
                    <div className="container mx-auto flex justify-center">
                        {/* columns-2: Crea 2 columnas automáticas en móvil
                        md:columns-3: Crea 3 columnas automáticas en escritorio
                        gap-x-12: Espacio horizontal entre columnas
                        */}
                        <ul className="list-disc columns-2 md:columns-3 gap-x-12 md:gap-24 lg:gap-36 pl-5 max-w-fit mx-auto text-left">
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