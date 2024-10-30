import { Layout, Spinner } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

export const LoadingScreen = () => {
  return (
    <Layout style={styles.container}>
      <Spinner status="primary" size="large" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
