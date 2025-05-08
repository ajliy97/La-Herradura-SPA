import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

{/*Barra de navegacion*/}
const items = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Conócenos",
    href: "/about",
  },
  {
    title: "Objetos Prohibidos",
    href: "/object",
  },
  {
    title: "Cotiza aquí",
    href: "/price",
  },
  {
    title: "Preguntas Frecuentes",
    href: "/question",
  },
  {
    title: "Contacto",
    href: "/#contacto",
  },
]

type MainNavProps = {
  className?: string;
  onClick?: () => void;
};


export function MainNav({ className, onClick }: MainNavProps) {
  const pathname = usePathname();
  return (
    <nav className={cn( className)}> {/*"flex items-center space-x-6 text-sm  font-medium"*/}
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className={`${
            pathname === item.href ? "text-blue-800 font-extrabold" : "text-gray-600"
          } hover:text-red-800 transition `}
          >
              {/*"transition-colors hover:text-foreground/80 text-foreground/60"*/}

          {item.title}
        </Link>
      ))}
    </nav>
  )
}

