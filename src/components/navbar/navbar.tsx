"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNuevaVenta = () => {
    router.push("/venta/nueva"); // Cambia la ruta según tu estructura
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 border-r bg-[var(--colorBackgroundNavbar)] text-[var(--colorText)] border-gray-200 p-4 flex flex-col z-20 transition-transform duration-300 md:translate-x-0">
      <div className="mb-6 flex justify-center items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="h-20 w-auto"
          priority
        />
      </div>
      <button
        onClick={handleNuevaVenta}
        className="mb-6 px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundNewSell)] hover:bg-[var(--colorBackgroundNewSellHover)]"
      >
        Nueva venta
      </button>
      <div className="flex flex-col gap-2">
        <button className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundNavActive)] hover:bg-[var(--colorBackgroundNavActiveHover)] text-[var(--colorText)]">
          Inventario
        </button>
        <button className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)] text-[var(--colorTextAlt)]">
          Clientes
        </button>
        <button className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)] text-[var(--colorTextAlt)]">
          Proveedores
        </button>
        <button className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)] text-[var(--colorTextAlt)]">
          Reportes
        </button>
        <button className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)] text-[var(--colorTextAlt)]">
          Configuración
        </button>
      </div>
    </nav>
  );
}
