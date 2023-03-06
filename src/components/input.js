import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const Input = ({placeHolder, onChangeText, secureTextEntry, editable}) => {
  return (
    <TextInput
      placeholder={placeHolder}
      onChangeText={onChangeText}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      editable={editable}
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
