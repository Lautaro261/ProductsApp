/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useInfiniteQuery} from '@tanstack/react-query';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { MainLayout } from '../../layouts/MainLayout';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { ProductList } from '../../components/products/ProductList';
import { FAB } from '../../components/ui/FAB';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigator';

export const HomeScreen = () => {


/*   const { isLoading, data:products = [] } = useQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60, // 1 hora
    queryFn: ()=>getProductsByPage(0),
  }); */

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60, // 1 hora
    initialPageParam: 0,
    queryFn: async(params)=>{
      const products = await getProductsByPage(params.pageParam);
      return products;
    },
    getNextPageParam: (lastPage, allPage) => allPage.length,
  });


  return (
    <>
    <MainLayout
    title="TesloShop - Products"
    subTitle="Aplicación Administrativa"
    rightAction={()=>{}}
    rightActionIcon="plus-outline"
    >
      {
        isLoading ? (<FullScreenLoader/>)
        : (
        <ProductList
        products={data?.pages.flat() ?? []}
        fetchNextPage={fetchNextPage}
        />
      )
      }
    </MainLayout>

    <FAB
    iconName="plus-outline"
    onPress={()=>navigation.navigate('ProductScreen', {productId: 'new'})}
    style={{
      position:'absolute',
      bottom: 30,
      right: 20,
    }}
    />
    </>
  );
};


