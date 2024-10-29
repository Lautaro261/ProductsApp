/* eslint-disable curly */
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { CustomIcon } from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { useAuthStore } from '../../store/auth/UseAuthStore';





interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'>{}


export const LoginScreen = ({navigation}:Props) => {


  const { login } = useAuthStore();
  const [ form, setForm ] = useState({
    email: 'test1@google.com',
    password: 'Abc123',
  });
  const { height } = useWindowDimensions();

  const onLogin = async() => {
    if(form.email.length === 0 || form.password.length === 0)return;

    const wasSuccesful = await login(form.email, form.password);

    if(wasSuccesful)return;

    Alert.alert('Error', 'Correo electrónico o contraseña incorrecto');
  };


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
          value={form.email}
          onChangeText={(value)=>setForm({...form, email:value})}
          accessoryLeft={<CustomIcon name="email-outline"/>}
          />

        <Input
          style={styles.passwordInput}
          autoCapitalize="none"
          placeholder="Contraseña"
          secureTextEntry
          value={form.password}
          onChangeText={(value)=>setForm({...form, password: value})}
          accessoryLeft={<CustomIcon name="lock-outline"/>}
          />
        </Layout>

        <Text>{JSON.stringify(form, null, 2)}</Text>

        {/* Space */}
        <Layout style={styles.spacer}/>

        {/* Button */}

        <Layout>
          <Button
          accessoryRight={<CustomIcon name="arrow-forward-outline" white/>}
          onPress={onLogin}
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
