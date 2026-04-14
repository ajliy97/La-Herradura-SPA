import ButtonHome from "@/components/ui/button-home";

const mvv = [
    {
        id: "mision",
        icon: "/images/mision.png",
        alt: "Misión de La Herradura SPA",
        title: "Misión",
        content: (
        <p className="about-desc-text">
            Ofrecer un servicio de envío rápido, seguro y confiable desde Chile hacia Cuba,
            conectando personas y garantizando la satisfacción del cliente.
        </p>
        ),
    },
    {
        id: "vision",
        icon: "/images/vision.png",
        alt: "Visión de La Herradura SPA",
        title: "Visión",
        content: (
        <p className="about-desc-text">
            Ser la empresa líder en envíos Chile–Cuba, destacando por innovación,
            calidad y compromiso con nuestros clientes.
        </p>
        ),
    },
    {
        id: "valores",
        icon: "/images/value.png",
        alt: "Valores de La Herradura SPA",
        title: "Valores",
        content: (
        <ul className="space-y-1">
            {[
            { label: "Compromiso", desc: "Entregas puntuales y responsables." },
            { label: "Transparencia", desc: "Comunicación clara en cada envío." },
            { label: "Calidad", desc: "Atención personalizada y eficiente." },
            { label: "Empatía", desc: "Tratamos cada paquete con cuidado y respeto." },
            ].map(({ label, desc }) => (
            <li key={label} className="about-desc-text">
                <strong>{label}:</strong> {desc}
            </li>
            ))}
        </ul>
        ),
    },
    ];

    function MVVCard({
    icon,
    alt,
    title,
    content,
    showDivider,
    }: {
    icon: string
    alt: string
    title: string
    content: React.ReactNode
    showDivider: boolean
    }) {
    return (
        <>
        <div className="md:w-1/3 flex flex-col items-center pb-8 px-4">
            <img src={icon} alt={alt} className="about-icons" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h2>
            <div className="text-center">{content}</div>
        </div>
        {showDivider && (
            <hr className="w-55 border-t-2 border-red-300 border-dashed my-6 mb-10 md:hidden" />
        )}
        </>
    )
    }

    export default function About() {
    return (
        <div className="flex flex-col">
        <main className="flex-1">
            <ButtonHome />

            {/* Quiénes Somos */}
            <section
            aria-labelledby="about-heading"
            className="container px-4 md:px-14 lg:px-58 mx-auto pt-6 md:pt-10 lg:pt-14 pb-10"
            >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-6">
                {/* Texto */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start">
                <h1
                    id="about-heading"
                    className="text-2xl lg:text-4xl font-semibold tracking-tight text-black mb-4"
                >
                    ¿Quiénes Somos?
                </h1>
                <p className="text-base lg:text-xl text-gray-500 font-medium px-6 md:px-0 text-center md:text-left leading-relaxed">
                    Somos una empresa nueva especializada en envíos courier desde Chile hacia Cuba,
                    comprometida con ofrecer un servicio rápido, seguro y accesible. Nuestro equipo
                    combina experiencia en logística y atención personalizada para garantizar que cada
                    paquete llegue a su destino sin contratiempos. En La Herradura SPA, conectamos
                    personas y negocios con confianza, eficiencia y cercanía.
                </p>
                </div>

                {/* Imagen */}
                <div className="md:w-1/2 flex justify-center">
                <img
                    src="/images/LHS About-Photoroom.png"
                    alt="La Herradura SPA"
                    className="w-64 md:w-full max-w-sm object-contain"
                />
                </div>
            </div>
            </section>

            {/* Misión, Visión y Valores */}
            <section
            aria-label="Misión, Visión y Valores"
            className="w-full px-6 md:px-8 lg:px-24 bg-blue-900 pt-14 pb-10"
            >
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center text-white md:gap-x-8 lg:gap-x-12">
                {mvv.map((item, index) => (
                <MVVCard
                    key={item.id}
                    icon={item.icon}
                    alt={item.alt}
                    title={item.title}
                    content={item.content}
                    showDivider={index < mvv.length - 1}
                />
                ))}
            </div>
            </section>
        </main>
        </div>
    )
    }