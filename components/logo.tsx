import Image from "next/image"

export function Logo() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/images/La Herradura Spa-Photoroom.png"
        alt="La Herradura SPA envios courier"
        width={100}
        height={100}
        className="h-12 w-auto transition-transform hover:scale-90"
        priority
      />
    </div>
  )
}
