import { Navbar } from "@/components/navbar";
import TablePage from "@/components/price";
import ButtonHome from "@/components/ui/button-home";
import { Table } from "lucide-react";


export default function PricePage() {
    return (
        <div className="flex flex-col"> {/*flex min-h-screen ocupa todo el alto de la pantalla*/}
            <main className="flex-1">
                <ButtonHome />
                <div className="w-full bg-gradient-to-b from-blue-900 to to-blue-950 md:items-start text-white">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img
                                src="/images/price.png"
                                alt="Precios de Envios"
                                className="icons-sections"
                            />
                        </div>
                    
                        <div className="md:w-1/2 flex flex-col md:items-start text-center md:pb-12 md:pt-12 pb-4">
                            <h1 className="text-2xl lg:text-5xl">
                                Costos Referenciales
                                </h1>
                                <p className="text-base text-gray-300">Se estima por peso real o volumétrico.</p>
                        </div>
                    </div>
                </div>
                {/* Tabla de Precios*/}
                <TablePage/>
                
            </main>
        </div>
    )
}