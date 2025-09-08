import React from "react";

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    imagen: "/public/file.svg",
    precio: 120,
  },
  {
    id: 2,
    nombre: "Producto 2",
    imagen: "/public/globe.svg",
    precio: 80,
  },
  {
    id: 3,
    nombre: "Producto 3",
    imagen: "/public/next.svg",
    precio: 150,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/public/vercel.svg",
    precio: 200,
  },
];
export default function Lista() {
  return (
    <div className="flex h-full">
      {/* Lista de productos */}
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-4">
          Lista de productos para la venta
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-12 h-12 mb-2"
              />
              <div className="font-semibold">{producto.nombre}</div>
              <div className="text-green-600 font-bold">${producto.precio}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
