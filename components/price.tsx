"use client"

export default function TablePage() {
    //Datos de la tabla
    const dataTable = [
        { weightrange: "Telefóno Móvil", price: 25, pricecuba: "410"},
        { weightrange: "Documento", price: 30, pricecuba: "50"},
        { weightrange: "0,50 a 1,00", price: 30, pricecuba: "50"},
        { weightrange: "1,01 a 1,50", price: 30, pricecuba: "50"},
        { weightrange: "1,51 a 2,00", price: 30, pricecuba: "50"},
        { weightrange: "2,01 a 2,50", price: 30, pricecuba: "50"},
        { weightrange: "2,51 a 3,00", price: 30, pricecuba: "50"},
        { weightrange: "3,01 a 3,50", price: 30, pricecuba: "72"},
        { weightrange: "3,51 a 4,00", price: 30, pricecuba: "72"},
        { weightrange: "4,01 a 4,50", price: 30, pricecuba: "144"},
        { weightrange: "4,51 a 5,00", price: 30, pricecuba: "144"},
        { weightrange: "5,01 a 5,50", price: 30, pricecuba: "216"},
        { weightrange: "5,51 a 6,00", price: 30, pricecuba: "216"},
        { weightrange: "6,01 a 6,50", price: 30, pricecuba: "288"},
        { weightrange: "6,51 a 7,00", price: 30, pricecuba: "288"},
        { weightrange: "7,01 a 7,50", price: 30, pricecuba: "360"},
        { weightrange: "7,51 a 8,00", price: 30, pricecuba: "360"},
        { weightrange: "8,01 a 8,50", price: 30, pricecuba: "432"},
        { weightrange: "8,51 a 9,00", price: 30, pricecuba: "432"},
        { weightrange: "9,01 a 9,50", price: 30, pricecuba: "504"},
        { weightrange: "9,51 a 10,00", price: 30, pricecuba: "504"},
        { weightrange: "10,01 a 11,00", price: 30, pricecuba: "576"},
        { weightrange: "11,01 a 12,00", price: 30, pricecuba: "648"},
        { weightrange: "12,01 a 13,00", price: 30, pricecuba: "720"},
        { weightrange: "13,01 a 14,00", price: 30, pricecuba: "792"},
        { weightrange: "14,01 a 15,00", price: 30, pricecuba: "864"},
        { weightrange: "15,01 a 16,00", price: 30, pricecuba: "936"},
        { weightrange: "16,01 a 17,00", price: 30, pricecuba: "1008"},
        { weightrange: "17,01 a 18,00", price: 30, pricecuba: "1080"},
        { weightrange: "18,01 a 19,00", price: 30, pricecuba: "1152"},
        { weightrange: "19,01 a 20,00", price: 30, pricecuba: "1224"},
        { weightrange: "20,01 a 21,00", price: 30, pricecuba: "1350"},
        { weightrange: "21,01 a 22,00", price: 30, pricecuba: "1425"},
        { weightrange: "22,01 a 23,00", price: 30, pricecuba: "1500"},
        { weightrange: "23,01 a 24,00", price: 30, pricecuba: "1575"},
        { weightrange: "24,01 a 25,00", price: 30, pricecuba: "1650"},
    ];

    return (
        <div className="flex justify-center items-center">
            <div className="overflow-x-auto md:px-24 md:py-6 pb-6"> {/*overflow-x-auto permite scroll horizontal si el cont excede*/}
                <table className="table-auto border-collapse border border-gray-300 text-left">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 w-98 ">Rango de Peso en kg</th>
                            <th className="border border-gray-300 px-4 py-2 w-42 text-center">Precio (CLP)</th>
                            <th className="border border-gray-300 px-4 py-2 w-42 text-center">A Pagar en Cuba (CUP)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTable.map((row, index) =>(
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{row.weightrange}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{(row.price*1000).toLocaleString("es-CL")}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{row.pricecuba}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}