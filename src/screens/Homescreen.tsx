import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem, Text, Pressable } from 'react-native';
import { FAB } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { getCategoriesAsync, getProductsAsync } from '../api';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { Products } from '../redux/slices/productSlice';
import { RootState, useAppDispatch } from '../redux/store';
import { RootStackParamList } from '../types/types';

const Homescreen = () => {
  const [all, setAll] = useState(false);
  const dispatch = useAppDispatch();
  const { products } = useSelector((state: RootState) => state.productSlice);
  const { categories } = useSelector((state: RootState) => state.categorySlice);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //* render products
  const renderProducts: ListRenderItem<Products> = ({ item }) => <ProductCard product={item} />;

  //* render categories
  const renderCategories = ({ item }: any) => <CategoryCard category={item} />;

  //* navigate create screen
  const handleNav = () => {
    navigation.navigate('Create');
  };

  useEffect(() => {
    dispatch(getProductsAsync());
    dispatch(getCategoriesAsync());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProducts}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <FlatList
            data={categories}
            renderItem={renderCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
            numColumns={1}
            ListHeaderComponent={() => (
              <Pressable
                onPress={() => setAll(!all)}
                style={all ? styles.titleContainerOnClick : styles.titleContainer}>
                <Text style={all ? styles.titleOnClick : styles.title}>All</Text>
              </Pressable>
            )}
          />
        )}
      />
      <FAB icon="plus" label="Add Product" onPress={handleNav} style={styles.fabStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  titleContainer: {
    padding: 8,
    margin: 4,
    borderRadius: 5,
    backgroundColor: 'black',
    height: 40,
    justifyContent: 'center',
  },
  titleContainerOnClick: {
    padding: 4,
    margin: 4,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'black',
    height: 50,
    justifyContent: 'center',
    borderWidth: 2,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleOnClick: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});

export default Homescreen;
