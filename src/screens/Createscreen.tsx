import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';

import { createProductsAsync } from '../api';
import CategoryCard from '../components/CategoryCard';
import InputCard from '../components/InputCard';
import { Categories } from '../redux/slices/categorySlice';
import { RootState, useAppDispatch } from '../redux/store';
import { RootStackParamList } from '../types/types';

const Createscreen = () => {
  const { categories } = useSelector((state: RootState) => state.categorySlice);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useAppDispatch();

  const navigateHome = () => {
    dispatch(
      createProductsAsync({
        avatar,
        description,
        name,
        price,
        developerEmail: 'batuhanyolcuu@gmail.com',
        category,
      })
    );
    navigation.goBack();
  };

  const renderCategories: ListRenderItem<Categories> = ({ item }) => (
    <CategoryCard category={item} selectedCategory={category} setSelecetedCategory={setCategory} />
  );

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <InputCard value={name} onChangeText={setName} title="Product title" />
        <InputCard value={price} onChangeText={setPrice} title="Price" />
        <InputCard
          value={description}
          onChangeText={setDescription}
          title="Description"
          numOfLines={4}
          multiline
        />
        <InputCard value={avatar} onChangeText={setAvatar} title="Image Link" />
        <View style={{ padding: 6 }}>
          <Text>Selected Category: {category}</Text>
          <FlatList
            data={categories}
            renderItem={renderCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={navigateHome} style={styles.btn}>
          <Text style={styles.btnTitle}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  bottom: {
    marginBottom: 8,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 10,
  },
  btnTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Createscreen;
