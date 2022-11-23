import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

type Props = {
  title: string;
  numOfLines?: number;
  multiline?: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

const InputCard = ({ title, numOfLines, multiline, value, onChangeText }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        style={styles.input}
        multiline={multiline}
        placeholder={title}
        numberOfLines={numOfLines}
        value={value}
        onChangeText={onChangeText}
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
