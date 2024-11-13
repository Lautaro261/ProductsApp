import React, {useRef} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {MainLayout} from '../../layouts/MainLayout';
import {
  Button,
  ButtonGroup,
  Input,
  Layout,
  Text,
  useTheme,
} from '@ui-kitten/components';
import {useQuery} from '@tanstack/react-query';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {getProductById} from '../../../actions/products/get-product-by-id';
import {ScrollView} from 'react-native-gesture-handler';
import {FadeInImage} from '../../components/ui/FadeInImage';
import {Gender, Size} from '../../../domain/entities/product';
import {CustomIcon} from '../../components/ui/CustomIcon';
import {Formik} from 'formik';

const sizes: Size[] = [Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl];
const genders: Gender[] = [Gender.Kid, Gender.Men, Gender.Women, Gender.Unisex];

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route}: Props) => {
  const productIdRef = useRef(route.params.productId);
  const theme = useTheme();

  const {data: product} = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
  });

  if (!product) {
    return <MainLayout title="Cargando..." />;
  }

  return (
    <Formik
    initialValues={product}
    onSubmit={value => console.log(value)}
    >


      {({handleChange, handleSubmit, values, errors, setFieldValue}) => (

        <MainLayout
        title={values.title}
        subTitle={`Precio: ${values.price}`}
        >
          <ScrollView style={styles.scrollContainer}>

            {/* Imágenes del producto */}
            <Layout>
              <FlatList
                data={values.images}
                keyExtractor={item => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <FadeInImage uri={item} style={styles.imageProduct} />
                )}
              />
            </Layout>

            {/* Formulario */}
            <Layout style={styles.layoutForm}>
              <Input
                style={styles.inputForm}
                label="Título"
                value={values.title}
                onChangeText={handleChange('title')}
              />

              <Input
                style={styles.inputForm}
                label="Slug"
                value={values.slug}
                onChangeText={handleChange('slug')}
              />

              <Input
                style={styles.inputForm}
                label="Descripción"
                value={values.description}
                onChangeText={handleChange('description')}
                multiline
                numberOfLines={5}
              />
            </Layout>

            {/* Precio y stock */}

            <Layout style={styles.layoutNumber}>
              <Input
                style={styles.inputFormNumber}
                label="Precio"
                value={values.price.toString()}
                onChangeText={handleChange('price')}
              />

              <Input
                style={styles.inputFormNumber}
                label="Inventario"
                value={values.stock.toString()}
                onChangeText={handleChange('stock')}
              />
            </Layout>

            {/* Selectores */}

            <ButtonGroup
              size="small"
              appearance="outline"
              style={styles.buttonGroup}>
              {sizes.map((size, index) => (
                <Button
                onPress={()=>setFieldValue(
                  'sizes',
                  values.sizes.includes(size)
                  ? values.sizes.filter(s => s !== size)
                   : [... values.sizes, size]
                )}
                  style={[
                    styles.buttonMap,
                    {
                      backgroundColor: values.sizes.includes(size)
                        ? theme['color-primary-200']
                        : undefined,
                    },
                  ]}
                  key={index}>
                  {size}
                </Button>
              ))}
            </ButtonGroup>

            <ButtonGroup
              size="small"
              appearance="outline"
              style={styles.buttonGroup}>
              {genders.map((gender, index) => (
                <Button
                onPress={()=>setFieldValue('gender', gender)}
                  style={[
                    styles.buttonMap,
                    {
                      backgroundColor: values.gender.startsWith(gender)
                        ? theme['color-primary-200']
                        : undefined,
                    },
                  ]}
                  key={index}>
                  {gender}
                </Button>
              ))}
            </ButtonGroup>

            {/* Botòn de guardar */}

            <Button
              onPress={() => {}}
              style={styles.buttonSave}
              accessoryLeft={<CustomIcon name="save-outline" white />}>
              Guardar
            </Button>

            <Text>{JSON.stringify(values, null, 2)}</Text>

            {/* Separador */}
            <Layout style={styles.layoutSeparator} />
          </ScrollView>
        </MainLayout>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  imageProduct: {
    width: 300,
    height: 300,
    marginHorizontal: 7,
  },
  layoutForm: {
    marginHorizontal: 10,
  },
  inputForm: {
    marginVertical: 5,
  },
  inputFormNumber: {
    flex: 1,
  },
  layoutNumber: {
    marginHorizontal: 15,
    marginVertical: 5,
    flexDirection: 'row',
    gap: 10,
  },
  layoutSeparator: {
    height: 200,
  },
  buttonGroup: {
    margin: 2,
    marginTop: 20,
    marginHorizontal: 15,
  },
  buttonMap: {
    flex: 1,
  },
  buttonSave: {
    margin: 15,
  },
});
