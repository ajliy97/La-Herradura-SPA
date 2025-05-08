import { Menu, X } from "lucide-react"; // para los íconos de hamburguesa y cerrar
import { useState } from "react";
import { MainNav } from "./main-nav";

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onClose: () => void;
};



export function MobileNav( {isOpen, setIsOpen, onClose }: MobileNavProps) {

  //Funcion para cerrar el menú
  const handleCloseMenu = () => {
    setIsOpen(false);
  };


  return (
    <div className="flex md:hidden ml-auto"> {/* Solo visible en móvil md:hidden no muestra en pantallas de computadores o +*/}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 text-gray-800 focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="fixed top-14 left-0 text-sm w-full bg-white shadow-lg p-4 z-50 md:hidden">
          <MainNav 
            className="flex flex-col items-start space-y-4"
            onClick={handleCloseMenu} 
          />
        </div>
      )}
    </div>
  );
}

