"use client"
import {Card, CardHeader, CardBody, CardFooter, Image, Avatar} from "@heroui/react";
import { title } from "process";


export default function CardServices() {
    const list = [
    {
        title: "Paso 1: Contactarnos",
        img: "/images/image111.png",
        desc: "Contáctanos a través de WhatsApp para iniciar tu envío. Nuestro equipo estará encantado de asesorarte y brindarte toda la información necesaria." ,
    },
    {
        title: "Paso 2: Recogida de Encomienda",
        img: "/images/square.png",
        desc:"Coordinamos la recogida de tu paquete en la dirección que nos indiques o puedes entregarlo en uno de nuestros puntos autorizados. ¡Fácil, rápido y seguro!" ,
    },
    {
        title: "Paso 3: Preparación de la Carga",
        img: "/images/box.png",
        desc: "Revisamos, clasificamos y embalamos tu envío para asegurar que cumpla con las normativas aduaneras y llegue en perfectas condiciones a su destino.",
    },
    {
        title: "Paso 4: Envío de Código de Rastreo",
        img: "/images/check.png",
        desc:"Una vez procesado tu envío, te enviamos un código de rastreo para que puedas seguir el estado de tu paquete en todo momento, desde el origen hasta la entrega." ,
    },
    {
        title: "Paso 5: Envío al Destino",
        img: "/images/man.png",
        desc: "Realizamos el despacho y traslado hasta Cuba mediante nuestros socios logísticos. Garantizamos un envío eficiente y seguro hasta su destino final.",
    },
    ];

    return (
      <div className="container mx-auto pt-3 md:p-6 pb-4 md:pb-6">
        <div className="mx-auto flex w-full max-w-screen-xl flex-wrap justify-center gap-4 md:gap-6">
          {list.map((item, index) => (
            <div key={index} className="card-container w-full max-w-sm sm:w-[46%] md:max-w-md lg:w-[32%] lg:max-w-md">
              <Card className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 shadow-md rounded-3xl overflow-hidden">
                <CardHeader className="flex items-center justify-start">
                  <Avatar radius="full" size="md" className="h-14 w-14 border-2 rounded-full border-white/100" src={item.img} />
                  <div className="flex flex-1 flex-col justify-center">
                    <h4 className="text-l font-semibold leading-none text-default">{item.title}</h4>
                  </div>
                </CardHeader>
                <CardBody className="card-ship pt-0.5 pb-4 px-6 text-default-400 text-center">
                  <p className="text-base">{item.desc}</p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    )
    }