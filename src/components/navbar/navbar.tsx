"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNuevaVenta = () => {
    router.push("/venta/nueva"); // Cambia la ruta según tu estructura
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 border-r bg-[var(--colorBackgroundNavbar)] text-[var(--colorText)] border-gray-200 p-4 flex flex-col z-20 transition-transform duration-300 md:translate-x-0">
      <div>LOGO</div>
      <button
        onClick={handleNuevaVenta}
        className="mb-6 px-4 py-2 text-white rounded transition-colors bg-[var(--colorBackgroundNewSell)] hover:bg-[var(--colorBackgroundNewSellHover)]"
      >
        Nueva venta
      </button>
      <div className="flex flex-col gap-2">
        <button className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundNavActive)] hover:bg-[var(--colorBackgroundNavActiveHover)]">
          Inventario
        </button>
        <button className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)]">
          Clientes
        </button>
        <button className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)]">
          Proveedores
        </button>
        <button className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)]">
          Reportes
        </button>
        <button className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)]">
          Configuración
        </button>
      </div>
    </nav>
  );
}
