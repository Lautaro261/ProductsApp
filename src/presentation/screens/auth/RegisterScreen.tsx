import React from 'react';
import { ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { CustomIcon } from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';


interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'>{}


export const RegisterScreen = ({navigation}:Props) => {

  const { height } = useWindowDimensions();



  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <Layout style={{paddingTop: height * 0.30}}>
          <Text category="h1">Crear cuenta</Text>
          <Text category="p2">Por favor, crea una cuenta para continuar</Text>
        </Layout>

        {/* Inputs */}

        <Layout style={styles.formContainer}>
        <Input
          style={styles.emailInput}
          placeholder="Nombre completo"
          accessoryLeft={<CustomIcon name="person-outline"/>}
          />

          <Input
          style={styles.emailInput}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Correo electrónico"
          accessoryLeft={<CustomIcon name="email-outline"/>}
          />

        <Input
          style={styles.passwordInput}
          autoCapitalize="none"
          placeholder="Contraseña"
          secureTextEntry
          accessoryLeft={<CustomIcon name="lock-outline"/>}
          />
        </Layout>

        {/* Space */}
        <Layout style={styles.spacer}/>

        {/* Button */}

        <Layout>
          <Button
          accessoryRight={<CustomIcon name="arrow-forward-outline" white/>}
          onPress={()=>{}}
          >
            Crear
          </Button>
        </Layout>

        {/* Información para crear cuenta */}

        <Layout style={styles.spacer}/>

        <Layout
        style={styles.footer}
        >
          <Text>¿Ya tienes cuenta? </Text>
          <Text
          status="primary"
          category="s1"
          onPress={()=>navigation.goBack()}
          > Ingresar</Text>
        </Layout>

      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 40,
  },
  headerContainer: {
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 20,
  },
  emailInput: {
    marginBottom: 10,
  },
  passwordInput: {
    marginBottom: 10,
  },
  spacer:{
    height: 10,
  },
  footer:{
    marginTop: 20,
    alignContent:'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
