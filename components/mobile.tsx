import { Menu, X } from "lucide-react"; // para los íconos de hamburguesa y cerrar
import { MainNav } from "./main-nav";
import { useEffect, useRef } from "react";

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onClose: () => void;
};



export function MobileNav( {isOpen, setIsOpen, onClose }: MobileNavProps) {
  const menuRef = useRef<HTMLDivElement>(null); // Referencia al menú desplegable

  //Funcion para cerrar el menú cuando se hace click en un elemento del menú
  const handleCloseMenu = () => setIsOpen(false);
  
   // Cierra el menú si se hace clic fuera del menú
  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);


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
        <>
          {/* Menú */}
          <div
            ref={menuRef}
            className="fixed top-14 left-0 text-sm w-full bg-white shadow-lg p-4 z-50 md:hidden"
          >
          <MainNav 
            className="flex flex-col items-start space-y-4"
            onClick={handleCloseMenu} 
          />
        </div>
        </>
      )}
    </div>
  );
}

