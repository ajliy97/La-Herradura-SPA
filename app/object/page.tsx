import ButtonHome from "@/components/ui/button-home";

const prohibitedObjects = {
    column1: [
        "Maquillaje de todo tipo.",
        "Perfumes, lociones para después del afeitar.",
        "Todo producto en spray o aerosol.",
        "Sustancias inflamables, hielo seco, sustancias biológicas.",
        "Teléfonos de alta gama.",
        "Betún, tintas, silicona.",
        "Pintura de uñas y acetona.",
        "Equipamiento militar.",
        "Armas de aire y de fuego (imitaciones).",
        "Alcohol y productos que lo contengan, pinturas.",
        "Todos los dispositivos Samsung Galaxy Note7.",
        "Productos animales y pieles de animales.",
        "Restos humanos, incluidas cenizas.",
    ],
    column2: [
        "Piezas de automóviles usados.",
        "Tinturas para cabellos.",
        "Antigüedades y obras de arte.",
        "Lingotes (de cualquier metal precioso).",
        "Efectivo, tarjetas de crédito y débito, y cheques.",
        "Instrumentos negociables tipo efectivo.",
        "Municiones, explosivos y dispositivos explosivos.",
        "Cigarrillos electrónicos.",
        "Dispositivos de juego (incluido el naipe).",
        "Trofeos de caza, partes de animales como marfil y aleta de tiburón, restos o cenizas de animales.",
        "Mercancías ilegales (falsificaciones, estupefacientes).",
        "Computadoras portátiles.",
    ],
    column3: [
        "Animales vivos (mamíferos, reptiles, peces, invertebrados, anfibios, aves, insectos, larvas y pupas).",
        "Bienes ilegales, como productos falsificados y narcóticos.",
        "Joyas, bisutería, relojes y objetos de metales preciosos y/o piedras.",
        "Baterías de metal de litio de todo tipo.",
        "Baterías de iones de litio sueltas: bancos de energía, cargadores USB, etc.",
        "Perecederos (fruta, flor, verdura), productos vegetales y plantas.",
        "Pornografía (impresa, cinematográfica o digital).",
        "Tabaco, productos de tabaco en hojas sueltas y cigarrillos prelaminados.",
    ],
};

const prohibitedMeds = [
    "Carbamazepina", "Camilofina", "Ketamina", "Propofol",
    "Papaverina", "Imipramina", "Procaína", "Tetracaína",
    "Clorpromacina", "Trifluoperacina", "Lidocaína", "Levomepromacina",
    "Principio activo de la planta \"yagué\"", "Principio activo de la planta \"campana\"",
    "Trihexifenidilo", "Hidrato de cloral", "Atropina", "Flufenacina",
    "Tioridacina", "Mepivacaína", "Desipramina", "Tramadol",
    "Homatropina", "Amitriptilina",
];

export default function Objects() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <ButtonHome />

                {/* Banner: Objetos Prohibidos */}
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
                            <h1 className="text-2xl lg:text-5xl font-bold leading-tight">Objetos Prohibidos</h1>
                            <p className="text-base text-gray-100">Lista de Objetos Prohibidos</p>
                        </div>
                    </div>
                </div>

                {/* Lista de objetos prohibidos */}
                <div className="flex flex-col md:flex-row items-start pt-6 md:pt-10 pb-6 pl-2 pr-2 lg:pl-16 lg:pr-12">
                    {[prohibitedObjects.column1, prohibitedObjects.column2, prohibitedObjects.column3].map(
                        (col, colIndex) => (
                            <div key={colIndex} className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
                                <ul className="list-disc" role="list" aria-label={`Objetos prohibidos columna ${colIndex + 1}`}>
                                    {col.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                </div>

                {/* Banner: Medicamentos Prohibidos */}
                <div className="w-full bg-gradient-to-bl from-white to-blue-900 text-white">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img
                                src="/images/meds.png"
                                alt="Medicamentos Prohibidos"
                                className="icons-sections"
                            />
                        </div>
                        <div className="md:w-1/2 flex flex-col md:items-start text-center md:pt-12 pb-4 md:pb-12">
                            <h2 className="text-2xl lg:text-5xl font-bold leading-tight">Medicamentos Prohibidos</h2>
                            <p className="text-base text-gray-300">Lista de Medicamentos Prohibidos</p>
                        </div>
                    </div>
                </div>

                {/* Lista de medicamentos prohibidos */}
                <div className="meds bg-blue-900 text-white pt-6 md:pt-10 pb-6 px-8 md:px-24">
                    <div className="container mx-auto flex justify-center">
                        <ul
                            className="list-disc columns-2 md:columns-3 gap-x-12 md:gap-24 lg:gap-36 pl-5 max-w-fit mx-auto text-left"
                            role="list"
                            aria-label="Medicamentos prohibidos"
                        >
                            {prohibitedMeds.map((med, i) => (
                                <li key={i}>{med}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}
