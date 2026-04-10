import TablePage from "@/components/price";
import ButtonHome from "@/components/ui/button-home";

export default function PricePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <ButtonHome />

                {/* Banner */}
                <div className="w-full bg-gradient-to-b from-blue-900 to-blue-950 text-white">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img
                                src="/images/price.png"
                                alt="Precios de Envíos"
                                className="icons-sections"
                            />
                        </div>
                        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-6 pb-6 md:pb-12 md:pt-12">
                            <h1 className="text-2xl lg:text-5xl font-bold leading-tight">
                                Costos Referenciales
                            </h1>
                            <p className="text-base text-gray-300">
                                El costo se estima por peso real o volumétrico.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tabla de Precios */}
                <TablePage />
            </main>
        </div>
    )
}