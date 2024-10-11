import React from 'react';
import { ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { CustomIcon } from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { API_URL, STAGE } from '@env';


interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'>{}


export const LoginScreen = ({navigation}:Props) => {

  const { height } = useWindowDimensions();
console.log({apiUrl: API_URL, stage: STAGE});


  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor, ingrese para continuar</Text>
        </Layout>

        {/* Inputs */}

        <Layout style={styles.formContainer}>
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
            Ingresar
          </Button>
        </Layout>

        {/* Información para crear cuenta */}

        <Layout style={styles.spacer}/>

        <Layout
        style={styles.footer}
        >
          <Text>¿No tienes cuenta? </Text>
          <Text
          status="primary"
          category="s1"
          onPress={()=>navigation.navigate('RegisterScreen')}
          > Crear cuenta</Text>
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
