"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/components/interfaces/product";
import productsMock from "@/mocks/productMocks";

export default function SaleList() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const favorites = productsMock.filter((p) => p.favorite);
  const filteredProducts = productsMock.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Ordenar y clasificar productos
  const categorias = productsMock.filter((p) => !p.idFather);
  const subcategorias = productsMock.filter(
    (p) => p.idFather && (!p.price || p.price === 0)
  );
  const productos = productsMock.filter(
    (p) => p.idFather && p.price && p.price > 0
  );
  // Concatenar en orden: categorías, subcategorías, productos
  const listaOrdenada = [...categorias, ...subcategorias, ...productos];

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
                className="rounded-lg shadow flex flex-col min-w-[180px] h-56 transition-colors p-0 bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)]"
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
        <div>
          {(selectedCategory || selectedSubcategory) && (
            <button
              className="mb-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => {
                if (selectedSubcategory) {
                  // Buscar el padre de la subcategoría
                  const padre = productsMock.find(
                    (p) => p.id === selectedSubcategory
                  )?.idFather;
                  if (padre) {
                    setSelectedSubcategory(null);
                  } else {
                    setSelectedSubcategory(null);
                    setSelectedCategory(null);
                  }
                } else if (selectedCategory) {
                  setSelectedCategory(null);
                  setSelectedSubcategory(null);
                }
              }}
            >
              Regresar
            </button>
          )}
        </div>
        <h3 className="font-semibold mb-2">Todos los productos</h3>
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
            const esCategoria = !product.idFather;
            const esSubcategoria =
              product.idFather && (!product.price || product.price === 0);
            // const esProducto = product.idFather && product.price && product.price > 0;
            return (
              <div
                key={product.id}
                className="rounded-lg shadow flex flex-col h-56 transition-colors p-0 cursor-pointer bg-[var(--colorBackgroundButton)] hover:bg-[var(--colorBackgroundButtonHover)]"
                onClick={() => {
                  if (esCategoria) {
                    setSelectedCategory(product.id);
                    setSelectedSubcategory(null);
                  } else if (esSubcategoria) {
                    setSelectedSubcategory(product.id);
                  }
                }}
              >
                {esCategoria || esSubcategoria ? (
                  <>
                    <div className="flex-[3] w-full flex flex-col justify-center items-center py-2">
                      <div className="font-semibold text-center">
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
                  <>
                    <div
                      className="flex-[7] w-full h-0"
                      style={{ aspectRatio: "1/1" }}
                    >
                      <Image
                        src="/images/default.jpg"
                        alt={product.name}
                        width={224}
                        height={224}
                        className="object-cover w-full h-full rounded-t-lg"
                      />
                    </div>
                    <div className="flex-[3] w-full flex flex-col justify-center items-center py-2">
                      <div className="font-semibold text-center">
                        {product.name}
                      </div>
                      <div className="text-green-600 font-bold">
                        ${product.price}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
