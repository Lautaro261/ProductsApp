import {apiAxiosCustom} from '../../config/api/api';
import { Product } from '../../domain/entities/product';
import {ProductResponse} from '../../infrastructure/interfaces/products.response';
import { ProductMapper } from '../../infrastructure/mappers/product.mapper';

export const getProductById = async (id: string):Promise<Product> => {
  try {
    const {data} = await apiAxiosCustom.get<ProductResponse>(`/products/${id}`);
    return ProductMapper.ProductToEntity(data);

  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by id: ${id}}`);
  }
};
