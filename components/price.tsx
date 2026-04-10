"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ITEMS_PER_PAGE = 10

export default function TablePage() {
    const [currentPage, setCurrentPage] = useState(1)

    const dataTable = [
        { weightrange: "Teléfono Móvil", price: 25, pricecuba: "410" },
        { weightrange: "Documento", price: 30, pricecuba: "50" },
        { weightrange: "0,50 a 1,00", price: 30, pricecuba: "50" },
        { weightrange: "1,01 a 1,50", price: 30, pricecuba: "50" },
        { weightrange: "1,51 a 2,00", price: 30, pricecuba: "50" },
        { weightrange: "2,01 a 2,50", price: 30, pricecuba: "50" },
        { weightrange: "2,51 a 3,00", price: 30, pricecuba: "50" },
        { weightrange: "3,01 a 3,50", price: 30, pricecuba: "72" },
        { weightrange: "3,51 a 4,00", price: 30, pricecuba: "72" },
        { weightrange: "4,01 a 4,50", price: 30, pricecuba: "144" },
        { weightrange: "4,51 a 5,00", price: 30, pricecuba: "144" },
        { weightrange: "5,01 a 5,50", price: 30, pricecuba: "216" },
        { weightrange: "5,51 a 6,00", price: 30, pricecuba: "216" },
        { weightrange: "6,01 a 6,50", price: 30, pricecuba: "288" },
        { weightrange: "6,51 a 7,00", price: 30, pricecuba: "288" },
        { weightrange: "7,01 a 7,50", price: 30, pricecuba: "360" },
        { weightrange: "7,51 a 8,00", price: 30, pricecuba: "360" },
        { weightrange: "8,01 a 8,50", price: 30, pricecuba: "432" },
        { weightrange: "8,51 a 9,00", price: 30, pricecuba: "432" },
        { weightrange: "9,01 a 9,50", price: 30, pricecuba: "504" },
        { weightrange: "9,51 a 10,00", price: 30, pricecuba: "504" },
        { weightrange: "10,01 a 11,00", price: 30, pricecuba: "576" },
        { weightrange: "11,01 a 12,00", price: 30, pricecuba: "648" },
        { weightrange: "12,01 a 13,00", price: 30, pricecuba: "720" },
        { weightrange: "13,01 a 14,00", price: 30, pricecuba: "792" },
        { weightrange: "14,01 a 15,00", price: 30, pricecuba: "864" },
        { weightrange: "15,01 a 16,00", price: 30, pricecuba: "936" },
        { weightrange: "16,01 a 17,00", price: 30, pricecuba: "1.008" },
        { weightrange: "17,01 a 18,00", price: 30, pricecuba: "1.080" },
        { weightrange: "18,01 a 19,00", price: 30, pricecuba: "1.152" },
        { weightrange: "19,01 a 20,00", price: 30, pricecuba: "1.224" },
        { weightrange: "20,01 a 21,00", price: 30, pricecuba: "1.350" },
        { weightrange: "21,01 a 22,00", price: 30, pricecuba: "1.425" },
        { weightrange: "22,01 a 23,00", price: 30, pricecuba: "1.500" },
        { weightrange: "23,01 a 24,00", price: 30, pricecuba: "1.575" },
        { weightrange: "24,01 a 25,00", price: 30, pricecuba: "1.650" },
    ]

    const totalPages = Math.ceil(dataTable.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentRows = dataTable.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page)
    }

    return (
        <section aria-label="Tabla de costos de envío" className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8">
            <p className="text-sm text-gray-500 mb-4 text-center">
                * Los precios en <strong>CLP</strong> corresponden a Pesos Chilenos. Los precios en <strong>CUP</strong> corresponden a Pesos Cubanos.
            </p>

            <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
                <table className="w-full min-w-[480px] table-auto border-collapse text-left text-sm sm:text-base">
                    <thead>
                        <tr className="bg-blue-900 text-white">
                            <th className="px-4 py-3 font-semibold tracking-wide border-b border-blue-800">
                                Rango de Peso (kg)
                            </th>
                            <th className="px-4 py-3 font-semibold tracking-wide text-center border-b border-blue-800">
                                Precio (CLP)
                            </th>
                            <th className="px-4 py-3 font-semibold tracking-wide text-center border-b border-blue-800">
                                A Pagar en Cuba (CUP)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((row, index) => (
                            <tr
                                key={startIndex + index}
                                className={`transition-colors duration-150 hover:bg-blue-50 ${(startIndex + index) % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    }`}
                            >
                                <td className="px-4 py-3 border-b border-gray-100 text-gray-700">
                                    {row.weightrange}
                                </td>
                                <td className="px-4 py-3 border-b border-gray-100 text-center font-medium text-gray-800">
                                    {(row.price * 1000).toLocaleString("es-CL")}
                                </td>
                                <td className="px-4 py-3 border-b border-gray-100 text-center font-medium text-gray-800">
                                    {row.pricecuba}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Paginado */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-5">
                <p className="text-sm text-gray-500">
                    Mostrando{" "}
                    <span className="font-medium text-gray-700">
                        {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, dataTable.length)}
                    </span>{" "}
                    de <span className="font-medium text-gray-700">{dataTable.length}</span> registros
                </p>

                <div className="flex items-center gap-1">
                    {/* Anterior */}
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Página anterior"
                        className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Números de página */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            aria-label={`Ir a página ${page}`}
                            aria-current={currentPage === page ? "page" : undefined}
                            className={`w-9 h-9 rounded-lg text-sm font-medium border transition-colors ${currentPage === page
                                    ? "bg-blue-900 text-white border-blue-900"
                                    : "border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-300"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Siguiente */}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        aria-label="Página siguiente"
                        className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
                Los precios son referenciales y pueden variar según el peso volumétrico del paquete.
            </p>
        </section>
    )
}