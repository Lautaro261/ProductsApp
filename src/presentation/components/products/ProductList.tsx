/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { Product } from '../../../domain/entities/product';
import { Layout, List} from '@ui-kitten/components';
import { ProductCard } from './ProductCard';

interface Props {
    products: Product[];
    fetchNextPage:()=> void;
}

export const ProductList = ({products, fetchNextPage}:Props) => {

  const [isRefreshing, setIsRefreshing] = useState(false);


  const onPullToRefresh = async()=>{
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRefreshing(false);
  };

  return (
    <List
    data={products}
    numColumns={2}
    keyExtractor={(item, index)=>`${item.id}-${index}`}
    renderItem={({item})=>(
        <ProductCard product={item}/>
    )}

    ListFooterComponent={()=> <Layout style={styles.layoutFooter}/>}
    onEndReached={fetchNextPage}
    onEndReachedThreshold={0.8}
    refreshControl={
      <RefreshControl
      refreshing = {isRefreshing}
      onRefresh={onPullToRefresh}
      />
    }
    />
  );
};

 const styles = StyleSheet.create({
  layoutFooter: {
    height: 150,
  },
});

