export interface IProduct {
  name: string;
  price: number;
  quantity: number;
}

export interface ProductDTO {
  id: number;
  name: string;
  price: number | null;
}
