import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Images from '../constants/images';

const CandidateCard = ({
  candidateName,
  candidateEmail,
  candidatePhoneNumber,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={Images.userIcon} style={styles.img} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{candidateName}</Text>
        <Text style={styles.emailText}>{candidateEmail}</Text>
        <Text style={styles.emailText}>{candidatePhoneNumber}</Text>
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
    height: '80%',
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
});
export default CandidateCard;
