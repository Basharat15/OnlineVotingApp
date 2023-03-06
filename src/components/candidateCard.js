import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Theme from '../utils/theme';

const CandidateCard = ({
  candidateName,
  candidateEmail,
  candidatePhoneNumber,
  candidateImageUrl,
  cardButton,
  title,
  onButtonPress,
  buttonDisabled,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: candidateImageUrl}} style={styles.img} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{candidateName}</Text>
        <Text style={styles.emailText}>{candidateEmail}</Text>
        <Text style={styles.emailText}>{candidatePhoneNumber}</Text>
        {cardButton ? (
          <TouchableOpacity
            onPress={onButtonPress}
            disabled={buttonDisabled}
            style={styles.containerStyle}>
            <Text style={styles.titleText}>{title}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    // backgroundColor: 'red',
    marginTop: '2%',
    flexDirection: 'row',
    shadowColor: '#000000',
    elevation: 2,
    borderRadius: 2,
  },
  imgContainer: {
    height: '55%',
    width: '23%',
    marginHorizontal: '2%',
    marginTop: '2.5%',
    backgroundColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  detailsContainer: {
    paddingHorizontal: '3%',
    paddingVertical: '5%',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerStyle: {
    backgroundColor: Theme.black,
    padding: '5%',
    borderRadius: 10,
    marginLeft: '40%',
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Theme.white,
  },
});
export default CandidateCard;
