"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/components/interfaces/product";
import productsMock from "@/mocks/productMocks";
import SaleModal from "./saleModal";

export default function SaleList() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const favorites = productsMock.filter((p) => p.favorite);

  // Helpers para filtrar hijos
  const getSubcategories = (fatherId: string) =>
    productsMock.filter(
      (p) => p.idFather === fatherId && (!p.price || p.price === 0)
    );
  const getProducts = (fatherId: string) =>
    productsMock.filter(
      (p) => p.idFather === fatherId && p.price && p.price > 0
    );

  // Renderizado dinámico
  let itemsToShow: Product[] = [];
  if (!selectedCategory && !selectedSubcategory) {
    itemsToShow = productsMock.filter((p) => !p.idFather); // Solo categorías
  } else if (selectedCategory && !selectedSubcategory) {
    itemsToShow = [
      ...getSubcategories(selectedCategory),
      ...getProducts(selectedCategory),
    ];
  } else if (selectedSubcategory) {
    itemsToShow = [
      ...getSubcategories(selectedSubcategory),
      ...getProducts(selectedSubcategory),
    ];
  }

  return (
    <div className="w-full min-h-screen p-6 overflow-hidden flex flex-col bg-[var(--colorBackgroundBody)]">
      <h2 className="text-xl font-bold mb-4">
        Lista de productos para la venta
      </h2>
      {/* Favoritos horizontal con scroll */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Favoritos</h3>
        <div className="overflow-x-auto max-w-full">
          <div className="flex gap-4 min-w-[400px]">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="rounded-lg shadow flex flex-col min-w-[180px] h-56 transition-colors p-0 bg-[var(--colorBackgroundButton)] text-[var(--colorTextAlt)] hover:scale-95 cursor-pointer"
              >
                <div
                  className="flex-[7] w-full h-0"
                  style={{ aspectRatio: "1/1" }}
                >
                  <Image
                    src="/images/default.jpg"
                    alt="Producto favorito"
                    width={180}
                    height={180}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                <div className="flex-[3] w-full flex flex-col justify-center items-center py-2">
                  <span className="font-semibold text-center">
                    {product.name}
                  </span>
                  <span className="text-green-600 font-bold">
                    ${product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Buscador y lista normal */}
      <div className="flex-1 overflow-auto">
        <h3 className="font-semibold mb-2">Todos los productos</h3>
        {/* Breadcrumb de navegación */}
        {(selectedCategory || selectedSubcategory) && (
          <div className="mb-4 flex gap-2 flex-wrap items-center text-sm">
            <button
              className="px-3 py-1 rounded  text-gray-800 font-semibold cursor-pointer hover:underline"
              onClick={() => {
                setSelectedCategory(null);
                setSelectedSubcategory(null);
              }}
            >
              Home
            </button>
            {selectedCategory && <span className="mx-2">/</span>}
            {selectedCategory && (
              <button
                className="px-3 py-1 rounded   text-gray-800 font-semibold cursor-pointer hover:underline"
                onClick={() => {
                  setSelectedSubcategory(null);
                }}
              >
                {productsMock.find((p) => p.id === selectedCategory)?.name}
              </button>
            )}
            {selectedSubcategory && (
              <>
                <span className="mx-2">/</span>
                <span className="font-semibold text-gray-700">
                  {productsMock.find((p) => p.id === selectedSubcategory)?.name}
                </span>
              </>
            )}
          </div>
        )}
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nombre..."
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {itemsToShow.map((product) => {
            const isCategory = !product.idFather;
            const isSubcategory =
              product.idFather && (!product.price || product.price === 0);
            const isProduct =
              product.idFather && product.price && product.price > 0;
            let fatherName = "";
            if (isProduct) {
              const father = productsMock.find(
                (p) => p.id === product.idFather
              );
              fatherName = father?.name || "";
            }
            return (
              <div
                key={product.id}
                className="rounded-lg shadow flex flex-col h-60 transition-all duration-200 p-0 cursor-pointer hover:scale-95"
                onClick={() => {
                  if (isCategory) {
                    setSelectedCategory(product.id);
                    setSelectedSubcategory(null);
                  } else if (isSubcategory) {
                    setSelectedSubcategory(product.id);
                  } else {
                    setModalProduct(product);
                    setModalOpen(true);
                  }
                }}
              >
                {isCategory || isSubcategory ? (
                  <>
                    <div className="flex-[3] w-full flex flex-col justify-center items-center py-2 bg-[var(--colorBackgroundProductItem)]">
                      <div className="font-semibold text-center text-[var(--colorTextAlt)] ">
                        {product.name}
                      </div>
                    </div>
                    <div
                      className="flex-[7] w-full h-0"
                      style={{ aspectRatio: "1/1" }}
                    >
                      <Image
                        src="/images/default.jpg"
                        alt={product.name}
                        width={224}
                        height={224}
                        className="object-cover w-full h-full rounded-b-lg"
                      />
                    </div>
                  </>
                ) : (
                  // Product
                  <>
                    <div className="rounded-t-lg w-full text-center font-bold text-base py-5 text-[var(--colorTextAlt)] bg-[var(--colorBackgroundProductItem)] relative">
                      {fatherName}
                      {/* Etiqueta Oferta en la esquina superior derecha del div del nombre del padre */}
                      <span className="absolute top-2 right-2 bg-[var(--colorPrimaryOrange)] text-[var(--colorTextAlt)] text-xs font-bold px-3 py-1 rounded shadow-lg">
                        Oferta
                      </span>
                    </div>
                    <div
                      className="flex-[7] w-full h-0 relative"
                      style={{ aspectRatio: "1/1" }}
                    >
                      <Image
                        src="/images/default.jpg"
                        alt={product.name}
                        width={224}
                        height={224}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-[3] w-full flex flex-col justify-center px-3 py-4 bg-[var(--colorBackgroundProductItemTextCard)] text-[var(--colorText)]">
                      <div className="w-full flex flex-col justify-center py-2 relative">
                        <div className="font-semibold">{product.name}</div>
                        <div className="text-green-600 font-bold">
                          ${product.price}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <SaleModal
        product={modalProduct as Product}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
