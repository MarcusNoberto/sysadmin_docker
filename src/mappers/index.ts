import { Product } from "@prisma/client";
import { IProduct, ProductDTO } from "../utils/Interfaces";

export const toProductDTO = (product: Product | null): ProductDTO | null => {
  if (!product) {
    return null;
  }
  return {
    id: product.id,
    name: product.name,
    price: product.price,
  };
};

export const toProductsDTOList = (products: Product[]): ProductDTO[] | null => {
  return products
    .map((product) => toProductDTO(product))
    .filter((dto) => dto !== null) as ProductDTO[];
};

export const toProduct = (data: any): IProduct => {
  return {
    name: data.name,
    price: data.price,
    quantity: data.quantity,
  };
}
