"use client"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile"



export function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);
    // Función para cerrar el menú
    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    return (
        <header 
            className="md:sticky top-0 relative z-50 w-full border-0 bg-white/60 transition-all duration-300 ease-in-out supports-[backdrop-filter]:backdrop-blur-md ">
            {/*h-16 margenes del navbar, margenes drcha e izq: px- telefono, xl:-px- computador, md:sticky solo para la version de computador*/}
            <div className="container flex md:h-18 h-16 items-center px-2 lg:px-8 xl:px-10">
            
                <div className="mr-4 flex">
                    <Link href="/" onClick={handleCloseMenu} className="mr-6 flex items-center space-x-2">
                        <Logo />
                    </Link>
                </div>

                {/*Desktop Navbar, hidden no aparece en pantallas movil*/}
                <MainNav className="items-center space-x-6 text-sm font-medium hidden md:flex ml-auto pr-4 lg:pr-8 xl:pr-16" />
                
                {/* Barra de navegacion vers movil*/}
                <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} onClose={handleCloseMenu}/>
            </div>
        </header>
    )
}

