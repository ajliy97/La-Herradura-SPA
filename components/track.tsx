"use client"

import { FormEvent, useState } from "react";

const trackingSites = [
    {
        id: "copa",
        name: "Copacourier",
        icon: "/images/copa-logo.png",
        url: "https://www.copacourier.com/?track=",
    },
    {
        id: "correos",
        name: "Correos de Cuba",
        icon: "/images/correocuba-logo.png",
        url: "https://www.correos.cu/rastreador-de-envios/?codigo=",
    },
    {
        id: "aerovaradero",
        name: "Aerovaradero",
        icon: "/images/aerovaradero-logo.png",
        url: "https://www.aerovaradero.com.cu/tracking/?tracking=",
    },
    {
        id: "dhl",
        name: "DHL",
        icon: "/images/dhl-logo.png",
        url: "https://www.dhl.com/cl-es/home/rastreo.html?AWB=",
    },
];

export default function Track() {
    const [code, setCode] = useState("");
    const [selected, setSelected] = useState(trackingSites[0].id);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedCode = code.trim();
        if (!trimmedCode) {
            return;
        }

        const site = trackingSites.find((item) => item.id === selected) ?? trackingSites[0];
        const destination = `${site.url}${encodeURIComponent(trimmedCode)}`;
        window.location.href = destination;
    };

    return (
        <section id="tracking" className="md:py-12 py-10 mb-6 md:mb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-900 rounded-[3rem] overflow-hidden p-8.5 md:p-12 flex flex-col gap-2 text-white">
                    
                    {/* Fila Superior: Texto e Imagen */}
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-4">
                            <p className="md:text-sm text-xs uppercase tracking-[0.3em] text-blue-200">Rastreo de envío</p>
                            <h2 className="text-2xl md:text-4xl font-bold leading-tight">¿Quieres saber dónde está tu carga?</h2>
                            <p className="text-blue-100 md:text-lg text-base opacity-80">
                                Introduce el número de guía en el campo de búsqueda y selecciona el sitio de rastreo. Presiona el botón de rastrear para ir directo al portal de seguimiento con tu código.
                            </p>
                            
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-4">
                                <input
                                    id="trackingCode"
                                    value={code}
                                    onChange={(event) => setCode(event.target.value)}
                                    placeholder="Ingresa el número de guía"
                                    className="w-full rounded-2xl border border-blue-300/50 bg-white/95 px-4 py-2 text-slate-900 outline-none transition focus:border-white focus:ring-4 focus:ring-blue-400/30"
                                />
                                <button 
                                    type="submit"
                                    className="w-full sm:w-1/3 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                                >
                                    Rastrear
                                </button>
                            </form>
                        </div>

                        <div className="flex-1 hidden lg:block">
                            <img src="/images/tracking.jpg" alt="Rastreo de envío" className="rounded-3xl shadow-2xl rotate-3" />
                        </div>
                    </div>

                    {/* Fila Inferior botones de botones */}
                    <div className="space-y-4">
                        <p className="text-sm text-blue-100/80 text-center lg:text-left">Selecciona el sitio de rastreo que corresponde a tu guía:</p>
                        <div className="grid w-fit mx-auto lg:mx-0 grid-cols-2 sm:grid-cols-4 gap-3">
                            {trackingSites.map((site) => (
                                <button
                                    key={site.id}
                                    type="button"
                                    onClick={() => setSelected(site.id)}
                                    className={`group relative h-9 w-34 md:h-12 md:w-32 flex items-center justify-center overflow-hidden rounded-xl border transition-all ${
                                        selected === site.id
                                            ? "border-white bg-white ring-2 ring-white/50"
                                            : "border-white/20 bg-white/70 hover:bg-white/90"
                                    }`}
                                >
                                    <img 
                                        src={site.icon} 
                                        alt={site.name} 
                                        className={`h-full w-full object-contain p-1 transition-transform duration-300 ${
                                            selected === site.id ? "scale-90" : "group-hover:scale-110"
                                        }`} 
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
