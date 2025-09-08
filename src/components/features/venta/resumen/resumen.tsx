"use client";
import React, { useState, useRef } from "react";
const productos = [
  { id: 1, nombre: "Producto 1", imagen: "/public/file.svg", precio: 120 },
  { id: 2, nombre: "Producto 2", imagen: "/public/globe.svg", precio: 80 },
  { id: 3, nombre: "Producto 3", imagen: "/public/next.svg", precio: 150 },
  { id: 4, nombre: "Producto 4", imagen: "/public/vercel.svg", precio: 200 },
];

export default function Resumen() {
  const [visible, setVisible] = useState(true);
  const [showAside, setShowAside] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const seleccionados = productos.slice(0, 3);
  const subtotal = seleccionados.reduce((acc, p) => acc + p.precio, 0);
  const total = subtotal;

  const handleHide = () => {
    setVisible(false);
    timeoutRef.current = setTimeout(() => setShowAside(false), 300);
  };
  const handleShow = () => {
    setShowAside(true);
    setTimeout(() => setVisible(true), 10);
  };

  return (
    <>
      {showAside && (
        <aside
          className={
            "w-80 p-6 bg-[var(--colorBackgroundBody)] flex flex-col h-screen transition-all duration-300 ease-in-out " +
            (visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20 pointer-events-none")
          }
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Resumen de la venta</h2>
            <button
              className="px-2 py-1 text-xs rounded bg-gray-700 text-white hover:bg-gray-900"
              onClick={handleHide}
            >
              Ocultar
            </button>
          </div>
          <ul className="mb-4 max-h-48 overflow-y-auto">
            {seleccionados.map((producto) => (
              <li key={producto.id} className="flex items-center gap-3 mb-2">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-8 h-8 rounded"
                />
                <span className="flex-1">{producto.nombre}</span>
                <span className="font-bold">${producto.precio}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span className="font-bold">${subtotal}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </aside>
      )}
      {!showAside && (
        <div
          className="fixed bottom-4 right-4 bg-[var(--colorBackgroundBody)] border border-gray-300 rounded-lg shadow-lg px-4 py-2 flex items-center gap-4 cursor-pointer z-50 transition-all duration-300 ease-in-out opacity-100"
          onClick={handleShow}
        >
          <span className="font-bold text-lg">${total}</span>
          <span className="text-sm">{seleccionados.length} productos</span>
          <button className="ml-2 px-2 py-1 text-xs rounded bg-gray-700 text-white hover:bg-gray-900">
            Mostrar
          </button>
        </div>
      )}
    </>
  );
}
