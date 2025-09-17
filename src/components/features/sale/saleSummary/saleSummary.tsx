"use client";
import React, { useState, useRef } from "react";
import { Product } from "@/components/interfaces/product";
import Image from "next/image";

const ventasPendientes = [
  {
    id: "1",
    cliente: "Juan Pérez",
    total: 320,
    cantidad: 4,
    cart: [
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
        quantity: 2,
        image: "/public/globe.svg",
      },
    ],
  },
  {
    id: "2",
    cliente: "Ana Torres",
    total: 150,
    cantidad: 2,
    cart: [
      {
        id: "3",
        name: "Producto 3",
        price: 150,
        iva: 19,
        quantity: 2,
        image: "/public/next.svg",
      },
    ],
  },
  {
    id: "3",
    cliente: "Carlos Ruiz",
    total: 80,
    cantidad: 1,
    cart: [
      {
        id: "4",
        name: "Producto 4",
        price: 80,
        iva: 19,
        quantity: 1,
        image: "/public/window.svg",
      },
    ],
  },
];

export default function SaleSummary() {
  const [activeVentaId, setActiveVentaId] = useState(ventasPendientes[0].id);
  const [visible, setVisible] = useState(true);
  const [showAside, setShowAside] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeVenta = ventasPendientes.find((v) => v.id === activeVentaId);
  const cart = activeVenta?.cart || [];
  const cliente = activeVenta?.cliente || "";

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
          {/* Mostrar nombre del cliente arriba del resumen */}
          <div className="mb-2">
            <span className="font-bold text-lg text-blue-700">{cliente}</span>
          </div>
          <div className="flex-1 overflow-auto mb-4">
            <ul className="divide-y divide-gray-200">
              {cart.map((p) => (
                <li key={p.id} className="flex items-center py-3 gap-3">
                  <Image
                    src={p.image || "/images/default.jpg"}
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
          className="fixed bottom-4 right-4 flex flex-row-reverse z-50 items-end"
          style={{ gap: 0 }}
        >
          {ventasPendientes.map((venta, idx, arr) => (
            <div
              key={venta.id}
              className="bg-white border border-gray-300 rounded-lg shadow-lg px-6 py-4 flex flex-col items-start gap-2 cursor-pointer min-w-[260px] max-w-[260px] transition-all duration-200 hover:scale-105"
              style={{
                position: "relative",
                right: `${idx * 40}px`,
                zIndex: arr.length - idx,
                marginLeft: idx !== arr.length - 1 ? "-180px" : "0",
              }}
              onClick={() => {
                setActiveVentaId(venta.id);
                handleShow();
              }}
            >
              <span className="font-bold text-xl text-blue-700 mb-2">
                {venta.cliente}
              </span>
              <div className="flex items-center gap-4 w-full">
                <span className="font-bold text-xl text-green-700">
                  ${venta.total.toFixed(2)}
                </span>
                <span className="text-base text-gray-700">
                  {venta.cantidad} productos
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
