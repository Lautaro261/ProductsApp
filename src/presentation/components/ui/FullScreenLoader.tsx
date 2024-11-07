import { Layout, Spinner } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';


export const FullScreenLoader = () => {
  return (
    <Layout style={styles.layputContainer}>
        <Spinner
        size="giant"
        />
    </Layout>
  );
};

const styles = StyleSheet.create({
  layputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
