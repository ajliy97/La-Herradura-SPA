"use client"
import ButtonHome from "@/components/ui/button-home"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        id: 1,
        question: "¿Cuál es el tiempo estimado de envío?",
        answer: "A la Habana tarda de 15 a 20 días.\nA las demás provincias de 20 a 30 días.",
    },
    {
        id: 2,
        question: "¿Cómo hago llegar mi encomienda si soy de otra región?",
        answer: "Por cualquier agencia de mensajería o paquetería nacional.",
    },
    {
        id: 3,
        question: "¿Cuándo debo de llenar la planilla?",
        answer: "Puede descargar la planilla y llenarla antes de llegar a la oficina, o en la misma oficina.",
    },
    {
        id: 4,
        question: "¿Cuál es el peso máximo que puedo enviar por bulto/caja?",
        answer: "El peso máximo es de 25 kg.",
    },
    {
        id: 5,
        question: "¿Es necesario que lleve mi paquete embalado?",
        answer: "No es necesario, nosotros nos encargamos de embalarlo correctamente.\nDe igual forma, tenemos la obligación de revisar el contenido de este.",
    },
    {
        id: 6,
        question: "¿Cómo puedo calcular el peso volumétrico de mi encomienda?",
        answer: "El peso volumétrico se calcula multiplicando el largo, ancho y alto de la caja en centímetros y dividiendo el resultado entre 5000.\nEjemplo: Largo: 50 cm, Ancho: 30 cm, Alto: 20 cm.\nPeso volumétrico = (50 × 30 × 20) / 5000 = 6 kg.",
    },
]

function FAQItem({
    item,
    isOpen,
    onToggle,
}: {
    item: (typeof faqs)[0]
    isOpen: boolean
    onToggle: () => void
}) {
    const answerId = `faq-answer-${item.id}`

    return (
        <div className="shadow-sm rounded-md overflow-hidden mb-2">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="faq-button w-full flex items-center justify-between gap-4 text-left"
            >
                <span className="textt">{item.question}</span>
                <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                />
            </button>

            <div
                id={answerId}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="p-4 text-left">
                    <p className="dialog whitespace-pre-line">{item.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default function QuestionPage() {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null)

    const handleToggle = (id: number) => {
        setOpenQuestion((prev) => (prev === id ? null : id))
    }

    return (
        <div className="flex flex-col">
            <div className="flex-1">
                <ButtonHome />
                <div className="w-full bg-gradient-to-b from-blue-900 to-blue-950 text-white">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img
                                src="/images/question.png"
                                alt="Preguntas Frecuentes"
                                className="icons-sections"
                            />
                        </div>
                        <div className="md:w-1/2 flex flex-col md:items-start text-center md:pb-12 md:pt-12 pb-4">
                            <h1 className="text-2xl lg:text-5xl font-bold leading-tight">Preguntas Frecuentes</h1>
                        </div>
                    </div>
                </div>

                <div className="containerfq">
                    {faqs.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            item={faq}
                            isOpen={openQuestion === faq.id}
                            onToggle={() => handleToggle(faq.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}