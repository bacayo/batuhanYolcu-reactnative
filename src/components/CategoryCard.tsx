import React, { useState } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

// import { getCategoriesByIdAsync } from '../api';
// import { useAppDispatch } from '../redux/store';

interface CategoryInterface {
  category: {
    name: string;
    _id: string;
  };
}

const CategoryCard = ({ category }: CategoryInterface) => {
  // const dispatch = useAppDispatch();

  const [cat, setCat] = useState({
    clicked: false,
    name: '',
  });

  const handleCatId = () => {
    setCat({ clicked: !cat.clicked, name: category.name });
  };

  return (
    <Pressable
      onPress={handleCatId}
      style={cat.clicked ? styles.containerOnClick : styles.container}>
      <Text style={cat.clicked ? styles.titleOnClick : styles.title}>{category.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 4,
    borderRadius: 5,
    backgroundColor: 'black',
    height: 40,
    justifyContent: 'center',
  },
  containerOnClick: {
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
});

export default CategoryCard;
