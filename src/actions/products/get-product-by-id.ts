/* eslint-disable curly */
import {apiAxiosCustom} from '../../config/api/api';
import { Gender, Product } from '../../domain/entities/product';
import {ProductResponse} from '../../infrastructure/interfaces/products.response';
import { ProductMapper } from '../../infrastructure/mappers/product.mapper';

const emptyProduct:Product = {
  id: '',
  title:'new product',
  description:'',
  price:0,
  stock:0,
  images:[],
  slug:'',
  gender: Gender.Unisex,
  sizes: [],
  tags: [],
};

export const getProductById = async (id: string):Promise<Product> => {

  //if(id === 'new') return Promise.resolve(emptyProduct);
  //No es necesario la promesa ya que la funcion asincronica lo returna una promesa
  if(id === 'new') return emptyProduct;


  try {
    const {data} = await apiAxiosCustom.get<ProductResponse>(`/products/${id}`);
    return ProductMapper.ProductToEntity(data);

  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by id: ${id}}`);
  }
};
