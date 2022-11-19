import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

type Props = {
  title: string;
  numOfLines?: number;
  multiline?: boolean;
};

const InputCard = ({ title, numOfLines, multiline }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        style={styles.input}
        multiline={multiline}
        placeholder={title}
        numberOfLines={numOfLines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 2,
    paddingLeft: 8,
  },
});

export default InputCard;
