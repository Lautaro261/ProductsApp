import React from 'react';
import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useAuthStore } from '../../store/auth/UseAuthStore';

export const HomeScreen = () => {

  const { logout } = useAuthStore();

  return (
    <Layout style={styles.layout}>

      <Text>HomeScreen</Text>
      <Button
      accessoryLeft={<Icon name="log-out-outline" />}
      onPress={()=>logout()}
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


