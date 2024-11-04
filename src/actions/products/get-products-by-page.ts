import {apiAxiosCustom} from '../../config/api/api';
import type {ProductResponse} from '../../infrastructure/interfaces/products.response';
import {ProductMapper} from '../../infrastructure/mappers/product.mapper';

export const getProductsByPage = async (page: number, limit: number = 20) => {
  const offset = page * 10;
  try {
    const {data} = await apiAxiosCustom.get<ProductResponse[]>(
      `/products?offset=${offset}&limit=${limit}`,
    );
    const products = data.map(product =>
      ProductMapper.ProductToEntity(product),
    );

    return products;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting products');
  }
};
