import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import { ProductCardProps } from '../types/types';

const ProductDetailCard = ({ product }: ProductCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.image} source={{ uri: product.avatar }} />
      </View>
      <View style={{ height: 100, backgroundColor: 'white' }} />
      <View style={styles.bottom}>
        <View style={styles.productInfo}>
          <Text style={[styles.title, styles.name]}>{product.name}</Text>
          <Text style={styles.title}>${product.price}</Text>
        </View>
        <Text style={[styles.desc]}>
          Amet duis esse aute eu enim eu tempor velit sunt ea deserunt sit. Labore velit amet qui
          dolor minim sint fugiat nostrud deserunt velit amet. Sint est culpa voluptate pariatur
          minim commodo sint dolor deserunt consectetur. Nostrud ea exercitation eiusmod ut
          reprehenderit elit irure ex. Esse aliqua cupidatat nostrud elit. Eiusmod Lorem cupidatat
          adipisicing proident aliqua irure ut fugiat et ad.Pariatur eiusmod mollit nostrud laborum
          qui sint cillum eu id mollit deserunt. Qui ad magna consequat ex pariatur non
          reprehenderit deserunt magna et consequat dolor excepteur
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
  top: {
    backgroundColor: '#eee',
  },
  bottom: {
    backgroundColor: 'black',
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    elevation: 20,
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
  },
  productInfo: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
  },
  desc: {
    fontSize: 16,
    color: 'white',
  },
});

export default ProductDetailCard;
