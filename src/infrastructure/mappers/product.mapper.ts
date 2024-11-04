import { API_URL_BASE } from '../../config/api/api';
import type {Product} from '../../domain/entities/product';
import type {ProductResponse} from '../interfaces/products.response';

export class ProductMapper {
  static ProductToEntity(productResponse: ProductResponse): Product {
    return {
      id: productResponse.id,
      title: productResponse.title,
      price: productResponse.price,
      description: productResponse.description,
      slug: productResponse.slug,
      stock: productResponse.stock,
      sizes: productResponse.sizes,
      gender: productResponse.gender,
      tags: productResponse.tags,
      images: productResponse.images.map(image => `${API_URL_BASE}/files/product/${image}`),
    };
  }
}
