"use client";
import React, { useState } from "react";
import { Product } from "@/components/interfaces/product";
import Image from "next/image";

const pendingSales = [
  {
    id: "1",
    client: "Juan Pérez",
    total: 320,
    quantity: 4,
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
    client: "Ana Torres",
    total: 150,
    quantity: 2,
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
    client: "Carlos Ruiz",
    total: 80,
    quantity: 1,
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
  const [activeSaleId, setActiveSaleId] = useState<string | null>(
    pendingSales[0].id
  );
  const [revealSale, setRevealSale] = useState(false);
  const [showSummary, setShowSummary] = useState(true);
  const activeSale = pendingSales.find((v) => v.id === activeSaleId);

  // Cuando se selecciona una sale, ocultar cards y mostrar solo el resumen
  const handleSaleClick = (id: string) => {
    setActiveSaleId(id);
    setRevealSale(false);
    setShowSummary(true);
  };

  // Agrupación y despliegue de cards
  const handleToggleSales = () => {
    setRevealSale((prev) => !prev);
  };

  return (
    <div className="relative flex items-end">
      {/* Sale activa arriba del grupo de cards */}
      {activeSaleId && (
        <div
          className="fixed bottom-[1px] left-5 z-[998] cursor-pointer select-none"
          onClick={() => setShowSummary(true)}
        >
          <div
            className={`bg-white border-4 border-[var(--colorPrimaryGreen)] ring-2 ring-blue-300 rounded-lg shadow-lg px-6 py-6 flex flex-col justify-center items-center gap-2 w-[220px] h-[120px] transition-all duration-200 mb-2`}
          >
            <span className="font-bold text-xl text-blue-700 mb-2">
              {activeSale?.client}
            </span>
            <div className="flex items-center gap-4 w-full justify-center">
              <span className="font-bold text-xl text-green-700">
                ${activeSale?.total.toFixed(2)}
              </span>
              <span className="text-base text-gray-700">
                {activeSale?.quantity} productos
              </span>
            </div>
          </div>
        </div>
      )}
      {/* Panel fijo para botón y cards de sales pendientes */}
      <aside className="fixed bottom-4 right-4 flex flex-col items-end">
        {/* Botón para agregar nueva sale arriba */}
        <button
          className="mb-2 px-4 py-2 bg-green-600 text-white rounded-lg font-bold shadow hover:bg-green-800 transition cursor-pointer select-none"
          onClick={() => {
            const nuevaId = (pendingSales.length + 1).toString();
            pendingSales.push({
              id: nuevaId,
              client: `Nuevo cliente ${nuevaId}`,
              total: 0,
              quantity: 0,
              cart: [],
            });
            setActiveSaleId(nuevaId);
            setRevealSale(false);
          }}
        >
          + Nueva sale
        </button>
        <div
          className="flex flex-row items-end gap-2 bg-white border border-gray-300 rounded-lg shadow-lg px-4 py-3 min-w-[180px] max-w-[320px] cursor-pointer select-none hover:bg-gray-50 transition pointer-events-auto"
          onClick={handleToggleSales}
          aria-label={revealSale ? "Ocultar sales" : "Mostrar sales"}
        >
          <span className="font-bold text-base text-blue-700">
            Sales pendientes
          </span>
          <span className="ml-2 px-3 py-1 bg-gray-200 rounded-lg text-gray-700 font-bold">
            {revealSale ? "→" : "←"}
          </span>
        </div>

        {/* Cards agrupadas de sales pendientes (excepto la activa) */}
        {revealSale && (
          <div className="flex flex-row-reverse items-end gap-4 mt-2">
            {pendingSales
              .filter((sale) => sale.id !== activeSaleId)
              .map((sale) => {
                return (
                  <div
                    key={sale.id}
                    className="bg-white border border-gray-300 rounded-lg shadow-lg px-6 py-6 flex flex-col justify-center items-center gap-2 cursor-pointer w-[220px] h-[120px] transition-all duration-200 hover:scale-105"
                    onClick={() => handleSaleClick(sale.id)}
                  >
                    <span className="font-bold text-xl text-blue-700 mb-2">
                      {sale.client}
                    </span>
                    <div className="flex items-center gap-4 w-full justify-center">
                      <span className="font-bold text-xl text-green-700">
                        ${sale.total.toFixed(2)}
                      </span>
                      <span className="text-base text-gray-700">
                        {sale.quantity} productos
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </aside>
      {/* Resumen de sale individual */}
      {activeSaleId && showSummary && (
        <aside className="fixed bottom-4 right-4 w-[450px] max-w-[90vw] bg-white rounded-2xl shadow-2xl p-6 flex flex-col z-[999] transition-all duration-300 ease-in-out text-gray-900 opacity-100 translate-y-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Resumen de sale</h2>
            <button
              className="px-4 py-2 text-base rounded bg-gray-700 text-white hover:bg-gray-900 font-bold"
              onClick={() => setShowSummary(false)}
            >
              Cerrar
            </button>
          </div>
          <div className="mb-2">
            <span className="font-bold text-lg text-blue-700">
              {activeSale?.client}
            </span>
          </div>
          <div className="flex-1 overflow-auto mb-4">
            <ul className="divide-y divide-gray-200">
              {activeSale?.cart.map((p) => (
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
                      onClick={() => {}}
                    >
                      -
                    </button>
                    <span className="font-semibold text-lg w-8 text-center">
                      {p.quantity}
                    </span>
                    <button
                      className="px-3 py-2 bg-gray-200 rounded-lg text-lg font-bold"
                      onClick={() => {}}
                    >
                      +
                    </button>
                  </div>
                  <div className="text-lg font-bold w-14 text-right">
                    ${(p.price || 0) * p.quantity}
                  </div>
                  <button
                    className="ml-2 text-red-500 hover:text-red-700 text-3xl px-2"
                    onClick={() => {}}
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
              <span className="font-bold text-lg">
                $
                {activeSale?.cart
                  ? activeSale.cart
                      .reduce((acc, p) => acc + (p.price || 0) * p.quantity, 0)
                      .toFixed(2)
                  : "0.00"}
              </span>
            </div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600">IVA</span>
              <span className="font-bold text-lg">
                $
                {activeSale?.cart
                  ? activeSale.cart
                      .reduce(
                        (acc, p) =>
                          acc +
                          ((p.price || 0) * p.quantity * (p.iva || 0)) / 100,
                        0
                      )
                      .toFixed(2)
                  : "0.00"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-bold text-xl">Total</span>
              <span className="font-bold text-2xl text-green-600">
                $
                {activeSale?.cart
                  ? (
                      activeSale.cart.reduce(
                        (acc, p) => acc + (p.price || 0) * p.quantity,
                        0
                      ) +
                      activeSale.cart.reduce(
                        (acc, p) =>
                          acc +
                          ((p.price || 0) * p.quantity * (p.iva || 0)) / 100,
                        0
                      )
                    ).toFixed(2)
                  : "0.00"}
              </span>
            </div>
          </div>
          <button
            className="w-full py-4 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-xl font-bold rounded-xl shadow-lg transition-transform transform hover:scale-105"
            onClick={() => {}}
          >
            Facturar
          </button>
        </aside>
      )}
    </div>
  );
}
