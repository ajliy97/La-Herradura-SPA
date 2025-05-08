"use client"
import {Card, CardHeader, CardBody, CardFooter, Image, Avatar} from "@heroui/react";
import { title } from "process";


export default function CardServices() {
    const list = [
    {
        title: "Paso 1: Contactarnos",
        img: "/images/image111.png",
        desc: "Contáctanos a través de WhatsApp, correo o nuestro formulario web para iniciar tu envío. Nuestro equipo estará encantado de asesorarte y brindarte toda la información necesaria." ,
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
      <div className="container mx-auto px-4 py-8">
        {/* Primeras 3 tarjetas  OJO**Hacerlo responsivo a la hora de mostrarse en movil */}
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {list.slice(0, 3).map((item, index) => (
            <div key={index} className="card-container w-full">
              <Card className="max-w-[800px] h-full bg-gradient-to-b from-gray-100 to-gray-200 shadow-md rounded-3xl overflow-hidden">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" className="h-18 w-18" src={item.img} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-l font-semibold leading-none text-default">{item.title}</h4>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="px-5 py-0 text-default-400">
                  <p className="text-base">{item.desc}</p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>

        {/*Ultimas 2 tarjetas - modificadas para ser más anchas y responsivas*/}
        <div className="mt-6">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {list.slice(3).map((item, index) => (
              <div key={index} className="card-container w-full md:w-[500px]">
                <Card className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 shadow-md rounded-3xl overflow-hidden">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar isBordered radius="full" size="md" className="h-18 w-18" src={item.img} />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-l font-semibold leading-none  text-default">{item.title}</h4>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 text-default-400">
                    <p className="text-base">{item.desc}</p>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
    }