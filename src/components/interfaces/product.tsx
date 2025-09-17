export interface Product {
  id: string;
  name: string;
  image?: string;
  favorite?: boolean;
  idFather?: string;
  notes?: string;
  price?: number;
  iva?: number;
}
