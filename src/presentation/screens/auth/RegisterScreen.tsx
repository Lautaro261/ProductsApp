/* eslint-disable curly */
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { CustomIcon } from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { useAuthStore } from '../../store/auth/UseAuthStore';


interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'>{}


export const RegisterScreen = ({navigation}:Props) => {

  const { height } = useWindowDimensions();

  const { register } = useAuthStore();

  const [ isPosting, setIsPosting ] = useState(false);

  const [ form, setForm ] = useState({
    fullName:'',
    email: '',
    password:'',
  });

  const onRegister = async()=>{
    if(form.fullName.length === 0 || form.email.length === 0 || form.password.length === 0) return;

    setIsPosting( true);

    const wasSuccesful = await register(form.fullName, form.email, form.password);

    setIsPosting(false);

    if(wasSuccesful)return;

    Alert.alert('Error', 'Error al registrarse');
  };


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
          value={form.fullName}
          onChangeText={(value)=>setForm({...form, fullName:value})}
          accessoryLeft={<CustomIcon name="person-outline"/>}
          />

          <Input
          style={styles.emailInput}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Correo electrónico"
          value={form.email}
          onChangeText={(value)=>setForm({...form, email: value})}
          accessoryLeft={<CustomIcon name="email-outline"/>}
          />

        <Input
          style={styles.passwordInput}
          autoCapitalize="none"
          placeholder="Contraseña"
          secureTextEntry
          value={form.password}
          onChangeText={(value)=>setForm({...form, password:value})}
          accessoryLeft={<CustomIcon name="lock-outline"/>}
          />
        </Layout>

        {/* Space */}
        <Layout style={styles.spacer}/>

        <Text>{JSON.stringify(form, null, 2)}</Text>

        {/* Button */}

        <Layout>
          <Button
          disabled={isPosting}
          accessoryRight={<CustomIcon name="arrow-forward-outline" white/>}
          onPress={onRegister}
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
