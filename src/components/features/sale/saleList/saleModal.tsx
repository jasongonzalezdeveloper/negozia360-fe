import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/components/interfaces/product";

interface SaleModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function SaleModal({
  product,
  isOpen,
  onClose,
}: SaleModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={handleBackgroundClick}
    >
      <div className="bg-[#454545] rounded-lg shadow-lg flex w-[600px] max-w-full p-10 relative flex-col">
        {/* Botón cerrar arriba del todo */}
        <button
          className="absolute top-2 right-4 mb-4 text-white hover:text-gray-400 text-5xl font-bold z-10"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <div className="flex flex-row">
          {/* Imagen a la izquierda */}
          <div className="flex-shrink-0 w-56 h-56 flex items-center justify-center">
            <Image
              src={product.image || "/images/default.jpg"}
              alt={product.name}
              width={224}
              height={224}
              className="object-cover w-full h-full rounded"
            />
          </div>
          {/* Info a la derecha */}
          <div className="flex flex-col flex-1 pl-10 justify-center">
            <div className="font-bold text-2xl mb-4">{product.name}</div>
            <div className="text-green-600 font-bold mb-6 text-xl">
              ${product.price}
            </div>
            <div className="flex items-center gap-4 mb-6 justify-center">
              <button
                className="px-6 py-4 bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)] rounded text-3xl font-bold"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="font-semibold text-2xl w-16 text-center">
                {quantity}
              </span>
              <button
                className="px-6 py-4 bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)] rounded text-3xl font-bold"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              className="w-full py-4 mt-2 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded"
              onClick={() => {
                /* Aquí va la lógica para agregar al carrito */
              }}
            >
              Agregar
            </button>
          </div>
        </div>
        {/* Notas del producto debajo de todo */}
        {product.notes && (
          <div className="w-full mt-8 px-2 text-white text-base">
            <span className="font-semibold">Notas: </span>
            {product.notes}
          </div>
        )}
      </div>
    </div>
  );
}
