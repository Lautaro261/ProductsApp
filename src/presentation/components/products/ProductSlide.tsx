import React from 'react';
import {StyleSheet, Image, FlatList} from 'react-native';
import {FadeInImage} from '../ui/FadeInImage';

interface Props {
  images: string[];
}

export const ProductSlide = ({images}: Props) => {
  return (
    <>
      {images.length === 0 ? (
        <Image
          source={require('../../../assets/no-product-image.png')}
          style={styles.imageNoProduct}
        />
      ) : (
        <FlatList
          data={images}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <FadeInImage uri={item} style={styles.imageProduct} />
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageProduct: {
    width: 300,
    height: 300,
    marginHorizontal: 7,
  },
  imageNoProduct: {
    width: 300,
    height: 300,
  },
});
