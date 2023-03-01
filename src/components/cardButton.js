import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Theme from '../utils/theme';

const CardButton = ({onPress, title, customStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[customStyle, styles.containerStyle]}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Theme.black,
    padding: '5%',
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Theme.white,
  },
});
export default CardButton;
