import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { getProductByIdAsync } from '../api';
import ProductDetailCard from '../components/ProductDetailCard';
import { resetProduct } from '../redux/slices/productSlice';
import { RootState, useAppDispatch } from '../redux/store';
import { RootStackParamList } from '../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Detailscreen = (props: Props) => {
  const { id } = props.route.params;

  const dispatch = useAppDispatch();
  const { product } = useSelector((state: RootState) => state.productSlice);

  useEffect(() => {
    dispatch(getProductByIdAsync(id));

    return () => {
      dispatch(resetProduct());
    };
  }, [id]);

  return (
    <View style={styles.container}>
      <ProductDetailCard product={product} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Detailscreen;
