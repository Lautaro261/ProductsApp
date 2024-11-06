import React from 'react';
import { Text } from '@ui-kitten/components';
import { useQuery } from '@tanstack/react-query';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { MainLayout } from '../../layouts/MainLayout';

export const HomeScreen = () => {


  const { isLoading, data:products = [] } = useQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60, // 1 hora
    queryFn: ()=>getProductsByPage(0),
  });


  return (
    <MainLayout
    title="TesloShop - Products"
    subTitle="Aplicación Administrativa"
    rightAction={()=>{}}
    rightActionIcon="plus-outline"
    >
      <Text>HomeScreen</Text>
    </MainLayout>
  );
};


