import { MaterialCommunityIcons as MCI } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

import { ProductCardProps, RootStackParamList } from '../types/types';

const ProductCard = ({ product }: ProductCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate('Detail', {
      id: product._id,
    });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.avatar }} />
      </View>
      <View style={styles.productInfo}>
        <Text numberOfLines={1} style={styles.title}>
          {product.name}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>${product.price}</Text>
          <MCI
            style={{ transform: [{ rotateY: '180deg' }] }}
            name="pencil"
            size={20}
            color="#ffcf2a"
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    flex: 1,
    backgroundColor: '#eee',
    elevation: 5,
    borderRadius: 5,
  },
  imageContainer: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
  },
  productInfo: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 5,
  },
  title: {
    color: 'white',
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: 'white',
    paddingLeft: 5,
    paddingBottom: 5,
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductCard;
