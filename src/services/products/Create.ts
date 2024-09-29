import { prisma } from "../../database";
import { BadRequestError } from "../../errors/BadRequestError";
import { InternalServerError } from "../../errors/InternalServerError";
import { toProduct, toProductDTO } from "../../mappers";
import { IProduct, ProductDTO } from "../../utils/Interfaces";

export const createProduct = async (data: any): Promise<ProductDTO | null> => {
  
  try {
    const product: IProduct = toProduct(data);

    const newProduct = await prisma.product.create({ data: { ...product } });
    return toProductDTO(newProduct);

  } catch (error: any) {
    if (error.code === 'P2002') {
      throw new BadRequestError('Unique constraint failed');
    }
    console.error(error);
    throw new InternalServerError('Could not create product');
  }
  
}