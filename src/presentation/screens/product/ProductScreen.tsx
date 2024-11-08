import React, { useRef } from 'react';
import {StyleSheet} from 'react-native';
import {MainLayout} from '../../layouts/MainLayout';
import {Text} from '@ui-kitten/components';
import {useQuery} from '@tanstack/react-query';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { getProductById } from '../../../actions/products/get-product-by-id';

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'>{}

export const ProductScreen = ({route}:Props) => {

  const productIdRef = useRef(route.params.productId);

  const { data:product} = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: ()=>getProductById(productIdRef.current),

  });

  if (!product) {
    return <MainLayout title="Cargando..." />;
  }

  return (
    <MainLayout
    title={product.title}
    subTitle={`Precio: ${product.price}`}
    >
      <Text>{product.title}</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
