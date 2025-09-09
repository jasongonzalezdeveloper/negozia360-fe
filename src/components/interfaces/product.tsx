export interface Product {
  id: string;
  name: string;
  favorite?: boolean;
  idFather?: string;
  notes?: string;
  price?: number;
  iva?: number;
}
