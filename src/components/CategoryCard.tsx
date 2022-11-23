import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

import { filterProducts } from '../redux/slices/productSlice';
import { useAppDispatch } from '../redux/store';

// import { getCategoriesByIdAsync } from '../api';
// import { useAppDispatch } from '../redux/store';

interface CategoryInterface {
  category: {
    name: string;
    _id: string;
  };
  selectedCategory: string;
  setSelecetedCategory: any;
}

const CategoryCard = ({ category, selectedCategory, setSelecetedCategory }: CategoryInterface) => {
  const dispatch = useAppDispatch();
  const route = useRoute();

  const handleCatId = () => {
    setSelecetedCategory(category.name);
    if (route.name === 'Home') {
      dispatch(filterProducts(category));
    }
  };

  return (
    <Pressable
      onPress={handleCatId}
      style={selectedCategory === category.name ? styles.container : styles.containerOnClick}>
      <Text style={selectedCategory === category.name ? styles.title : styles.titleOnClick}>
        {category.name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 4,
    borderRadius: 10,
    backgroundColor: 'black',
    height: 40,
    justifyContent: 'center',
  },
  containerOnClick: {
    padding: 8,
    margin: 4,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  titleOnClick: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CategoryCard;
