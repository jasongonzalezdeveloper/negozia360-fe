"use client";
import React, { useState, useRef } from "react";
import { Product } from "@/components/interfaces/product";
import Image from "next/image";

const initialCart: Array<Product & { quantity: number; image?: string }> = [
  {
    id: "1",
    name: "Producto 1",
    price: 120,
    iva: 19,
    quantity: 2,
    image: "/public/file.svg",
  },
  {
    id: "2",
    name: "Producto 2",
    price: 80,
    iva: 19,
    quantity: 1,
    image: "/public/globe.svg",
  },
];

export default function SaleSummary() {
  const [cart, setCart] = useState(initialCart);
  const [visible, setVisible] = useState(true);
  const [showAside, setShowAside] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Eliminar producto
  const removeProduct = (id: string) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  // Cambiar cantidad
  const changeQuantity = (id: string, delta: number) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
      )
    );
  };

  // Calcular totales
  const subtotal = cart.reduce(
    (acc, p) => acc + (p.price || 0) * p.quantity,
    0
  );
  const iva = cart.reduce(
    (acc, p) => acc + ((p.price || 0) * p.quantity * (p.iva || 0)) / 100,
    0
  );
  const total = subtotal + iva;

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
            "fixed bottom-4 right-4 w-[450px] max-w-[90vw] bg-white rounded-2xl shadow-2xl p-6 flex flex-col z-50 transition-all duration-300 ease-in-out text-gray-900 " +
            (visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20 pointer-events-none")
          }
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Resumen de venta
            </h2>
            <button
              className="px-4 py-2 text-base rounded bg-gray-700 text-white hover:bg-gray-900 font-bold"
              onClick={handleHide}
            >
              Ocultar
            </button>
          </div>
          <div className="flex-1 overflow-auto mb-4">
            <ul className="divide-y divide-gray-200">
              {cart.map((p) => (
                <li key={p.id} className="flex items-center py-3 gap-3">
                  <Image
                    src={"/images/default.jpg"}
                    alt={p.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-base text-gray-800">
                      {p.name}
                    </div>
                    <div className="text-green-600 font-bold">${p.price}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-2 bg-gray-200 rounded-lg text-lg font-bold"
                      onClick={() => changeQuantity(p.id, -1)}
                    >
                      -
                    </button>
                    <span className="font-semibold text-lg w-8 text-center">
                      {p.quantity}
                    </span>
                    <button
                      className="px-3 py-2 bg-gray-200 rounded-lg text-lg font-bold"
                      onClick={() => changeQuantity(p.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="text-lg font-bold w-14 text-right">
                    ${(p.price || 0) * p.quantity}
                  </div>
                  <button
                    className="ml-2 text-red-500 hover:text-red-700 text-3xl px-2"
                    onClick={() => removeProduct(p.id)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600">IVA</span>
              <span className="font-bold text-lg">${iva.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-bold text-xl">Total</span>
              <span className="font-bold text-2xl text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="w-full py-4 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-xl font-bold rounded-xl shadow-lg transition-transform transform hover:scale-105"
            onClick={() => {
              /* Aquí va la lógica para facturar */
            }}
          >
            Facturar
          </button>
        </aside>
      )}
      {!showAside && (
        <div
          className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg px-6 py-4 flex items-center gap-4 cursor-pointer z-50 transition-all duration-300 ease-in-out opacity-100"
          onClick={handleShow}
        >
          <span className="font-bold text-xl text-green-700">
            ${total.toFixed(2)}
          </span>
          <span className="text-base text-gray-700">
            {cart.length} productos
          </span>
          <button className="ml-2 px-4 py-2 text-base rounded bg-gray-700 text-white hover:bg-gray-900 font-bold">
            Mostrar
          </button>
        </div>
      )}
    </>
  );
}
