"use client"   
import ButtonHome from "@/components/ui/button-home"
import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function QuestionPage() {    
    const [openQuestion, setOpenQuestion] = useState<number | null>(null); // Estado para rastrear la pregunta abierta

    const handleToggleQuestion = (index: number) => {
        setOpenQuestion((prev) => (prev === index ? null : index)); // Alterna entre abrir/cerrar la pregunta
    };

    return (
        <div className="flex flex-col">
            <div className="flex-1">
                <ButtonHome/>
                <div className="w-full bg-blue-900">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 items-center">
                            <img
                                src="/images/question.png"
                                alt="Preguntas Frecuentes"
                                className="w-38 md:w-45 mx-auto pt-10 pb-10"
                            />
                        </div>

                        <div className="md:w-1/2 md:items-start">
                            <h1 className="md:text-5xl text-3xl text-white pb-8">
                                Preguntas Frecuentes
                            </h1>
                        </div>
                    </div>
                </div>
                
                {/*Preguntas Frecuentes*/}
                <div className="containerfq">
                    
                    {/*Pregunta 1*/}
                    <button
                        onClick={() => handleToggleQuestion(1)}
                        className="faq-button"
                    >
                        <span className="textt">¿Cuál es el tiempo estimado de envío?</span>
                        {openQuestion === 1 ? (
                            <ChevronDown className="w-5 h-5 ml-auto" /> // Flecha hacia abajo
                        ) : (
                            <ChevronRight className="w-5 h-5 ml-auto" /> // Flecha hacia la derecha
                        )}
                    </button>
                    {/*Respuesta 1*/}
                    {openQuestion === 1 && (
                        <div className="p-4 text-left">
                            <p className="dialog">
                                A la Habana tarda de 15 a 20 días.
                                <br/>
                                A las demás provincias de 20 a 30 días.
                                
                            </p>
                        </div>
                    )}

                    {/*Pregunta 2*/}
                    <button
                        onClick={() => handleToggleQuestion(2)}
                        className="faq-button"
                    >
                        <span className="textt ">¿Cómo hago llegar mi encomienda si soy de otra región?</span>                           
                        {openQuestion === 2 ? (        
                            <ChevronDown className="w-5 h-5 ml-auto" /> // Flecha hacia abajo
                        ) : (
                            <ChevronRight className="w-5 h-5 ml-auto" /> // Flecha hacia la derecha
                        )}
                    </button>
                    {/*Respuesta 2*/}
                    {openQuestion === 2 && (
                        <div className="p-4 text-left">
                            <p className="dialog">
                                Por cualquier agencia de mensajeria o paquetería nacional.                               
                            </p>
                        </div>
                    )}

                    {/*Pregunta 3*/}
                    <button
                        onClick={() => handleToggleQuestion(3)}
                        className="faq-button"
                    >
                        <span className="textt ">¿Cuándo debo de llenar la planilla?</span>                           
                        {openQuestion === 3 ? (        
                            <ChevronDown className="w-5 h-5 ml-auto" /> // Flecha hacia abajo
                        ) : (
                            <ChevronRight className="w-5 h-5 ml-auto" /> // Flecha hacia la derecha
                        )}
                    </button>
                    {/*Respuesta 3*/}
                    {openQuestion === 3 && (
                        <div className="p-4 text-left">
                            <p className="dialog">
                                Puede descargar la planilla y llenarla antes de llegar a la oficina, o en la misma oficina.                               
                            </p>
                        </div>
                    )}

                    {/*Pregunta 4*/}
                    <button
                        onClick={() => handleToggleQuestion(4)}
                        className="faq-button"
                    >
                        <span className="textt ">¿Cuál es el peso máximo que puedo enviar por bulto/caja?</span>                           
                        {openQuestion === 4 ? (        
                            <ChevronDown className="w-5 h-5 ml-auto" /> // Flecha hacia abajo
                        ) : (
                            <ChevronRight className="w-5 h-5 ml-auto" /> // Flecha hacia la derecha
                        )}
                    </button>
                    {/*Respuesta 4*/}
                    {openQuestion === 4 && (
                        <div className="p-4 text-left">
                            <p className="dialog">
                                El peso máximo es de 25 kg.                               
                            </p>
                        </div>
                    )}

                    {/*Pregunta 5*/}
                    <button
                        onClick={() => handleToggleQuestion(5)}
                        className="faq-button"
                    >
                        <span className="textt ">¿Es necesario que lleve mi paquete embalado?</span>                           
                        {openQuestion === 5 ? (        
                            <ChevronDown className="w-5 h-5 ml-auto" /> // Flecha hacia abajo
                        ) : (
                            <ChevronRight className="w-5 h-5 ml-auto" /> // Flecha hacia la derecha
                        )}
                    </button>
                    {/*Respuesta 5*/}
                    {openQuestion === 5 && (
                        <div className="p-4 text-left">
                            <p className="dialog">
                                No es necesario, nosotros nos encargamos de embalarlos correctamente.
                                <br/> 
                                De igual forma, tenemos la obligación de revisar el contenido de este.                               
                            </p>
                        </div>
                    )}

                    {/*Pregunta 6*/}
                    <button
                        onClick={() => handleToggleQuestion(6)}
                        className="faq-button"
                    >
                        <span className="textt ">¿Cómo puedo calcular el peso volumétrico de mi encomienda?</span>                           
                        {openQuestion === 6 ? (        
                            <ChevronDown className="w-5 h-5 ml-auto" /> // Flecha hacia abajo
                        ) : (
                            <ChevronRight className="w-5 h-5 ml-auto" /> // Flecha hacia la derecha
                        )}
                    </button>
                    {/*Respuesta 6*/}
                    {openQuestion === 6 && (
                        <div className="p-4 text-left">
                            <p className="dialog">
                                El peso volumétrico se calcula multiplicando el largo, ancho y alto de la caja en centímetros y dividiendo el resultado entre 5000. <br/>
                                Ejemplo: Largo: 50 cm, Ancho: 30 cm, Alto: 20 cm. <br/>
                                Peso volumétrico = (50 * 30 * 20) / 5000 = 60 kg.                               
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}