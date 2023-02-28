import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Images from '../constants/images';
import {TouchableOpacity} from 'react-native';

const SelectImageBottomSheetView = ({_takeAPhoto, _choseFromGallery}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={Theme.touchableOpacity}
        onPress={_takeAPhoto}
        style={styles.itemContainer}>
        <Image style={styles.imageContainer} source={Images.iconCamera} />
        <Text style={styles.txt}>Take a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={Theme.touchableOpacity}
        onPress={_choseFromGallery}
        style={styles.itemContainer}>
        <Image style={styles.imageContainer} source={Images.iconGallery} />
        <Text style={styles.txt}>Choose from Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectImageBottomSheetView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.white,
    flex: 1,
    padding: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '45%',
    backgroundColor: '#F8F6F7',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 20,
    padding: 20,
  },
  imageContainer: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  txt: {
    // fontFamily: Theme.fontPoppinRegular,
    textAlign: 'center',
    marginVertical: 5,
    height: 40,
    color: Theme.black,
  },
});
