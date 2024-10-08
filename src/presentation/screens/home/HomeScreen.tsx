import React from 'react';
import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const HomeScreen = () => {
  return (
    <Layout style={styles.layout}>

      <Text>HomeScreen</Text>
      <Button
      accessoryLeft={<Icon name="home" />}
      >
        Cerrar sesión
      </Button>

    </Layout>
  );
};

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


