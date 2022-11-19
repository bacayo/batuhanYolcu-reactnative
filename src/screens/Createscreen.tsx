import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';

import CategoryCard from '../components/CategoryCard';
import InputCard from '../components/InputCard';
import { Categories } from '../redux/slices/categorySlice';
import { RootState } from '../redux/store';

const Createscreen = () => {
  const { categories } = useSelector((state: RootState) => state.categorySlice);

  const renderCategories: ListRenderItem<Categories> = ({ item }) => (
    <CategoryCard category={item} />
  );

  return (
    <View style={styles.container}>
      <ExpoStatusBar translucent />
      <InputCard title="Product title" />
      <InputCard title="Price" />
      <InputCard title="Description" numOfLines={4} multiline />
      <InputCard title="Image Link" />
      <View style={{ padding: 6 }}>
        <Text>Selected Category:</Text>
        <FlatList
          data={categories}
          renderItem={renderCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default Createscreen;
