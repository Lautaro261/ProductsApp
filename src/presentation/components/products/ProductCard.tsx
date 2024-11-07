import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Product } from '../../../domain/entities/product';
import { Card, Text } from '@ui-kitten/components';
import { FadeInImage } from '../ui/FadeInImage';

interface Props {
    product: Product;
}

export const ProductCard = ({product}:Props) => {
  return (
    <Card
    style={styles.cardContainer}
    >
        {
            (product.images.length === 0)
            ? (
            <Image
             source={require('../../../assets/no-product-image.png')}
             style={styles.imageNoProduct}
             />)
             : (
                <FadeInImage
                uri={product.images[0]}
                style={styles.imageProduct}
                />
             )
        }
        <Text
        numberOfLines={2}
        style={styles.title}
        >
            {product.title}
        </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    margin: 3,
  },
  imageNoProduct:{
    height:200,
    width:'100%',
  },
  imageProduct:{
    flex: 1,
    height: 200,
    width: '100%',
  },
  title:{
    textAlign: 'center',

  },
});
