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
    <nav
      className="left-0 top-16 h-full w-64 border-r border-gray-200 p-4 flex flex-col z-10 transition-transform duration-300 md:translate-x-0"
      style={{
        backgroundColor: "var(--colorBackgroundNavbar)",
        color: "var(--colorText)",
      }}
    >
      <button
        onClick={handleNuevaVenta}
        className="mb-6 px-4 py-2 text-white rounded transition-colors bg-[var(--colorBackgroundNewSell)] hover:bg-[var(--colorBackgroundNewSellHover)]"
        style={{
          color: "var(--colorText)",
        }}
      >
        Nueva venta
      </button>
      <div className="flex flex-col gap-2">
        <button
          className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundNavActive)] hover:bg-[var(--colorBackgroundNavActiveHover)]"
          style={{
            color: "var(--colorText)",
          }}
        >
          Inventario
        </button>
        <button
          className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)]"
          style={{
            color: "var(--colorText)",
          }}
        >
          Clientes
        </button>
        <button
          className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)]"
          style={{
            color: "var(--colorText)",
          }}
        >
          Proveedores
        </button>
        <button
          className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)]"
          style={{
            color: "var(--colorText)",
          }}
        >
          Reportes
        </button>
        <button
          className="text-left px-4 py-2 rounded transition-colors bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)]"
          style={{
            color: "var(--colorText)",
          }}
        >
          Configuración
        </button>
      </div>
    </nav>
  );
}
