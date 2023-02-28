import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const Input = ({placeHolder, onChangeText, secureTextEntry}) => {
  return (
    <TextInput
      placeholder={placeHolder}
      onChangeText={onChangeText}
      style={styles.input}
      secureTextEntry={secureTextEntry}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginTop: '8%',
  },
});
export default Input;
