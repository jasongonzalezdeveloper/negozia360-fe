import { Product } from "@/components/interfaces/product";

const productsMock: Product[] = [
  {
    "id": "cat1",
    "name": "Cafés",
    "favorite": false,
    "notes": "Variedad de cafés gourmet",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "cat1-1",
    "name": "Cafés Calientes",
    "favorite": false,
    "idFather": "cat1",
    "notes": "Cafés tradicionales servidos calientes",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "cat1-2",
    "name": "Cafés Fríos",
    "favorite": false,
    "idFather": "cat1",
    "notes": "Cafés refrescantes para días calurosos",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "prod1",
    "name": "Espresso",
    "favorite": true,
    "idFather": "cat1-1",
    "notes": "Café concentrado y aromático",
    "price": 1.80,
    "iva": 10.0
  },
  {
    "id": "prod2",
    "name": "Cappuccino",
    "favorite": true,
    "idFather": "cat1-1",
    "notes": "Café con leche vaporizada y espuma",
    "price": 2.50,
    "iva": 10.0
  },
  {
    "id": "prod3",
    "name": "Café Americano",
    "favorite": false,
    "idFather": "cat1-1",
    "notes": "Café negro suave y aromático",
    "price": 2.00,
    "iva": 10.0
  },
  {
    "id": "prod4",
    "name": "Iced Latte",
    "favorite": true,
    "idFather": "cat1-2",
    "notes": "Café con leche frío con hielo",
    "price": 3.50,
    "iva": 10.0
  },
  {
    "id": "prod5",
    "name": "Cold Brew",
    "favorite": false,
    "idFather": "cat1-2",
    "notes": "Café infusionado en frío durante 12 horas",
    "price": 3.80,
    "iva": 10.0
  },
  {
    "id": "cat2",
    "name": "Batidos",
    "favorite": false,
    "notes": "Batidos naturales de frutas",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "cat2-1",
    "name": "Batidos con Leche",
    "favorite": false,
    "idFather": "cat2",
    "notes": "Batidos cremosos a base de leche",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "cat2-2",
    "name": "Batidos con Agua",
    "favorite": false,
    "idFather": "cat2",
    "notes": "Batidos refrescantes a base de agua",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "prod6",
    "name": "Batido de Fresa",
    "favorite": true,
    "idFather": "cat2-1",
    "notes": "Batido natural de fresa con leche",
    "price": 4.20,
    "iva": 10.0
  },
  {
    "id": "prod7",
    "name": "Batido de Plátano",
    "favorite": false,
    "idFather": "cat2-1",
    "notes": "Batido cremoso de plátano",
    "price": 4.00,
    "iva": 10.0
  },
  {
    "id": "prod8",
    "name": "Batido de Mango",
    "favorite": true,
    "idFather": "cat2-2",
    "notes": "Batido tropical de mango con agua",
    "price": 3.80,
    "iva": 10.0
  },
  {
    "id": "prod9",
    "name": "Batido de Frutos Rojos",
    "favorite": false,
    "idFather": "cat2-2",
    "notes": "Mezcla de frutos rojos con agua",
    "price": 4.00,
    "iva": 10.0
  },
  {
    "id": "cat3",
    "name": "Repostería",
    "favorite": false,
    "notes": "Postres y dulces caseros",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "cat3-1",
    "name": "Tartas",
    "favorite": false,
    "idFather": "cat3",
    "notes": "Tartas caseras de diversos sabores",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "cat3-2",
    "name": "Pasteles",
    "favorite": false,
    "idFather": "cat3",
    "notes": "Pasteles individuales",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "prod10",
    "name": "Tarta de Queso",
    "favorite": true,
    "idFather": "cat3-1",
    "notes": "Tarta de queso casera con frambuesas",
    "price": 4.80,
    "iva": 10.0
  },
  {
    "id": "prod11",
    "name": "Tarta de Manzana",
    "favorite": false,
    "idFather": "cat3-1",
    "notes": "Tarta de manzana canela y crujiente",
    "price": 4.20,
    "iva": 10.0
  },
  {
    "id": "prod12",
    "name": "Brownie de Chocolate",
    "favorite": true,
    "idFather": "cat3-2",
    "notes": "Brownie intenso de chocolate negro",
    "price": 3.50,
    "iva": 10.0
  },
  {
    "id": "prod13",
    "name": "Magdalena de Arándanos",
    "favorite": true,
    "idFather": "cat3-2",
    "notes": "Magdalena esponjosa con arándanos",
    "price": 2.50,
    "iva": 10.0
  },
  {
    "id": "cat4",
    "name": "Panadería",
    "favorite": false,
    "notes": "Panes dulces y salados",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "cat4-1",
    "name": "Pan Dulce",
    "favorite": false,
    "idFather": "cat4",
    "notes": "Variedad de panes dulces",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "cat4-2",
    "name": "Pan Salado",
    "favorite": false,
    "idFather": "cat4",
    "notes": "Variedad de panes salados",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "prod14",
    "name": "Croissant",
    "favorite": false,
    "idFather": "cat4-1",
    "notes": "Croissant de mantequilla tradicional",
    "price": 2.20,
    "iva": 10.0
  },
  {
    "id": "prod15",
    "name": "Napolitana de Chocolate",
    "favorite": true,
    "idFather": "cat4-1",
    "notes": "Hojaldre relleno de chocolate",
    "price": 2.80,
    "iva": 10.0
  },
  {
    "id": "prod16",
    "name": "Pan de Ajo",
    "favorite": true,
    "idFather": "cat4-2",
    "notes": "Pan crujiente con ajo y perejil",
    "price": 3.00,
    "iva": 10.0
  },
  {
    "id": "prod17",
    "name": "Pan Integral",
    "favorite": false,
    "idFather": "cat4-2",
    "notes": "Pan de harina integral con semillas",
    "price": 2.80,
    "iva": 10.0
  },
  {
    "id": "cat5",
    "name": "Frescos",
    "favorite": false,
    "notes": "Bebidas refrescantes",
    "price": 0.0,
    "iva": 0.0
  },
  {
    "id": "prod18",
    "name": "Limonada Natural",
    "favorite": true,
    "idFather": "cat5",
    "notes": "Limonada fresca con hierbabuena",
    "price": 3.20,
    "iva": 10.0
  },
  {
    "id": "prod19",
    "name": "Té Helado",
    "favorite": false,
    "idFather": "cat5",
    "notes": "Té negro helado con limón",
    "price": 2.80,
    "iva": 10.0
  },
  {
    "id": "prod20",
    "name": "Agua de Horchata",
    "favorite": true,
    "idFather": "cat5",
    "notes": "Bebida refrescante de arroz y canela",
    "price": 3.00,
    "iva": 10.0
  }
]

export default productsMock;